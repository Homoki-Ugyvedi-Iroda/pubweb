---
layout: post
title: An actual transcript of the presentation on Guide on the use of AI-tools by lawyers and law firms in the EU
date: 2023-04-28 0:00:00 +0200
author: dr. Homoki Péter
image: "230528_jud_training_logo.jpg"
tags:
- large language models
- AI4Lawyers
- artificial intelligence
- transcription
- redaction
---

## Introduction

You can watch the original video [here](https://www.youtube.com/watch?v=JvFb-OO7dEc&t=1010s). This transcript is the *almost* raw output of the  OpenAI models (Whisper for transcription, plus GPT-4 for redaction as used in this [Python app](https://github.com/Homoki-Ugyvedi-Iroda/transcribe_redact_TUI). The presentation is available [here](https://homoki.net/assets/files/Digitalisation of Justice_Guide_on_the_use_of_AI_for_lawyers.pdf)

The only changes I've made in the text were 

a) editing so the transcription starts from the relevant part only,

b) I've corrected the proper name of CCBE's secretary general.

The "initial prompt" for the transcription module only included the words "Peter, AI, lawyer, artificial intelligence", so there was not much of a help here.

I'm sure there are a number of remaining errors, but it's a good example how useful these tools already are, at least in English.

## Transcription

This guide is work of many years and it has been published last year, last April by the Council of Bars and Law Societies of Europe and the European Lawyers Foundation. We started the work in 2020 because it was co-funded by the EU and after the, well in April 2020, so it was not really a very good moment for meetings, in-person meetings, so we saved a lot of money on that, but actually against all these odds we had to do lots of research and work on this subject.

So you can find the results of the project, the AI for Lawyers project on this website address that is on the screen and we had three deliverables under this project. One was about the actual IT capabilities of lawyers in the EU and how we compare that with the US, Canada and the UK, so we just wanted to get a picture of where we are in terms of capabilities and second was about the specific barriers in terms of the small languages that we use in Europe compared to the largest languages like English and the third one was this guide.

It was originally drafted in English but now there is already a Hungarian version available and I would very much recommend everyone to read it and of course if possible to translate it to their national languages because that will probably make it easier for the lawyers to use this. I will get into the details of why this guide is important but first I think it's better just to give you a small overview of why we wanted to focus on small firms and languages.

As you can see, it is in terms of the number of employees in the legal service providers. The EU is very much dominated by small firms so like 71% of all the employees in this legal service provider sector is by those who have less than nine, less than ten employees and you can see that this kind of structure, like it was I think Simone Cuomo yesterday mentioned in his presentation that it's like 97% of all the law firms that have this kind of zero to nine employees but actually it's not just the sheer number of law firms with this size but it's also the economic weight and the turnover would give similar results and we can also see that if we compare this to the United Kingdom then the situation is very different there.

So in the United Kingdom the largest firms, those with more than 250 employees, they have much more weight compared to the small firms and if you take a look at the US that's somewhere between the two, so between the UK and the EU. That's important and we also have another problem of size because large language models are really about the size of training data, the size of languages, so the size of corpus in a certain language and you can see here that the EU has lots of languages and many of the languages are so-called law resource languages so they do not really have much data on the internet, like for example my native language Hungarian is not considered to be a law resource language because if you take a look at the multi-linguistic language models that what kind of languages they were trained on, like this language has a lot more weight compared to the number of people and even if you see the worldwide number, the population and the people speaking certain languages, it's really a minuscule number but in terms of the language models it has more weight and that's a problem in the EU that we still have to face, even with Hungarian one you cannot really have the same capabilities with the large language models that we are nowadays using because they are not trained on 90% at least even if the multilingual language models are trained on English and that also means that the capability of the language model in a different language is much more limited.

The second problem in this area is the fragmented market, the jurisdictions, so from the legal tech providers point of view, how could we ensure that lawyers have access to proper tools? It's very important whether the lawyers have sufficient buying power but if you have different jurisdictions then you cannot really use the same tool because there are huge differences from a point of view of lawyer between the countries and this is actually a very important reason why we thought it's important to have this guide to narrow down the barriers to the wider use of AI tools. So even in those kind of countries, there are countries speaking the same language but being in different jurisdictions like German is spoken both in Germany and Austria but their legal systems are very different and you cannot just use the same language model as a lawyer because in some ways at least the AI tools should be aware of these differences that Austrian meaning of the same term in German could be very different from the German meaning in Germany and so these things make the work at the EU level for these AI tools a bit more difficult for us and we have to focus on these differences and that's why it's important these fragmented markets make it important for us to be aware of these constraints and that's why we believe that this kind of a guide could standardize the demand of lawyers in a certain way because then we explain terms according to the same structure to the lawyers, we explain what kind of tools there could be according to the same structure and this problem is that there are small firms and there are these fragmented markets together that generally make it a difficult situation because being small firms they really don't like to spend more money on IT than it's absolutely necessary. They rather take that kind of income they receive. You know for their own purposes and not to spend it on IT unless it's absolutely necessary unless we can convince people to spend on IT and yes of course I can understand that also as a lawyer that you don't want to spend just money to try it out when it's about your income and it also means even if there is a competition a very strong competition between lawyers because the legal services market is a very competitive one there are lots of providers legal service providers law firms and even this way it's not something that the market itself will solve so that's why it's important to try a different approach as well and we could see that the governments and other players external players do not really want to force just lawyers to use certain technique to use certain IT tools and unless they are really necessary to do so like during the pandemic when we had you know big change in terms of previous opportunities which were you know nobody really focused on video conferencing and these kind of things which suddenly became very important to solve and to use the digitalization of justice received a big push in this term so it's much better for the lawyers for themselves to try out the tools and to acquaint themselves with these tools and then generate some kind of demand for this and that's why I believe this guide was useful. Turning back to the guide itself, one of the major things, major chapter in this guide was about providing some kind of conceptual foundations that lawyers could understand in a way which is not really technical for them but still in a way that's useful for later explanation. What's the difference between AI, machine learning, what's the training, what's the model and benchmarks, data sets, how they come together so that they could get a conceptual grounding and to be able to discuss the AI tools in the future. That's why we were discussing natural language processing tools which are called NLP tools in short.

The other major part of the guide was about explaining these areas, these NLP tools, especially there were three major branches. One was about natural language generation tools like document assembly tools and other kind of tools with many examples there. The other part was about explaining the classification and language extraction, feature extraction type of tools which could be generally referred to as the language understanding tools. There were also other tools like text retrieval of course that's something that lawyers have been using for a long time, you know how to search for the text but there are also big changes in this area thanks to the advancement in AI and natural language processing.

So this explanation part is one of the longer and more interesting part of the guide and I think my favorite part, my favorite chapter in the guide is about future scenarios, six future scenarios as a kind of illustrations how small law firm in 10 years time would be able to use these tools that we have mentioned in the previous chapter. We wanted to not to go into the fantasy model and just using, referring to tools that were already available before 2022 as at least in research papers. Of course we made an assumption that these tools could become mainstream and they could be used by lawyers actually in 2030 or 32 but that's just the only assumption so we tried not to go too far and discuss things that are very different from the present.

The six scenarios include a lawyer in a small law firm using these tools in contract negotiation process where the client is asking a small firm to help them in negotiating a contract with a large enterprise like a bank. Another scenario is about streamlining the client intake process, when the client approaches the lawyer, the lawyer has to do the know your customer processes like how do we gather the information, how do we identify the client in a way which the client wants so using the communication channel that the client is using, some obscure messaging channel perhaps. There were also parts about document generation and another about court preparation which is maybe the most advanced and the area where the most thing to do is still to remain for us, which is the most complex to approach.

We just gave these illustrations in the guide so as to make it more approachable to lawyers because of course lawyers are not technical in the same way as technical people who are doing the same tools, who are trying to market the same tools. That's why it was an important problem but another important chapter is about the deontology problems. Deontology problems are about what kind of risk lawyers face when they are using these tools and when they are working with courts, with other lawyers, with other legal professionals, how could things go wrong, what could make the clients angry or the judges angry.

One of the areas is related to the outsourcing of IT, so it's not really an AI tool specific problem but this problem is made more difficult with the coming of AI and the use of the AI tools which is quite similar to cloud computing. How could I as a lawyer, if I'm using these cloud computing based AI tools or AI models that are not sitting on my computer, still retain my independence because that's very important for lawyers to remain independent. On the other hand, these cloud tools are very convenient for lawyers. We don't have to invest a lot of time into using these tools, we don't have to invest efforts into customization of the tools to our own working, we don't have to bother with hardware and other IT problems that lawyers are not really interested in solving actually. So it's a very good thing to have these possibilities to outsource certain services but on the other hand it comes with this risk we will be logged in to the vendor probably so there will not be vendors with the same kind of offerings which will make it much more difficult for lawyers to switch the vendor once they have some concerns with how they work with their data or once the vendor raises the price of the services.

We also try to give some suggestions in this regard. There are already work undergoing in the European Union as well in the cloud computing terms, how could you ensure exporting the documents from your services cloud service that you are using and import it to another which could really alleviate many of these vendor locking problems. But we also had to call attention to the lawyers that if they want to retain access to their data they have to keep in mind that these kind of services will not necessarily be easy to use or they have to take that into consideration when signing up for these services because the first and most important part from a lawyer's job is to protect the data of the client and not to lose the data.

It's also important to highlight that many of these tools are used in service providers that are outside the EU or at least outside the jurisdiction of the lawyer and there we don't really have control over the data. How could we ensure that a foreign government is not accessing our data? Of course it's not necessarily a problem for all the lawyers but there are definitely lawyers for whom it is a big problem because what they do could be very interesting for other governments and that's a risk that lawyers have to take into account. Now, the second area of the deontology problems is about the reliability of these large language models. This is now the number one problem for the technical providers of the large language models. How could they make their AI tools more reliable? It's also important for the lawyers to learn about this because you can take a look at how these tools work, like ChatGPT, in a way that this is a servant which is prone to lying, very prone to not saying the truth because they don't have the data and don't want to anthropomorphize this, but that's some kind of approach to say that they hallucinate.

The problem with this one is that you could use, as a lawyer, these tools because they could be very useful, but you have to be aware of the risks of these hallucinations. You know, you have to have some kind of working internal model as a lawyer. So if you are using this for research, you have to have a method of verifying the results, and you have to take the time to verify the results from other sources. That's why it's important that lawyers should always remain in the loop when they provide services based on these large language models. So they should be, this is called human in the loop, and they should be verifying the output of the model.

They should not be using these tools for these purposes unless they have a working method for this verification, which is not necessarily easy to do. That also means that lawyers will not be able to use these AI tools in the same way as legal tech providers can use because, in many cases, legal tech providers want to provide access to these tools in bulk, you know, as a kind of commodity, to make it accessible directly for consumers so that consumers can themselves use it. But that's not something that we would ever suggest to lawyers to use it in the same way. They always have to be in the loop; they always have to sit there between, which will affect the amount of output that you can use the tool for.

Because with a human in the loop, you cannot really multiply the amount of text generated because you have to review it. And that's not necessarily a problem for lawyers because it's most likely these tools should be used for improving the quality and decreasing the administrative burdens for the lawyers, but not necessarily increasing the amount of output for the lawyers. So, for law firms, it's still about trying to sell the capabilities of a highly skilled individual and not trying to sell a tool to the public. Another area of the ontology is privacy and client confidentiality. How can we ensure client confidentiality in this area? We have to be aware that some of the providers are reusing the data that lawyers are providing, entering into their models, and we have to be aware whether the provider of the tool is doing such things. Even if they say that they will anonymize the data, that will not necessarily save the lawyer from a breach of the confidentiality obligation. Because many of these data, there have been many papers showing that they could reverse engineer the models and find out very important information about the origin of the data based on which the models were trained. So, lawyers have to be aware of this risk as well, that anonymization is never final, and with a given amount of data, there could be a risk of de-anonymization and re-personalizing the data that the language model provider was using for training based on the lawyer that the lawyer put into their service.

So that's important to see, and as I've mentioned, it's more important for lawyers to retain the confidentiality of client data than to save costs. So this can never be an exercise in itself just to save costs. The last problem is about competence. We can breach our ethical obligations in both ways: using these tools too early on or too late. Of course, we're using it too late; it's very easy to do because we are not using something that the client would expect us to do already, and which is saving money for the client. And of course, it's a good approach from a lawyer who is paid perhaps based on the hours worked that I will not use the tools because then I don't want to lose the amount of hours I'm working. But the other is also an important risk that I use a tool very early on, and I'm not sure of how this works. I'm overconfident in using the model that I don't really know the risks, and therefore my act is posing a risk for the clients and the confidentiality obligation of the lawyer, which is very important.

So I have to say that since this guide was published in 2022 April, it's an understatement that lots of things have happened. So you can see that there were so many changes in this area, for which we were quite happy because the availability of ChatGPT and the success of ChatGPT made it unnecessary for us to explain why AI tools for lawyers is an important subject. It was very different last April, you know, that nobody really believed why would this be really important. Now it's evident, it's self-evident that this is important, and many lawyers became exposed thanks to the generic success of ChatGPT. And even if these kinds of tools were there before November last November, before ChatGPT became a huge success, and most people were never really sure of, they did not use GPT-3 even if some of the capabilities were not really different or which are important for lawyers' use compared to ChatGPT's models that they were using.

And we also have seen a number of new models which have shown the promise of these tools, which made many of the scenarios in our future scenarios chapter become a lot closer to reality, even just one year. So it's not like a 10-year time for some of these solutions; it became a lot easier for document generation problems, became much easier and accessible for lawyers, cheaper for them to access. So well, it's really an interesting thing how this suddenly changed in terms of importance, and what we are trying to do in this area is try to use the current momentum of AI tools that we have, let everybody speak about AI tools, and use it to the benefit of lawyers and firms.

I would like to also ask every trainer out there just to try to use this momentum in terms of convincing people to use more tools and to participate in research in relation to these tools. You know, how reliable are they for legal use? Maybe just do a kind of test of these tools, asking them a specific question under a specific jurisdiction, and see how many questions can it get wrong, and then try to find out, you know, what was the reason for that? Because it's not necessarily like if it was not trained on a specific language, it can give you a bad answer. So we have to be aware of how this works in practice, and that's also to see what's the difference between the usability of these tools in certain languages, in certain areas. Like there is a strong difference between asking about data protection issues, which are harmonized in many ways in the EU, and compared to like family law or succession inheritance law, which are not as much harmonized. And it's also important to see as professionals how these large language models could work in practice.

So I really strongly ask anybody out there to try to at least read this guide, try to draft a guide which is more specific to your own jurisdiction, and experiment with these tools. Thank you very much, Peter. Thank you. I think your appeal has been heard, and I'm pretty sure you will be getting quite a few reactions from our audience, if not now, definitely in the future. I mean, people will know where to find you.

I have a question, actually. What was my first reaction, rather, would be we're nowhere near having lawyers replaced by ChatGPT, right? Yeah, it's not really, I think ChatGPT is a consumer product. You should see that as a consumer product; it's a fun product, it's very good to demonstrate the capabilities, but it's not really for professional use, and it's not replacing any professional use, of course. So it could seem to certain people that it could serve as a replacement, and sometimes, of course, you know, if you don't have access to a lawyer right now and you need an answer just right at the same moment without any further time to consult anyone professional, yeah, I'm sure that many people are using this. But you know, I also, if I would be in a similar situation that not having access to a doctor, it's possible I couldn't resist the urge and ask ChatGPT, but definitely GPT-4 model about some of the urgent problems because it's much better than having access to nothing. But for professional purposes, I think it's important to make a difference between using ChatGPT as a consumer and using large language models for professional uses because, in the long term, I think I'm pretty sure that it's much more interesting how we can use these large language models in our professional way, and it's not possible that everyone will have the same perfect model access and the perfect model access will answer all your legal questions, your medical questions, and everything in between. So I'm sure that we need to go in the direction of the professional use of large language models.

Yeah, there's still quite a bit of a risk going for the general approach. What were the first reactions from law firms to your guide? What kind of feedback did you get? Well, I think in the short run, it's more like people were happy to receive some kind of explanation, some kind of release. It's a more generic guidance, so it's not like an action book that you can act upon, but at least it was useful, especially for smaller lawyers just to get acquainted with this area and to be a bit more comfortable with these discussions. I think that was one of the main purposes, just to get lawyers be more comfortable because there's something written by a lawyer for lawyers, and it's not like they're having to read papers from arXiv or some other this kind of preprint servers which are written by computer scientists to very technical people for very technical discussion.

So, I believe its main job now is to discuss these things with people, to have a conceptual common framework to discuss AI tools and how we could use it, and to have this kind of confidence in doing this.