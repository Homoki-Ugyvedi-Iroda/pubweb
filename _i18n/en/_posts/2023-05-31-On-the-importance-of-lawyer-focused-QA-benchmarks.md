---
layout: post
title: On the importance of lawyer-focused QA benchmarks
date: 2023-05-29 15:00:00 +0200
author: dr. Homoki Péter
image: "parrots_QA.jpg"
tags:
- large language models
- AI4Lawyers
- artificial intelligence
- QA
---

# 1. Introduction

In this blogpost, I would like to highlight the importance of crowdsourcing some datasets by lawyers that are specific to jurisdictions and legal areas. I will also illustrate the difficulties with my own, tiny experiment in the field of legal question answering in Hungarian while using the large language models, both with and without the legal texts provided.

There are already powerful tools available, having the potential to change our work as lawyers. However, some important parts are still missing.

We should not forget that we are still in a *research phase*. No matter what a tool could be capable of, it’s foremost the lawyers who will be responsible to the clients for what a particular tool actually delivers in production use. The tools are fantastic, but lawyers, as usual, are reluctant to try it out themselves. Often, this is a wise decision, because we can see that 

a) many of these tools are currently free exactly for this reason, and 

b) even commercial solution providers offer tools that are far from being reliable in practice.

*Fortis fortuna adiuvat*, as the saying goes, but how could we capitalize on novelties while minimising the risks? Internal pilots and more human oversight can alleviate the risks, but that means each lawyer will have to spend this amount of extra energy, and again, the late adopters will have an advantage over first movers.

But there is a solution that could help small law firms and solo lawyers share the burden of prudently testing in production.

# 2. Datasets and benchmarks in NLP are not enough for lawyers' needs

The natural language processing (NLP) literature and the tools used for such NLP tasks have dozens of widely-used datasets and benchmarks. They serve as a very important foundation upon which researchers and solution providers rely on. Datasets provide the golden set of standards for certain tasks, and new NLP tools such as language models are measured against these benchmarks.

Even if unsupervised training made great leaps in the last few years, and even if datasets and benchmarks constantly change, the only way to measure the performance of the latest tool is to evaluate it against such datasets, and compare the results to other published results. (E.g. [SQuAD](https://rajpurkar.github.io/SQuAD-explorer/) or [NaturalQuestions](https://ai.google.com/research/NaturalQuestions/leaderboard).)

The only problem is that benchmarks for NLP tools are not relevant for lawyers’ tasks. There is no doubt that tools performing weakly on such NLP benchmarks will also perform weakly when lawyers will use them. But one can find important warnings in the NLP literature about the generalization of performance.

**Information retrieval** is a cornerstone of many tasks: this is the NLP technical term for searching and retrieving information from a large text base, but it is also the foundation for most question-answering tasks as well. A well-cited paper provided ample evidence that because one model performs well in a particular field and dataset (e.g. answering questions based on Wikipedia articles), it does not necessarily result in providing similar performance where the questions are of a different type (e.g. HotpotQA), or in biomedical information. [^1] Even today, with the advances of GPT-4 and all, it is a 30 year-old indexing method, BM25, that is still performing the best in many information retrieval use cases.

Another interesting paper[^2] was investigating the performance of language models that were **pre-trained on legal documents**, specifically LegalBERT (on U.S. cases[^3]) and AUEB-Eurolex. It's standard practice for pre-trained models to be fine-tuned for specific tasks (called downstream tasks), including legal tasks.  But these models were not fine-tuned, they were *pre-trained on legal documents in that language*, which is a very costly endeavour. The authors of this Song et al. paper concluded that for more complex, domain-specific (e.g. legal) tasks, these domain-specific pre-trained LLMs demonstrate only varying levels of benefits. This benefit is present only as long as the *language of the task* (in the sense of terminology) is *„extremely close” to the original dataset on which it was evaluated* (e.g. to the decisions of the Court of Justice of the EU). 

So even such costly advantages of pre-training may diminish when English language tasks are carried out in different areas of law because such areas of law use different terminology that was not covered by the pre-trained legal documents. For lawyers, this is probably less surprising, but it also shows why we should be cautious with generalising the performance of generic NLP tools not only in different languages, but also within the same language, but in different legal areas.[^4]

Both these points support the argument that if we want to be able to rely more on the performance of large language models in legal tasks, lawyers in each jurisdiction of the EU should develop their own benchmarks and datasets to measure the performance of the AI tools they would like to rely on.

# 3. Focusing on lawyers’ tasks for each jurisdiction and field of law

Lawyers have to rely on NLP tools to automate their own tasks, but they have to do it in a way that is a bit specific to lawyers’ own, characteristic use cases.

The everyday work of lawyers is made up of diverse tasks, it depends on their clients, their focus and their training, so it’s difficult to give a complete list of lawyer-specific tasks. While NLP tools and LLMs in specific, can help lawyers in a number of areas, there is one area that I would like to further highlight.

In NLP, this area is called „question-answering”, which is subject to intense research for decades.[^5]

Similar to the different question-answering benchmarks and research approaches, question-answering within the domain of law is not a single, unified field. There are many possible question-answering approaches -- even if we disregard differences in the sources for answers.

Questions asked by residential clients tend to be different from questions lawyers themselves ask when researching the law. But even lawyers ask different types of questions when they have to review a set of documents, such as a court case docket, a large contract or a set of documents subject to due diligence review.

A particular weakness in legal question-answering is that lawyers quite often do not agree even on very specific questions, and it is almost inconceivable that lawyers across borders would give the same answer to the same question (this is possible only in a limited scope, such as international law or the European Charter of Human Rights, EU acquis etc.)

Furthermore, it is very difficult in law to give a simple set of documents from which the answer can be retrieved. The expected knowledge to answer a seemingly simple question usually comes from very different sources. Questions made by lawyers to research law can rarely be answered from a single piece of text, such as from a definitional term -- such questions in NLP parlance are called multi-hop questions[^6].

Last, but not least, any dataset of legal questions and answers will probably have a short lifespan due to the frequent changes in law.

Simply out of curiosity and for illustration purposes, I have investigated how 10-11 specific (rather simple) questions under Hungarian law would be answered by the current LLMs using a currently popular question-answering method. 

These questions were expected to be answered from the given source document, not just simply asking GPT-3.5 and GPT-4 about the questions as a chatbot (like in  ChatGPT). When we are simply using the chatbot functionality, the answers come from the *pre-trained huge dataset* of the given GPT model, and if the GPT model does not know the answer, it will *hallucinate*, make up false answers. While the GPT models were seemingly pre-trained on some pieces of Hungarian legislation (e.g. the Hungarian Civil Code etc.), it is rather easy to find blind spots when we go into the details.

This "currently popular" question-answering method referred to is called retrieving answers based on „text embeddings”. In this question-answering method, an answer is provided based on the following steps:

a) First, we have to create text embeddings from the source text. Text embeddings are numerical (vector) representations of the original text in a way that helps retain both the semantic meaning and the context of the word and sentences used (these are called „dense embeddings”[^7]).

b) These text embeddings (separated into what are called chunks of texts) are stored in a database built for storing such vectors for later search and retrieval.

c) When a question is asked, the question is also converted into text embeddings.

d) The question, now in an embedding format (as a vector), is compared to the entries in the database, and with the help of these embeddings (that retain the context and semantics of the text), the most similar entry in the database will also contain the text that can provide the best context for the answer.

e) Finally, this context „chunk” just retrieved from the database is fed to the LLM (e.g. GPT-4), together with the original question in text form, and the LLM is prompted something like „`Question: [#1_Placeholder for the question in text form]. Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. Context: [#2_Placeholder for the context retrieved in text form]`”.

Thus, the LLM will try to answer the question based on the retrieved piece of text. Please note that the relevant piece of context for the answer was not retrieved by the LLM, but by a separate database (retrieval) function.

# 4. Lessons learned from the evaluation of  answers

The embeddings covered the Hungarian Civil Code and the Hungarian Code of Civil Procedures (e.g. 2 MB altogether), but they did not include commentaries, court decisions etc. Considering that the questions are all in Hungarian and relate to basic Hungarian law, there is not much point in translating these into English. The full technical details of the evaluation are available at [this](https://github.com/Homoki-Ugyvedi-Iroda/LawyerQAseed_experiment/tree/main) repository. We did not intend this evaluation to be a professional one, or even to be of good quality, but just as a simple demonstration of what kind of different categories of questions could there be in this field and which areas are more difficult to answer for these LLMs.

It turned out to be very difficult to provide good answers to legal questions based on these embeddings, that is, based on simply the wording of relevant statutes. 

E.g. the Hungarian Civil Code does not contain definitions for all important terms used, such as in the example of the definition of immovable property. (There is something that could be seen as a clear definition in the act on the registry of immovable properties, but that was not embedded, and this term is usually defined only in literature and law school textbooks, usually rather differently.)  Nevertheless, both GPT-3.5 and GPT-4 have tried to give a meaningful answer to this question as well.

Also, the question relating to how people who have lost their sight could make a will was a bit tricky, but GPT-4 (with embeddings) was able to find out the proper answer: in the Civil Code, there is a separate provision (but in the same text chunk) saying that people, in general, may make an oral testament, without having any specific provision in this regard to blind people. In the next section, there is also an express provision saying that *in writing*, such people can only make a will by way of a notary. Of course, there is no explicit provision saying that the ability of people without sight to make an oral testament is not affected by this provision on making a will in writing. GPT-3.5 could not make the correct inference from these two provisions, while GPT-4 could.

In another question, the ambiguity of *when* mislead both models to give the wrong answer. Just as in English, in Hungarian, *when* can also mean *in what cases*, but the LLMs understood the question ("incorrectly") as „after what point in time?” (Of course, we can also blame the question here.)

It's also worth mentioning that it is very difficult to evaluate the correctness of each answer, as long as we are not using QA benchmarks that rely on something like "choosing the one correct answer from five possible", but on natural questions.[^9] That means the answers, with very few exceptions, have to be evaluated by experts.

The results of the manual evaluation were the following -- considering the few questions and the low quality of the questions it is not of much importance:

|model type|results|
|--|--|  
|GPT-4 w/embedding|75%|
|GPT-4 w/o embedding (ChatGPT+)|33%|
|GPT-3.5 w/embedding, w/similarity search, OpenAI emb.|33%
|GPT-3.5 w/o embedding (ChatGPT+)|16%|
|GPT-3 (diff questions, diff corpus)|30%|

Anyway, there is no doubt that GPT-4 would never pass any Hungarian bar exam in these fields...[^8]

# 5. Conclusion and next steps

We can already find detailed research on such topics as legal question-answering.[^10] However, these works are mostly specific to a single language and are usable only in some of the jurisdictions of the United States of America. For benchmarks to be useful for lawyers in the EU, it would be beneficial to have several coordinated datasets made of questions and (correct) answers for different jurisdictions and languages, in different areas of law. Of course, the questions and answers will not be the same from country to country, but they should be harmonised, in terms of subject matter and question categories (such as the same ratio of questions that are easily answered from a single paragraph, multi-hop questions etc.)

Of course, besides question-answering, there are also other areas that will have to be investigated, such as the very diverse NLP tasks of „summarization”, which can also have very different meanings based on the tasks at hand, etc. For a full list, see CCBE and ELF's [Guide on the use of ArtificiaI Intelligence by lawyers and law firms](https://ai4lawyers.eu/wp-content/uploads/2022/03/CCBE-ELF-Guide-on-the-use-of-Artificial-Intelligence-by-Lawyers.pdf).


[^1]: Nandan Thakur and others, ‘BEIR: A Heterogenous Benchmark for Zero-Shot Evaluation of Information Retrieval Models’ (arXiv, 20 October 2021) p. 6. <http://arxiv.org/abs/2104.08663> accessed 28 May 2023.

[^2]: Dezhao Song and others, ‘On the Effectiveness of Pre-Trained Language Models for Legal Natural Language Processing: An Empirical Study’ (2022) 10 IEEE Access 1.

[^3]: Ilias Chalkidis and others, ‘LEGAL-BERT: The Muppets Straight out of Law School’ (2020) abs/2010.02559 CoRR <https://arxiv.org/abs/2010.02559>.

[^4]: As only siths deal in absolute, we have to mention that many NLP tools are very good at being used across languages, like embeddings, tokenizations, clusterings etc., but in downstream tasks we nevertheless have to be prudent.

[^5]: For those interested, I suggest the following papers that are of more interest to lawyers than others:

Jorge Martinez-Gil, ‘A Survey on Legal Question Answering Systems’ (2023) 48 Computer Science Review 100552.; Tom Kwiatkowski and others, ‘Natural Questions: A Benchmark for Question Answering Research’ (2019) 7 Transactions of the Association for Computational Linguistics 452.; in Hungarian: Attila Novák and Borbála Novák, ‘MILQA kérdés-válasz benchmark adatbázis’, _Magyar Számítógépes Nyelvészeti Konferencia_ (2023) <http://acta.bibl.u-szeged.hu/78414/> accessed 26 May 2023.

[^6]: Zhilin Yang and others, ‘HotpotQA: A Dataset for Diverse, Explainable Multi-Hop Question Answering’, _Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing_ (Association for Computational Linguistics 2018) <https://aclanthology.org/D18-1259> accessed 26 May 2023.

[^7]: For more explanation, I suggest reading Daniel Gillick, Alessandro Presta and Gaurav Singh Tomar, ‘End-to-End Retrieval in Continuous Space’ (arXiv, 19 November 2018) <http://arxiv.org/abs/1811.08008> accessed 31 May 2023.

[^8]: Daniel Martin Katz and others, ‘GPT-4 Passes the Bar Exam’ (15 March 2023) <https://papers.ssrn.com/abstract=4389233> accessed 26 March 2023. Of course, the Hungarian "bar exam" (jogi szakvizsga, unified exam for all legal professions) is very different from the Uniform Bar Examination.

[^9]: Such multiple-choice answers are usually not called question-answering systems, but text understanding systems, see e.g. Ilias Chalkidis and others, ‘LexGLUE: A Benchmark Dataset for Legal Language Understanding in English’, Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)_ (Association for Computational Linguistics 2022) <https://aclanthology.org/2022.acl-long.297> accessed 31 May 2023.

[^10]: Dan Hendrycks and others, ‘CUAD: An Expert-Annotated NLP Dataset for Legal Contract Review’ (arXiv, 8 November 2021) <http://arxiv.org/abs/2103.06268> accessed 31 May 2023.
Soha Khazaeli and others, ‘A Free Format Legal Question Answering System’, _Proceedings of the Natural Legal Language Processing Workshop 2021_ (Association for Computational Linguistics 2021) <https://aclanthology.org/2021.nllp-1.11> accessed 31 May 2023.
