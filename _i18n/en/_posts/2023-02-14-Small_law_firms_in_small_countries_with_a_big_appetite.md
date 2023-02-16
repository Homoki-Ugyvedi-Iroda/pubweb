---
layout: post
title: Small law firms in small countries with a big appetite - how AI and platform might change small firms?
date: 2023-02-14 12:00:00 +0200
author: dr. Homoki Péter
image: "apples_into_a_machine.jpg"
tags:
  - NLP tools
  - platform
  - intermediaries
  - AI4Lawyers
  - artificial intelligence
  - lawyers
---

# Presentation at Pázmány Péter Catholic University, Faculty of Law and Political Sciences (Law and Language Research Group)

(Transcript of a short presentation, see the PDF of the presentation with tables and pictures [here](/assets/files/230214_PPKE_small_firms.pdf)
Today, I would like to give you a presentation on how artificial intelligence and platform power (algorithmic-based control in the society) may change the future of lawyers.

Many of the issues discussed today are based on the deliverales of a project called AI4Lawyers [^1], in which I've participated between 2020 and 2022, and which was done by the Council of Bars and Law Societies of Europe and the European Lawyers Foundation, and funded by European Union as well.

Why do I focus on small law firms? Because as you can see in the statistical data, in continental Europe at least, the dominant form of providing legal services is by way of small law firms. Small firms are usually defined as those with less than 50 employees, but in our case, we have used a stricter definition, the definition of entities  with less then 10 employees.

It's not surprising that when you classify by size the number of firms of all the firms providing a service in a sector, the overwhelming majority of such firms will be small firms (98% in the EU). However, in terms of legal services, this dominance remain true even when taking into account such economic indicators as the total number of employees working in the given class of entities, or even the share of turnover of such small firms compared to the total revenue of all the entities. Except in special cases, like that of the United Kingdom, more characteristically, the country of England and Wales, where even though 86% of all law firms (legal service providers) are small firms, they take up only a mere 15% of the total income of the sector, or less than 13% of the total employees of the sector. In the UK, this market works structurally differently from that of the EU, while the US is somewhere between the UK and the EU.

In practice, what does it entail that law firms are typically small? First of all, they have a flat organisational structure, a maximum of two or three levels of hierarchy (that of partners and other fee earners, that of administrative staff). With such a simplified structure comes simple workflows, with very little details and a minimum need for documentation if any of such processes. Such entities have minimum working capital, and law firms in almost all jurisdictions are barred from access to external financing (no external investors, while of course, debt financing is possible but very rare). At this size category, they have no professional management, the partners have to deal with such matters themselves, even if they are the only fee earners.

The selling point of a law firm is the experience, skills and social connections of partners, but while developing many of these skills is a mandatory deontological rule in many countries, they also take up valuable time and eat at the tight profitability of the firm. The main resource that is sold at such firms is the available time of the fee earners, even if these hours are well leveraged by way of using junior fee earners, trainees, paralegals and assistants. Even if many clients prefer a fixed price or value based approach to the output of the legal work, it does not change the fact that the bottleneck and the most important resource is that of the fee earners, highly skilled invididuals with a finite amount of available hours.

Perhaps the lack of IT spending and long term development goals is also a consequence of such an inherent focus on profitability.

Even if the individual knowledge of each lawyer is a specific, one of a kind resource, the market of legal services is a very competitive one. While based on trust and tradition, clients may insist on specific lawyers or law firms, small law firms often claim to be able to replace each other based on flexibility, adaption and learning, depending on possible revenues.

We will see that the challenges faced by law firms are very similar to what other small firms face that also rely on legacy businesses and that do not tend to spend a lot of resources on the development of its processes and its infrastructure.

Even if they are very similar to other small businesses, there are clearly also challenges that are specific to law firms. The legal services market is a very fragmented market, at least from the viewpoint of the European Union.  It is fragmented across the languages used in the given territory, but also based on jurisdiction (e.g. Germany and Austria have the same official languages, but they legal systems are very dissimilar). The English language is not a primary work language for most of the law firms in the EU. While NLP and AI tools have to rely on economies of scale and expect such economies of scale from a commercial point view, law firms are not able to provide such uniformity, not only because the law itself is different from country to country (despite the efforts of harmonisation since 1950), because their rules of operations are very different across local jurisdictions and deontology rules.

While there are certain solutions to alleviate these problems regarding the language, such as cross-language transfer learning tools (transfering machine knowledge or annotated corpora from a resource-rich language to a resource-poor target language), there is hardly any such possibility for cross-jurisdictional issues.

Let's take a look at an example of what it means not using the English language for certain AI purposes. WuDao, a Chinese large language model currently leading the leaderboard of the number of parameter size, was trained on 1.2 TB of Chinese and the same amount of English text. Or GPT-3 was trained on 570 GB of filtered text, 90% of which was English. Just for comparison, the largest corpus of the Hungarian language as of this date is 7.5 GB, and the Hungarian Wikipedia takes up about 1 GB compared to the 20 GBs of English.

But this should not be understood that legal specific applications should rely mostly on large language models as we currently know it (e.g. on GPT-3). Having models and carrying out trainings for legal specific applications are not just simply about finetuning some "foundational model". First, there would probably not be enough legal specific data (legal texts) to train these large models solely on legal documents, but more it would also not make any commercial sense (e.g. one run of GPT-3 training costs around 5 million €). Large language models, like autoregressive transformers should not be seen by lawyers as a generic AI that will always be the starting point for solving a legal specific task. Legal AI/NLP applications have to be designed from the ground up with the specific tasks in mind to be solved efficiently. Whereas in certain tasks, it could make sense to finetune a specific popular language model (e.g. BERT for a language understanding problem or for a specific branch of law in a given jurisdiction), in other uses, even the concept of finetuning a language models could mean vastly different processes that are hardly comparable (e.g. in GPT-3 "finetuning").

Furthermore, the main strength of language models trained on a sufficiently large dataset is that they also inadvertently capture such hidden layers of meaning that we sometimes call as "common sense", there is no such agreed cross-jurisdictional common sense in law. Clearly, there are important similarities in the legal concepts of jurisdictions that base some parts of their legal system on the hisorical reception of Roman law. Also, it does not take one to be a professor of comparative law to see the stronger similarities in the civil law of, say Hungary and Croatia, compared to that of Hungary and Finland. However, the probability of such serendipitous discoveries that result in practical advantages seems quite low.

Let's take a look at these legal applications of AI and NLP that are relevant for law firms. In the AI Index 2022 Annual Report by Stanford University[^2], we can see that for this sector, the major areas in focus for AI applications is natural language processing (NLP, including understanding and generation) and robotic process automation.

We can already see that some law firms use document generation tools, and AI-powered legal research is very much commonplace (if for nothing else, then because the dominant search engines rely on such technologies since years by now), and also, document analysis in areas such as due diligence is also pretty advanced in terms of functionalities and choice. However, the major advantage for small law firms using such tools is not the huge output that can be generated by NLP, the number of documents such systems can spew out in a short time, but the quality of services such systems can afford to their users. With such tools, small law firms are able to compete with larger law firms, and can provide services cheaper, but at a comparable quality. Document automation is advantageous for small law firms not because they can generate such documents faster - due to the time needed for authoring and updating the templates, that may not be the case, using such tools may indeed take more time than to change a template whenever there is a need for that. But use of such tools can ensure consistencies in the services provided by small law firms that can differentiate them from other small law firms who rely only on ad hoc methods, non documented processes. So for small firms, legal automation is not necessarily about the speed of delivery (while that is also true e.g. in research tasks), but about the assurance of quality.

That's also where small law firms have a particular disadvantage due to their simple processes. As long as the workflows and the operation of small law firms may not rely on data already recorded in a digital system, it makes it impossible to automate certain important workflows, thus making tools such as robotic process automation useless for this segment. We have seen that in the EU, there are considerable differences between national markets as to how widespread the use of practice or case management software is, which should usually serve as the major point of interface between the lawyers and the IT systems they are using. [^3]. Without small law firms using similar workflows and software in a country, it is increasingly difficult to integrate such law firms into the nervous system of a digital society.

This is where the possible future for the transformation of law firms becomes important. Being mostly small firms themselves, law firms have to adapt the way they work to integrate with their clients, whether they are consumers in a residential market, small business or large enterprises. All categories of clients will have their own specific needs and lawyers will all have to adapt to their requirements. Lacking IT skills, law firms will have to do this by way of different intermediaries.

As of now, there is no way to tell who these intermediaries will be, and probably there will be different intermediaries from country to country. They may be independent platform providers specific to a certain category of law firms (providing referral systems, legal databases or practice management software), they may be state owned enterprises implementing government policies, they may be arms of the the largest "super" platforms that have a practical monopoly of access to clients, or they may even be proactive bar associations investing huge amounts of money in risky IT projects to ensure the future independence of their members.

With regard to these possible intermediares, the most important question for lawyers are the following:

a) How effficient will these intermediaries be, and how much will they cost for the law firms?

b) How will they activities affect the independence of small law firms? Will these intermediaries be interested in keeping lawyers in the "sales loop" for the long term and to keep them in a strong position?

c) How independent these intermediaries themselves will be from larger platform providers?

As of now, it is not yet possible to answer these points of uncertainties, especially not for such a diverse economy as that of the EU.

[^1]: See [https://www.ai4lawyers.eu](https://www.ai4lawyers.eu)

[^2]: [https://aiindex.stanford.edu/wp-content/uploads/2022/03/2022-AI-Index-Report_Master.pdf](https://aiindex.stanford.edu/wp-content/uploads/2022/03/2022-AI-Index-Report_Master.pdf)

[^3]: See the first deliverable of the AI4Lawyers project: Overview on the "average state of the art" IT capabilities of law firms in the European Union and gap analysis compared to US/UK/Canada best practices, at [https://aiindex.stanford.edu/wp-content/uploads/2022/03/2022-AI-Index-Report_Master.pdf](https://aiindex.stanford.edu/wp-content/uploads/2022/03/2022-AI-Index-Report_Master.pdf)
