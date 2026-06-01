---
layout: post
title:  580 SQE1 mock-exam questions and lots of lessons to learn
date:   2026-06-01 10:00:00 +0200
author: dr. Homoki Péter
image: 2026-05-31-580-SQE1-mock-exam-questions-and-lots-of-lessons-to-learn.jpg
tags: 
  - SQE1
  - LLM
---


# 580 SQE1 mock-exam questions and lots of lessons to learn

## 1\. Intro

Last year I decided that I'll self-study for [SQE1](https://en.wikipedia.org/wiki/Solicitors_Qualifying_Examination) on weekends and holidays. I started studying Hungarian law in 1995 at university, and have been a qualified Hungarian lawyer for 22 years now. I felt it was about time to learn something completely different, like English law. It's a completely different beast and you can't understand that difference just by reading studies on comparative law. The bonus is that even after leaving the EU, they still give exemption from SQE2 exams (both oral and written parts), all you have to do is achieve like a 60% success rate on a multiple-choice, single-best-answer test.[^1]

[^1]: SQE1 is sat over two days about a week apart. Each day covers one Functional Legal Knowledge paper (FLK1 or FLK2), delivered as 180 single-best-answer (SBA) multiple-choice questions split into a morning and an afternoon session of 90 questions each. Each session is 2 hours 33 minutes, so roughly 10 hours 12 minutes of examination across both days.
After having read some 28 books and study guides and taking notes, I was ready to do mock exams. But I needed some technical tooling to assist me in the mock exams.

* I had exam questions (SRA/Kaplan free samples + bought a mock exam from the Revise series), and best answers and some explanations.
* I've spent roughly 18 hours over a one-week period (thanks to [Whit Monday](https://en.wikipedia.org/wiki/Whit_Monday)) to review all 580 questions, including two uninterrupted sittings in 153-minute periods (to see what my speed was). All other questions were answered on an availability basis (when I had time). My main objective was not to do the perfect mock-exam, but to find what my weak spots were and what areas still went untested. There are lots of concepts in the study manuals and other books that didn't make sense for me - one approach is to use legal databases (like Westlaw) to research that, and another way is to see how test questions interpret those issues.
* Why I share this story is not really about my results, it's because I had to create a couple of tools to identify the areas I got wrong on the first run and the areas that had not yet been tested, relying on as much official information as possible from SRA.
* And when you have these tools, it seemed fun to compare your results with the results from some of the latest large language models (LLMs): you have a human baseline! This serves as a good excuse a) to show some important concepts with LLMs in practice to lawyers, and b) not to study while doing the analysis and blogposts...
* What I did: I did 19 LLM runs across Anthropic Opus/Sonnet/Haiku[^2] and DeepSeek Chat/Flash/Pro[^3], with and without "thinking". The first one is a frontier model family and the second is an open-weight family.

[^2]: Anthropic model cards / product pages for the models tested here:
    - Claude Opus 4.x - <https://www.anthropic.com/claude/opus>
    - Claude Sonnet 4.x - <https://www.anthropic.com/claude/sonnet>
    - Claude Haiku 4.5 - <https://www.anthropic.com/claude/haiku>
    Anthropic also publishes full model and system cards (the technical equivalents of an SRA assessment specification) at <https://www.anthropic.com/news> as PDFs at release time; verify the exact URL for the snapshot you intend to use before quoting any numbers here.

[^3]: DeepSeek model pages on Hugging Face for the open-weight models tested here:
    - DeepSeek-V4-Pro (1.6T total parameters, 49B activated per token; Mixture-of-Experts; 1M-token context) - <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro>
    - DeepSeek-V4-Flash (284B total parameters, 13B activated per token; Mixture-of-Experts; 1M-token context) - <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash>
    The non-reasoning baseline "DeepSeek Chat" (`deepseek-chat`), which is actually just a non-thinking mode of the same DeepSeek-v4-Flash.
This experiment cost me **$65** direct API spend across all 19 runs, drafting, verification, and analysis, plus the annual Claude Pro subscription I had. I was using Claude Code (Anthropic's agentic CLI) to write the scripts, most of the analysis etc. (but not this blogpost - just footnotes, spelling errors etc.). If you want to understand the costs of the LLMs, you have to understand that it breaks input and output text into chunks called tokens (sub-word units, roughly 4 characters for an English word, less for Hungarian etc). Tokens are what providers measure and bill, both for what you send in and what the model gives as an output.

## 2\. An SQE1 leaderboard 

| Rank | Model (run) | Family | Success | Cost per test (580 Q) | sec/Q |
|---:|---|---|---:|---:|---:|
| 1 | DeepSeek V4 Flash (mean of 2 runs) | DeepSeek | 86.6 % | ~$0.75 | 11 |
| 2 | DeepSeek V4 Flash 16K headroom | DeepSeek | 85.9 % | ~$0.87 | 14 |
| 3 | DeepSeek V4 Pro 16K headroom | DeepSeek | 85.3 % | ~$1.67 | 30 |
| 4 | Claude Opus 4.8 | Anthropic | 85.0 % | ~$4.30 | not measured |
| 5 | DeepSeek V4 Pro (mean of 2 runs) | DeepSeek | 84.9 % | ~$1.40 | 25 |
| 6 | Claude Opus 4.5 | Anthropic | 83.4 % | ~$3.19 | not measured |
| 7 | Claude Opus 4.0 | Anthropic | 81.6 % | ~$3.19 | not measured |
| 8 | Claude Sonnet 4.6 (mean of 3 runs) | Anthropic | 79.1 % | ~$0.64 | 2 |
| 9 | Claude Haiku 4.5 + 2K thinking | Anthropic | 75.3 % | $1.62 | 8 |
| 10 | Claude Haiku 4.5 + 4K thinking | Anthropic | 75.0 % | $2.37 | 11 |
| **11** | **Human (me)** | Homoki | 67.1 % | ~€3,600 | 102 |
| 12 | DeepSeek Chat (mean of 2 runs) | DeepSeek | 66.1 % | ~$0.01 | 1 |
| - | _Expected minimum pass (~60 %)_ | - | _~60 %_ | - | - |
| 13 | Claude Haiku 4.5 (mean of 3 runs) | Anthropic | 48.2 % | ~$0.18 | 1 |
| - | _Random guessing_ | - | _20.0 %_ | - | - |


## 3\. Lesson 1 - What are "thinking" (reasoning) models and why do they cost so much?

To understand the results, you have to be aware that within both model families you can request a straight, "quick" response from a model (without relying on the so-called chain-of-thought capabilities) and a "thinking" response. In case of the latter, you define in advance what the "thinking budget size" will be. The maximum number of tokens the model is allowed to spend on internal reasoning before it must produce the visible answer. E.g. this can be like a 1024 token budget or even up to a 32768 token budget. Reasoning clearly improves the SQE results of the models, but will definitely affect your bill. The cost to answer the same question with thinking can multiply your costs even up to 100× (see below).

Numbers from my benchmark - same model, same 580 questions, only the thinking budget changed:

| Haiku 4.5 setting | Cost | Success | Cost per +1 % point vs baseline |
|---|---:|---:|---:|
| No thinking (mean of 3 runs) | $0.18 | 48.2 % | - |
| + 2K thinking budget | $1.62 | 75.3 % | $0.05 |
| + 4K thinking budget | $2.37 | 75.0 % | $0.08 (and accuracy actually fell by 0.3 % point) |

The first 1,024 thinking tokens bought 27 percentage points of accuracy at five cents per point. The next 1,024 bought nothing.
Obviously, this $65 is a lot of money to burn on posts like this, and I definitely didn't have the money to spend $1400 on a 580-test run just to get the best possible outcome from Claude Opus with a 32 K thinking-budget run.
As you can see below, thinking can improve results a lot, but there is no guarantee that spending more on reasoning will improve your performance. So, just because a commercial communication says something is powered by Opus with reasoning, that could still mean many things.
Also, the pricing of [open-weight models](https://en.wikipedia.org/wiki/Open-source_artificial_intelligence#Open-weight_models) is very different from the frontier models, even if they are not run on your own machine but used remotely, as a cloud service (via APIs). They are extremely cheap but still surprisingly capable. I was able to do a lot more test runs with [DeepSeek](https://en.wikipedia.org/wiki/DeepSeek) because, model for model, it was roughly an order of magnitude cheaper than Anthropic.
Open-weight models are important for the legal profession, because you can fully control your data - and inference can stay on the firm's own hardware so client data never leaves it.[^4]
Of course, running the largest open-weight models at home is theoretically possible but practically demanding. To run something like DeepSeek-V4-Pro, you would need a [three-phase power](https://en.wikipedia.org/wiki/Three-phase_electric_power) supply, the rig consumes around 2.5 kW just doing nothing and 10 kW when answering questions, and the whole setup would roughly cost $500K. However, the DeepSeek-V4-Flash, which delivered the best performance in our tests, would cost to run for less than $100,000, and it can be run on a single-phase power from home. (With a few compromises and a bit of luck, you can even get a machine for under $30,000 to run this model, such as a Mac Studio M3 Ultra, if one is currently available.) For most legal work, much smaller open-weight models such as the [Qwen](https://en.wikipedia.org/wiki/Qwen) family 3.6 ([github.com/QwenLM/Qwen3.6](https://github.com/QwenLM/Qwen3.6)) would be sufficient.

[^4]: CCBE (Council of Bars and Law Societies of Europe), *Technical Guide on the Use of AI Tools and Models by Lawyers*, March 2026. Available at <https://www.ccbe.eu/fileadmin/speciality_distribution/public/documents/IT_LAW/ITL_Guides_recommendations/EN_ITL_20260327_CCBE-technical-guide-on-the-use-of-AI-tools-and-models-by-lawyers.pdf>.

* \[TABLE - Lesson 1 cost ladder]

## 4\. Lesson 2 - Speed, cost, accuracy

From the benchmark:

  * DeepSeek Chat (=non-reasoning Flash): 0.8 s/Q, 66 % accuracy
  * DeepSeek Flash: 10 s/Q, 87 %
  * DeepSeek Pro: 25 s/Q, 85 %
| Model | Time per question | Cost (580 Q) | Success |
|---|---:|---:|---:|
| DeepSeek Chat | ~1 s | ~$0.01 | 66 % |
| Claude Haiku 4.5 + 2K thinking | ~8 s | $1.62 | 75 % |
| DeepSeek V4 Flash | ~11 s | ~$0.75 | 87 % |
| DeepSeek V4 Pro | ~25 s | ~$1.40 | 85 % |
| **Human (me)** | ~102 s | ~€3,600 | 67 % |

The DeepSeek "thinking" models (Flash and Pro) are 10–30× slower than the DeepSeek non-thinking model; Pro spends 2.5× more time than Flash for less accuracy. As a reference point, I spend roughly 4× longer per question than the slowest reasoning model - and over a hundred times longer than the DeepSeek Chat model, having the same performance when being 100 times slower and thousands of times more expensive.

## 5\. Lesson 3 - The same model gives different answers next time

As you can see, if you run the same questions through the same model multiple times, the model will not answer the same way.

Five models were re-run on the identical 580 questions, with no setting changed between runs:

| Model | Runs | Per-run success (%) | Mean | Max gap | Std. deviation | Similarity (Jac.) |
|---|---:|---|---:|---:|---:|---:|
| Haiku 4.5 (non-thinking) | 3 | 49.1 / 47.9 / 47.4 | 48.2 | 1.7 % point | 0.7 % point | 0.75 |
| Sonnet 4.6 (non-thinking) | 3 | 79.5 / 79.5 / 78.4 | 79.1 | 1.0 % point | 0.5 % point | 0.92 |
| DeepSeek Chat (non-thinking) | 2 | 65.5 / 66.7 | 66.1 | 1.2 % point | 0.6 % point | 0.73 |
| DeepSeek V4 Flash (reasoning) | 2 | 87.2 / 86.0 | 86.6 | 1.2 % point | 0.6 % point | **0.52** |
| DeepSeek V4 Pro (reasoning) | 2 | 84.5 / 85.3 | 84.9 | 0.9 % point | 0.4 % point | **0.47** |

**Per-run success** lists the raw scores in order. **Max gap** is the highest score minus the lowest. **Std. deviation** is a single number summarising how scattered the scores are around the mean. **Similarity (Jac.)** compares the *sets of wrong questions* across runs: 1.0 means two runs got exactly the same questions wrong, 0.0 means none in common.

Three things to see:
  * **Max gap is similar across all five models** (~1 % point). If you re-run the same benchmark you should expect about a percentage-point difference. That means any leaderboard gap under roughly 2 % points is noise.
  * **Similarity is very different across models.** Sonnet at 0.92 is very high - when asked the same question on different days it almost always made the same decision; the 1.0-% point spread comes from a handful of borderline questions. Haiku and DeepSeek Chat at ~0.73 reached roughly the same total each time, but on a different slice of questions.

A better-calibrated model can be predictably wrong on the same questions; others can be wrong on different questions each time. For lawyers, this second pattern is the more dangerous one, because it produces inconsistent results on individual questions even when the overall accuracy looks stable.
So, what's important is to see not just X % on a specific benchmark, but also the variance — and ideally the similarity (Jac.) underneath it.

## 6\. Lesson 4 - Price does not always mean better performance, and worse does not always mean cheaper

  * DeepSeek V4 Flash (~$0.75/run, mean of 2): 86.6 %
  * Opus 4.8 (~$4.30/run, ~6× the price): 85.0 %
  * DeepSeek Chat (no thinking, ~$0.01/run, 430× cheaper than Opus 4.8): 66.1 %

It is not necessarily true that you need to use the most expensive models to get the best results, this always depends on the specific task.

| Model | Cost (580 Q) | Correct / 580 | Cost per correct answer |
|---|---:|---:|---:|
| DeepSeek Chat (mean of 2) | ~$0.01 | 384 | $0.00003 |
| Claude Haiku 4.5, no thinking (mean of 3) | ~$0.18 | 279 | $0.0006 |
| Claude Sonnet 4.6 (mean of 3) | ~$0.64 | 459 | $0.0014 |
| DeepSeek V4 Flash (mean of 2) | ~$0.75 | 502 | $0.0015 |
| DeepSeek V4 Pro (mean of 2) | ~$1.40 | 493 | $0.0028 |
| Claude Haiku 4.5 + 2K thinking | $1.62 | 437 | $0.0037 |
| Claude Haiku 4.5 + 4K thinking | $2.37 | 435 | $0.0054 |
| Claude Opus 4.8 | ~$4.30 | 493 | $0.0087 |

Opus 4.8 without thinking is the fourth most accurate model configuration in this benchmark. Sorted by cost per correct answer it is last. The cheapest model that produces a single correct answer here is the non-reasoning DeepSeek Chat (Flash) - about 290× cheaper per correct answer than Opus, despite Opus getting 109 more questions right.

## 7\. Lesson 5 - Different model families fail on different questions

Anthropic and DeepSeek miss largely different questions.

Only 3 questions out of 580 were wrong for **every single one of the 19 runs**, and another 15 were wrong in 17 or 18 of 19. Those represent questions where models are confidently and uniformly wrong.
This also means that routing the same question through two models from different families can catch things one model alone would miss.

**Table - same-model similarity vs cross-family similarity:**

| Comparison | Similarity (Jac.) |
|---|---:|
| Sonnet ↔ Sonnet (same model, different run) | 0.92 |
| Haiku ↔ Haiku (same model, different run) | 0.75 |
| DeepSeek Chat ↔ DeepSeek Chat | 0.73 |
| DeepSeek V4 Flash ↔ Flash | 0.52 |
| DeepSeek V4 Pro ↔ Pro | 0.47 |
| **Anthropic ↔ DeepSeek (cross-family pair)** | **0.14 – 0.43 (mean 0.29)** |

Two non-thinking runs of the same model overlap on their wrong questions 70–90 % of the time. Two reasoning runs of the same model overlap less — only about half. And two models from different families overlap on their wrong questions less than a third of the time.

**Table - consensus failures (questions wrong across many runs):**

| Wrong in N of the 19 full runs | # of QIDs |
|---:|---:|
| Every single run (19 / 19) | 3 |
| 17 or 18 of 19 runs | 15 |
| Majority of runs (10 or more) | 109 |

Three questions out of 580 were wrong for every model in every run.

## 8\. Code and further details

Tools and results are posted at \[https://github.com/peterhomoki/SQE_tests_share/tree/master](https://github.com/peterhomoki/SQE_tests_share/tree/master)
Includes: full taxonomy of SRA, the Flask UI, scripts to bring your own wrong-QIDs CSV, the analysis tools
Excludes: SRA published mock exams and commercial materials I have relied on for building my internal test bank.

The GitHub also includes a more detailed table of the model run results, without showing the actual answers. Every number in this post can be re-derived from this CSV file:
  * `model_runs_anonymised.csv` - one row per `(model, run, question)` with just the question ID and whether the model got it right. This will let you recompute the figures above and do further analysis.

The CSV deliberately omits question text, lead-ins, options, the correct answer, and the topic taxonomy. The QIDs in the CSV are unique identifiers internal to my database.

## 9\. Closing

You can see that evaluating and understanding LLMs is a very important prerequisite to be able to control the appropriate quality of the model output. Regardless of what my actual SQE1 results turn out to be, next time I plan to write about **agentic harnesses** - what they are, how they interact with these LLMs, and how a harness changes the way lawyers use LLMs for real work, not just mock-exam study like this.

