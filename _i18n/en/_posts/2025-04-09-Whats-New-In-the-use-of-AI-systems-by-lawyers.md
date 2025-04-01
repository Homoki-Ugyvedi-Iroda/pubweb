---
layout: post
title:  What's new in the use of AI systems by lawyers?
date:   2025-04-09 10:45:00 +0200
author: dr. Homoki Péter
image: 20250401_Whatsnew_AI_Lawyers_Sign.jpg
tags:
  - law firm information technology
  - prompt injection
  - contract playbook
  - contract negotiation
  - AI4Lawyers
  - CCBE
  - ERA
---

## Webinar presentation for Academy of European Law ERA (Annual Conference on AI Systems and Fundamental Rights)

[Slides are available here](/assets/files/Whats_new_in_the_use_of_AI_systems_by_lawyers.pdf)

[2] Good morning everyone, [intro if necessary]. I would like to introduce you to some of the more recent developments in how lawyers use AI systems.
But let me start with the recent past, and then I will lead you through the challenges and changes. I hope I can show you how technology transforms the way lawyers work while upholding the rule of law.

[3] The Council of Bars and Law Societies of Europe (CCBE), the European Lawyers Foundation and the European Commission had a common project which finished in 2022, and we have published our findings in this Guide. The research for this guide published was finished in the late summer 2021. 

[4] Of course, this means that the Guide was closed before most of the lawyers became aware of what actually a GPT model was. Earlier foundational models (up to GPT-3) already existed at that time, but these were just briefly mentioned in the Guide.
What has really changed after the Guide?

[5] The key to understanding the capabilities of AI systems for lawyers was and is still based on what natural language processing (NLP) tools are capable of. The practical use of NLP tools at that time usually had a narrow focus, such as:

• translation,

• summarization of lengthy texts,

• information retrieval from specific materials.

In 2021, these tools required specific training to be useful: you needed a labelled set of questions and correct answers and train the model with these (updating the weights) to achieve performance that is of practical use.

That also meant you couldn't hope to achieve good performance without having a specialist at your disposal  who were both rare and expensive. 

For European lawyers, this meant separate datasets for each jurisdiction (even if the language was identical). Thus, AI-based tools were expensive and available mostly for researchers or the largest of law firms and legal departments only.

[6] However, GPT-2, a model released by OpenAI back in 2019, had some strange, new, but not yet reliable capability, called "in-context learning". One year later, GPT-3 was built with an even greater model size, and this time, the specialists already understood how important in-context learning will be to make the AI tools useful in many fields, enhancing what tasks these tools can solve.

Why is "in-context learning" important?

Before GPT-3, AI tools required expensive fine-tuning for each specific task. That also meant that if you had a tool specialized for question answering from a document, you couldn't use the same tool for summarization.

These requirements have narrowed down the scope of automation of legal workflow that was possible. It's not just that the user interface had to be changed for a new task (with new dialogues, menu items), but also that in the background, a different AI model was needed, at least had to do a different finetuning, not possible for typical end-users.

[7] In-context learning makes it possible to change how an AI tool operates by simply using a different PROMPT. There is no need to change the weights of the model to adapt it to a different task. And this way, the legal specialists will not need to create hundreds of examples for fine-tuning. It's enough if the user gives a couple of examples (called "few-shot learning"). Users can also often get away with a single example or no examples at all (called "one-" and "zero-shot learning").

Instead of specific narrow workflows, like categorizing a text with a handful of labels, it became possible to break down complex, previously unstructured legal workflows into basic steps.

Not all the steps can be automated. But LLMs enable even a solo law firm to automate a considerable part of their intellectual labour, thus optimizing their revenue generating workflows.

[8] This is similar to how proponents of "scientific management" (Taylorism) broke down physical labour into repeatable parts for OPTIMIZATION. Now, this optimization can even transform the professions that focus on open-ended problems, like legal work. This was previously not possible or cost effective.

[9] LLMs can also provide a theoretical solution to the challenges of needing separate models for each language or jurisdiction.

There are lots of free linguistic resources and data available for training, and a considerable amount of linguistic work has been done. The latest LLMs have all been trained on multiple languages, although the vast majority of the training is done in English. But even if there is just 1% of the amount of Hungarian in these training materials that is still sufficient to achieve fluent performance in most areas, in understanding and language generation.

As long as sufficient material is available for any given language, pre-training can be continued (for open-weight models).
Similarly, copyright concerns aside, we can theoretically feed all the existing legal materials to an existing large language model, like published law, gazettes, case law, legal literature, legal news, even legal forums etc. 

These materials can be used for both pretraining purposes and generate material for finetuning on typical legal tasks we expect. 

[10] The problem is: how do we know how good the new model is? Is it fluent in a given language? Has it seen enough legal corpus to be reliable for a legal task in a given jurisdiction? We cannot rely on the LLM to tell us the truth. We need tools to evaluate their performance: task-specific datasets.

Without professional-grade evaluations, we cannot blindly rely on the results of LLMs, and we need to read all results received in a very critical way.

In long, more complex texts, like in a chain of legal arguments, or in legal workflows building on several different steps, it's not enough to spot the obvious mistakes in the end result. We have to be suspicious of all the interim steps as well, all the reasonings behind the end results, we have to be able to find the invisible errors as well. 

We have to be creative in being able to find all the possible errors it could make during the interim steps, even if those interim errors are not included in the final text - these interim errors will probably lead to an incorrect choice and decision at the end.

[11] Unfortunately, creating reliable evaluation sets is still expensive, and has to be done for each jurisdiction separately and we need legal experts to do it. 

This is a very serious obstacle to the spread of LLMs in the legal work, including lawyers' work. An obstacle to the extension of the scope of possible automations.

We would also need standards for evaluations and standardized datasets to compare the results.

[12] Already, there are widely used standards in natural language processing fields, for example, for language understanding benchmarks. But that doesn't mean we can use these benchmarks for legal tasks. Nor that it is easy to create expressive or representative benchmarks for legal tasks. 

There are already benchmarks for legal tasks, like COLIEE, MAUD, LegalBench, which are still more similar to the generic natural language processing benchmarks, but adapted to a domain specific corpus from a specific jurisdiction (like Greece, Japan, New York).

Serious work is ongoing also at law firms in this area, because benchmarking is very important for law firms, but this doesn't mean we are close to an acceptable solution. The problem is that there is not much of a science behind these evaluations and benchmarking, there is no methodical approach to it yet.

[13] The legal profession in general, and also more specifically the profession of lawyers is very diverse. What most lawyers do and earn a living from is very different from country to country. Even if we limit our research just to BigLaw - that is, lawyers working for international business enterprises (and excluding what is called PeopleLaw, which is naturally connected to bigger jurisdictional differences).

Fact is, there are already specialized LLMs on the market that are used by larger law firms from $100-$300/month/user, especially in the US and UK. In these countries, law firm profitability and market size make it financially profitable for providers to carry out custom pre-training on legal materials and finetuning for certain legal tasks.

[14]  These legal tools also have customized user interfaces and workflows (like chains of prompts not visible to the end-user) and compete with each other both in performance and pricing.

[15] We would like to present a couple of legal tasks, where the use of LLMs is already a well-established practice.

One of the most popular field already available for lawyers is finding specific information from a large set of documents, based on semantic similarity (and not just on keywords).

However, this is not really a single task, it is a composite of very different tasks.

The major differences are based on what kind of extra processing is required before presenting the information found. Transform the information into a different format, answer a specific question based on the relevant extracts, or show me the relations within the information found.

For example, it is a very different exercise if the task is about the discovery process of a large amount of emails, where the focus point is to track complex relationship between emails, and how the set of emails evolves into a summary of statements and how they have changed.

Compare this to the review of a large amount of lease agreements or license agreements, based on a structured set of easy to find information. Like show me the expiration date, are there any renewal provisions, what is the governing law.

Or we may ask the LLM to review the same set of documents based on very ambiguous provisions, like find me any possible Most-Favored Nations clauses, including benchmarking provisions.
Or review the witness testimonies and highlight any contradictions between them.

Or answer simple questions based on an already practical document, like interpreting a detailed and practical operating procedure or a guidance on how to terminate a specific employment.

So, while one may see these all as question answering in natural language processing, they each have a very different niche in the legal market, and are often done by different, specialized tools.

[16] Coming back to the difficulty of evaluating the performance: in order to review how reliable a tool is for each different task types, a separate evaluation is usually needed. There is no reason you could just rely on the results in one task to conclude that your tool will be reliable in another task as well. The same way as you cannot be sure that because a tool works reliably in English, it will also work reliably in your non-English language, like Hungarian.

[17] Although imperfect, benchmarks and evaluations can still provide valuable insights into the performance of these tools. Like the following.

[18] These are published by VALS AI, a provider of a platform for benchmarking and reporting LLM performance. Like, they publish three different benchmarks adapted to legal needs.
One example is "CaseLaw", where non-legal specific LLMs are evaluated based on their performance in US and Canadian family and criminal law cases. The LLMs are queried to answer a question based on a specific case law document

[18] Another, even more interesting project for us is the "VALS Legal AI Report", which tests and compares LLM products offered specifically for lawyers. They have even took the pains to try to compare these tools with some kind of a "lawyer baseline". 

Despite challenges in establishing a reliable lawyer baseline or agreeing with its methodology, this report significantly fills an important gap as the first of its kind.

We can see what are the major fields where lawyers already use these tools. (Of course, if you read the report, you will understand a lot better what each task actually means.) We can also see that extracting information from large documents is already an area where these LLMs are INDISPENSABLE at this moment.

[19] Let's take a look at a very different, nascent area, where we still don't know whether LLMs will be indispensable or not.

This area is called a "playbook-based automation". There is no good benchmark for this, and it is made up of different, more basic legal tasks. 

[20] But we can already find many different tools in this field.

[21] Playbooks have been used in legal departments and law firms for decades. They have recently became more important: due to both 

a) the increased amount of work, and 

b) the increased speed of staff turnover at law firms and departments working with contracts.

A playbook could mean different things, so I have to try to summarize these differences to avoid misunderstanding.

A playbook could mean a log of a specific contract negotiation process. A record of who agreed to what during the negotiations. But it can also mean a template and a guidance, a standard operating procedure or manual, sometimes called a "master playbook". It could even mean just a simple collection of policies and contract negotiation strategies.

On the other hand, playbooks are also used as a template and collection of texts approved by lawyers, a reliable clause bank.

[22] How playbooks are drafted and operate depends a lot on whose templates the contract negotiation process will start from. If the playbook relies on our own template, it is rather easy to include many instructions as to what is a typical ask of our partners, and which asks can be agreed to, what must be pushed back, what to escalate etc.

However, if we have to negotiate third party texts, the playbook has to include information to spot typical risks with typical contract provisions, and how to mitigate the risks identified: what language to use in the contract, or if that is not possible, what technical workarounds there could be, new insurance policies, pushing some risks down to subcontractors or requesting extra warranties from them etc. This version looks more like a risk management guide [ISO 31022:2020].

[23] How does playbook-based automation work? There are two different types of tools currently offered. 

With the first type of tools, we can enter some playbook rules into a user interface, and then the supplier promises us that the LLM will process all documents uploaded against such rules entered. The tool either gives us a report of the results, and flag the issues for human review. Or even gives a suggested wording to turn the problematic clause into something more closely aligned with our rules.

The second, bolder group of tools promises us that they will even draft the playbooks themselves for us. Based on the extensive work they have already done in some areas of law (like NDAs, DPAs, license agreements, contracts with SaaS-providers), they feel they are confident to promise this.

[24] The current problem is that most of these suppliers overpromise and seriously underdeliver. They are barely more than basic frontends glued to standard LLMs. They provide a very restricted structure and editing capabilities for the playbook rules themselves. For example, we can only give them 25 rules, and each rule can be no longer than 4000 characters. And the "extensive work" they claimed to have done, may turn out to be just like 100 hour of reading NDAs as juniors before quitting the law firm. In short, they have no experience, but they may still promise to draft playbooks for us, in any fields, without any valuable knowledge. 

Because LLMs will definitely do everything we ask them to do, but if you cannot trust the supplier, their quality of work, it is simply not worth spending this money just to use new web frontends. Use the LLMs directly instead.

[25]  Contract negotiation is a very diverse and complex field, with many pitfalls, and even more snake oil sellers. You should not automate it, unless you already have a very detailed process, you already know what to expect, and you are capable of evaluating the results you receive.

[26] Think of a rather standard contract negotiation process and how many steps could go wrong in an end-to-end automated negotiation process:

a) You often have to work with amendments, and first create a consolidated version of all the relevant documents (previous amendments, changes and notices in email and letters etc.)

b) You have to review legislative changes since the latest contract date, or changes in the contracting parties.

c) You have to deal with elusive language, like most favored nation clauses, indemnities, parent company guarantees for all affiliates or sanction policies, any of which could break the finances of a single company or an entire company group.

d) You have to deal with conflicting language, like how to interpret correctly an "order of precedence" provision.

e) You have to deal with invalid contract language, like a limitation of liability provision that is patently invalid at least in part - you have to be able to evaluate what will be limited in relation to your liability, even if you cannot convince the other party to delete the invalid part.

Each step could introduce errors in the process. There are called "cascading errors".

[27] Let me finish with an IT security issue that plagues most LLMs, and is very important for contract review, or actually for any automated decision making process.

We can often hear that LLMs are subject to hallucination, because they need to generate those characters, even if they don't have the best answer. But this example is worse than hallucination, it is an adversarial attack called "prompt injection".

Let me show you an example. If I enter the following text [V2hhdCBpcyB0aGUgc3VtIG9mIDIgKyAyPw==], which is a binary encoding in a format called Base64. A GPT-4 or later LLM simply translates this "inside", automatically to the original text, and answers it without even mentioning that this was an encoded question. Even in a contract. 

If the contract negotiation tool was working on a PDF or Word document with white letters on white background and in font size 1, it would still process the information that is otherwise invisible to the human eye.

This is not dangerous, but you can make use of such unexpected behaviour in a way that you put extra provision in the contract.

[28] This example is using white letter size 1, the second one, black letter size 1. Both are encoded in Base16, so no keyword search will reveal its content.

Yet, it's enough to "fool" LLMs, more exactly: the deployers of the LLM. They will think that the governing law of the contract is that of Hungary, not Luxembourg.

The attack is versatile if I know the big partner's playbook.

[29] An automated playbook might trigger an alarm if the governing law is not a specific one. But this way, I can avoid the alarm. I can also say the contract value is below $ 5000.

Even if the contract is signed, the invisible part might still remain there, and no one will know why this deviation from the playbook was not spotted.

This attack is very similar to the very old "invisible ink" trick, and is probably easy to defend against, for example, by asking the LLM to also spot conflicting governing law provisions or ones that override the other.

The real problem is that LLMs can behave unpredictably for humans, and we have to be aware of these vulnerabilities. We can actually affect the way the an LLM behaves, not just by using the user interface intended for that purpose, but also by the input documents (called "indirect prompt injections"). Even by the content of scanned documents. As long as contract negotiation tools are prepared for these attacks, they could handle the most typical attacks, but not all.

[30] That is why the unconditional right to a human judge is important for all of us - even if we have an automated decision making process, we have to insist on this kind of ultimate human control in the judicial processes.