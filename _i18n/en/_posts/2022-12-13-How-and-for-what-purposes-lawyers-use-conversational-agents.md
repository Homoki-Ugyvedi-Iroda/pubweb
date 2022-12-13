---
layout: post
title: Lawyers and their robotic assistants
date: 2022-12-13 11:30:00 +0100
author: dr. Homoki Péter
image: 'How and for What Purposes Lawyers Use Conversational_Agents.jpg'
tags:
  - chatbot
  - lawyers
  - AI4Lawyers
---

# How and for what purposes lawyers use conversational agents?

I've made a presentation at the [5th Webinar on the Use of Artificial Intelligence in the Justice Field: Chatbots and Tools Facilitating Access to Information](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/digitalisation-justice/conferences-and-events_en#webinarsontheuseofartificialintelligenceinthejusticefield) organised by the European Commission. The presentation itself is available [here](/assets/files/How and for What Purposes Lawyers Use Conversational Agents_5th.pdf), and please find below a transcript of it.
 
I'll be talking about lawyers using conversational agent like chatbots.

I intentionally want to avoid anthropomorphism, talking about the use of these tools as if they were humans, I'll explain why at the end.

I'm focusing on practical use by an average EU lawyer, so it's worth highlighting that most of the lawyers in the EU work in small practices, and ENGLISH is not their primary language.

Also, I'm trying to cover cases where there are specific advantages in using conversational agents. Not just any technical possibility to use NLP/AI-tools in general behind a chatbot interface.

For a wider coverage of NLP/AI use in lawyers work, please take a look at the guideline published by Council of Bars and Law Societies of Europe & European Lawyers Foundation.

## Why? ##

Currently, chatbots used by lawyers typically rely on two different techniques. They may rely simply on extracting keywords from the input (e.g. stemming words) and providing canned responses based on templates and key information extracted from the input. But recent techniques rely more on sophisticated natural language understanding (NLU) and natural language generation capabilities.

Let's talk about use cases first, in two groups. First about internal use of these tools.

Often, we hear that chatbots can be used nicely for document assembly purposes. That is to create documents based on some answers given during an interview. In this case, it is the chatbot that is asking the questions and interpreting the answers given. However, that is not practical for internal uses. For internal uses, it's still easier for the lawyer to use standard input methods, like typing into a field, clicking a button to choose an option etc. In general, chatbots do not yet have an advantage here.

But, there are some innovative solutions like a product called Spellbook relying on finetuning of the GPT-3 model of OpenAI. The way this works is called in GPT-3 as text completion and conditional generation: it can create some legal content in a given subject matter. Like you provide a headline of a contract section, and it gives you a suggestion for the whole section, similar to finding the most typical wording for a given headline from a clausebank (like Lawinsider). 

This product is based on finetuning GPT-3 on some 500 or more legal text samples provided.

And due to the underlying technique, this product will work much like a conversation with a chatbot.

But that will be available only for English, and even for now, it's just in a development phase, and no lawyers can use it for live purposes.

Another internal use of chatbots is that of a search interface. Just like in the previous use case, the important feature here is the NLU capability, not really the chatbot. 

If you are using Google Search, you have already been using an NLU model, that’s how Google is trying to understand your queries since 2020 (BERT).

So, when searching published law or legal cases or researching the content of a set of documents, lawyers already use such search techniques in their daily life. Whether the query is submitted through something that is called as a chatbot on the user interface, or called simply a search form, it does not make much difference. The search works in a way that you enter your query in your search form just as you would address a chatbot. And the search engine will try to make sense of your full sentence based on the same technique as a chatbot would do.

Let's turn to client-facing use cases of conversational agents.

The most practical use is related to ensuring online presence of a law firm. Similar to having a website with some information on it, you provide a conversational agent for potential customers. Users may ask this agent questions related to your office. Where the office is located, what fields of practice you do, what languages you work in, how can they reach out to the firm, and so on.

The advantage of having a chatbot solution here is called a multi-channel capability. You plan the range of possible conversations in the languages you want to support, and then you integrate your agent to the different channels you want. This way, you provide the same information not only on your website, but on different social media networks, messaging apps, virtual worlds, all at the same time.

A second practical use case is scheduling: users can make appointments by using an agent that is integrated with the diary of a lawyer, so potential clients can reserve a timeslot that suits them and record other pertinent information. However, considering the anonymous side of requests, be sure to avoid possible abuses, such as a client not showing up at the reserved time. You can avoid this by old techniques, such as by requesting e.g. a down payment for reserving a timeslot on an online website or messaging application.

The third practical use case is Q&A for users. You can publish frequentyl asked questions on your website and blogposts on a subject. But beyond a certain size, this is no longer practical. Many people will not bother to read 
the full list or search the right questions to ask. Chatbots can be useful in such cases: they can help link many different questions to correct answers, and not overwhelm the clients with too much information at the same time. The agent will hopefully find the appropriate answer and the law firm can thus hide all the unnecessary complexity.

The next use case is automating a client intake. In high volume cases, this can both speed up the process and make client service cheaper. By using the chatbot, you can collect all the information in advance that is generally necessary in these typical cases. However, this information is already subject to professional secrecy, so it is a huge risk to record such information at a third party service provider, unless you know exactly what you are doing.

Similar to a client intake, chatbots can also be used to carry out basic interviews with clients for assemblying the right documents for them at the start. The same risks apply to this use as well for the client intake.

## But how? ##
Having discussed the why, now, how should lawyers approach implementing chatbots?

Depending on the time and money, and the expected functionality, there are different approaches.

Honestly, it is not very probable that small law firms are willing to do the implementation completely on their own.

So, the most probable option is that lawyers will have to find some local IT integrators or marketing experts who already have some expertise in this field.

Lawyers should first look for specialists in their own jurisdiction, or at least, among those having an experience with chatbot uses in that particular language the law firm is using.

It is very important to call such partner's attention to the DEONTOLOGY RISKS that lawyers face and which i will detail on the next slide. and it is the lawyers who will have to interpret these local rules to their IT partners.

Even when contracting a local partner, these partners will probably rely on some existing chatbot platforms discussed next, but at least they will do all the different integrations needed for the law firm.

The second choice is using an existing chatbot platform. this is a service provided by a third party for many users with similar goals, with some tools to customize the solutions. 

Based on the intended audience of the platform, we can differentiate between USER FRIENDLY platforms, that are intended to be used and integrated by the end users themselves, and between platforms focusing on developers.

Of course, the latter solutions are more powerful in terms of capabilities and flexibility, but the extra investment needed in time and effort is rarely worth it for small law firms.

In either case, the most important question is what languages that solution supports for conversations. Do not expect good results if you try to rely on some machine translation for the conversations.

Just as an example, I'll show you what this language support means for a smaller language like that of Hungary.

There are no user-friendly platforms with lawyer specific scenarios and easy-to-use integrations. but one can already find two generic, popular chatbot platforms where the Hungarian language is supported. Of course, these come with no lawyer specific content here, so typical scenarios will have to be made by hand, thus raising the costs of the implementation.

For developer-level, flexible platforms, support for the Hungarian language is already a reality, although this requirement limits the number of possible choices.

Last, theoretically it's also possible that a chatbot use will not rely on a platform operated by a third party, but on something running in an environment entirely controlled by the lawyer. This minimises the chance of unauthorised access by third parties. 

Or one could try very innovative solutions that are not available on a given chatbot platform, making it necessary for the lawyer to have its own configuration using a language model that was finetuned specifically for the given task or that can be integrated with products that is otherwise not possible on existing platforms. 

But I see very slim chance lawyers wanting to do that.

## Barriers and risk ##
For lawyers, the biggest barrier to using a chatbot is that usually law firms of this size do not have many calls to handle. Without such number of calls, chatbots will never actually save money for the law firm.

At best, the agents may just improve the accessibility of the law firm, strengthen its brand value, or perhaps give some coolness factor to the law firm. But no monetary savings at all. To the contrary, sacrifices will have to be made.

Another barrier is that the online presence of most lawyers is very weak, and without such online presence, it does not make much sense to start using chatbots either.

The next barrier is the integration costs. Even if there are really easy-to-use chatbot platforms, the lawyer will have to integrate that chatbot at least with their website, or with their favourite messaging services,social media networks, such as Facebook, Viber, Telegram etc. And it's no surprise that there are no ready-made solutions that can easily integrate with all the possible channels a lawyer might want to use.

I've already talked about the serious language barrier in relation to the use cases and in terms of the availability of products or models supporting specific languages, so I now turn to the risks of using conversational agents.

As for the possible risks, there are two major ones:

The smaller problem is that lawyers will most probably have to rely on a chatbot platform as said before, meaning that they will be bound to a vendor as long as they want to use the same solution. This comes with all the risks of using an online platform in general, from possible disputes to data retention and access, to unilateral changes in pricing. Considering that most use cases are not critical as seen above,  and that the vendor should not store any information on customers in the long run, this vendor lock-in problem should not particularly be a strong problem here.

The bigger risk is caused by the deontology rules that the lawyers have to comply with. Operating a law firm is one of the most heavily regulated business, taking also into account the average size of these firms and the costs of compliance.

As we have seen, lawyers usually have to rely on third parties to operate the chatbot. However, any personal data or other information submitted by a client to a chatbot, will have to be handled as an information subject to professional secrecy obligations and also as personal data of the user. most of the popular chatbot platforms are using in some way or other infrastructure across the Atlantic, meaning a data transfer outside the EEA will hapen.

Also, in many situations, prior to giving any advice, no matter how automated the answer is, lawyers may be expected to identify their customers (to avoid money laundering or conflicts of interest etc.)

Still, the most important reason why I do not suggest chatbots to provide any information that could be interpreted as legal advice, is the following.

Misidentifying an intent of a user, as well as providing inappropriate advice is still quite frequent for conversational agents of all kinds, regardless of the techniques used, the models and trainings.

This can be very dangerous for lawyers. Such replies can be seen as bad advice that the lawyer made or allowed to be given on their behalf, or making promises that later the lawyer will have to break. 

In any way, these will inevitable lead to complaints and will be very difficult to handle professionally in case of a dispute.

I'm sure you have heard about ChatGPT, because now everyone is talking about that. Of course, that's not yet a commercial product, but you could already achieve similar results with the commercial use of the GPT-3 model. Let's take a short look at why using such models can be dangerous for lawyers, and why lawyers should only use chatbot solutions that they can keep under their strict control.

## An example of the risks ##

ChatGPT is really an excellent conversational agent, barely discernible from the conversational capabilities of a human speaker. It is finetuned in a way that tries to avoid giving legal or medical advice.
see the upper left corner as the standard response to such requests. it is an example of self-restraint, achieved by finetuning the model to do this.

But currently, it's also very easy to trick it into giving an answer regardless of such intended limitations. Look below how fundamentally bad its legal advice is, at least for the legal question. It's no surprise: it's not trained on any family law issues, let alone Bulgarian law. The problem is that the answer is still full of confidence, and there is no way for the user to see this lack of training and knowledge.

And there is always a similar chance that clients phrase their questions in strange ways, or with abusive intent just like I did. 

No lawyer would like to have such a talkative chatbot on their website, giving answers under the name or brand of the particular law firm.

And that's also why we have to avoid referring to the use of such tools as "robot lawyers" or use similar human-centric wording for journalistic reasons. Unfortunately, our human brain is  wired in a way that we really want to find a human friend or enemy behind every running software. These largest of models have a very accurate map of how humans interact with each other in many fields, and can therefore predict very well what answers should be given from a statistical point of view, while not having any capability of knowledge at all from a human point of view. 

These predictions are done at a level that can clearly fool any non-expert human. Therefore, only the experts working in the field of justice can explain to the other humans why these tools should never be mistaken for a human advice, and that they cannot serve as a substitute for an advice. 

No matter how expensive an advice from a real expert might become.

But everyone can be a bit sceptic. Once similar advice is generally accepted in other fields of expertise (e.g. automated medication recommendation), it will become increasingly difficult for us to convince people outside the field of law not to use such free-to-access, although factually very inaccurate legal recommendations.