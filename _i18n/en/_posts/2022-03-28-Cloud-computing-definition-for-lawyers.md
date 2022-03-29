---
layout: post
title:  Caveats of cloud computing definitions for lawyers
date:   2022-03-28 15:09:00 +0200
author: dr. Homoki Péter
image: "iStock-670229682_web.jpg"
tags:
  - cloud computing
  - lawyers
  - CCBE
---

# Any regulatory definition of cloud computing?


Being a lawyer means being obsessed with the right definition. It's no surprise that the term "cloud computing" begs for definition, because even a cursory practical acquaintance with the term shows that many people understand quite contradictory things under the same term.

It's also important to note for lawyers that the meaning of cloud computing has extensive and potentially costly consequences due to regulatory reasons. For example, for banks, there was a special regulatory regime introduced by the European Banking Authority [EBA-Rec 2017-03](https://www.eba.europa.eu/sites/default/documents/files/documents/10180/2170121/5fa5cdde-3219-4e95-946d-0c0d05494362/Final%20draft%20Recommendations%20on%20Cloud%20Outsourcing%20%28EBA-Rec-2017-03%29.pdf) if a bank decided to outsource a service to cloud service providers. Since 2019 [(EBA/GL/2019/2)](https://www.eba.europa.eu/sites/default/documents/files/documents/10180/2551996/38c80601-f5d7-4855-8ba3-702423665479/EBA%20revised%20Guidelines%20on%20outsourcing%20arrangements.pdf), there are no longer specific regulatory provisions on cloud services for banks at the EU level (other than recording this fact), the terminology remains in place at the EU level, and there are still a number of special national regulatory requirements in place that apply to cloud services only.

For defining cloud computing, the EBA used the definition of the standardisation body of the United States of America, NIST 800-145. This is the definition used by [Eurostat](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:Cloud_computing) as well.

The Communication from the Commission "Unleashing the Potential of Cloud Computing in Europe" (COM/2012/0529) also refers to this definition [preamble 5](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:52012DC0529)

There are no further definitions of cloud computing at the level of EU that I know of. What's more, even the definition used in Saudi Arabia by the Communications and Information Technology Commission (CITC) Cloud Computing Regulatory Framework [2-2-1](https://www.citc.gov.sa/en/RulesandSystems/RegulatoryDocuments/Documents/CCRF_En.pdf)

In summary, it's hard to find any detaile definition other than the NIST one. There are regulatory acts that, for their own purposes, clearly use a cloud computing term that is different from the NIST definition, but they never make any attempt at a definition, such as in the [Digital Single Market Copyright Directive](http://data.europa.eu/eli/dir/2019/790/oj) (see the definition of online content-sharing services).

# How is cloud computing defined by NIST?

At first glance, the [NIST definition in SP 800-145](https://csrc.nist.gov/publications/detail/sp/800-145/final) seems rather simple, but still confusing. It defines "cloud computing" as a "model" that enables access to computing resources in accordance with a list of specific characteristics. However, at the same time, it also defines cloud computing model as a composite of three further concepts: "five essential characteristics", "three service models" and "four deployment models".

This double definition is difficult to understand, but for us, the first definition seems to be more salient for the moment. This first definition is the same as the "five essential characteristics", and the five essential characteristics spell out a bit more detail about those specific characteristics referred to that make a model a cloud computing model.
The next most important question is: what does it mean that cloud computing is defined by being a model? How can we use the definition of cloud computing to decide regarding a computer service or solution whether it is cloud computing or not? The answer comes from the rest of the first definition: a "model for enabling ... access to computing resources". (Here resources mean applications, servers, storage, processor capacity etc.) That is, model has a very generic meaning, it means the standard of "cloud computing" itself: if we have to decide whether something is cloud computing or not, can this something be called as cloud computing? Is this a cloud computing service, is this a cloud computing strategy, can this solution be called a cloud computing solution, is this product really a cloud computing product? (Actually, later publications by the NIST replace this term model by the term service.)

Of the five essential characteristics, only one of these characteristics seems self-evident: we can only talk about cloud computing if the model relies on network access available from many places ("broad network access"). The other four characteristics are both difficult to understand in detail, and also confusing: we can see that many current usages of the term cloud computing do not contain any reference to these characteristics, and furthermore in many cases it is theoretically impossible for the users themselves to decide whether a given service complies with these characteristics.

E.g. "resource pooling" says that these computing resources in all cases have to be pooled "to serve multiple consumers using a multi-tenant model". But what about cloud computing uses that rely on the deployment model called a "private cloud"? The answer to this question lies in the definition of the "private cloud" deployment model, which is about a single legal entity (organisation) with multiple "internal consumers", such as different departments within the same entity are considered as different consumers of the service. This is clearly not in line with general expectations of an average lawyer of what "multi-tenant" or "multiple consumers" would mean.

There are similar twists present in other essential characteristics as well, so most of the questions necessary to answer whether a service is a cloud service or not is not something that the cloud user (consumer) can do without the help of the cloud provider.

(It is also worth noticing that besides the cloud computing definition based on these five essential characteristics, other definitions of the NIST in the same paper might also have regulatory importance, such as when a cloud service is private cloud, then certain regulatory regime does not apply.)
It is for this reason that NIST has also issued an explanatory publication as well, [NIST SP 500-322](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.500-322.pdf) about the evaluation of cloud computing services. This publication also acknowledges that in many cases, vendors label their offerings as cloud services even if they do not fulfill the five essential characteristics.
The publication gives both generic guidance above that of NIST 800-145 and useful examples to understand how each characteristics should be understood in practice.

# Three examples of misleading use of the term "cloud computing"
## 1. Cloud computing, because a software is available via the Internet (a.k.a.: not all web apps are cloud apps)
Software run on computers, whether these computers running the software intend to serve a single person working at her desk, or multiple other computers running all across the world connected to the Internet. Software may work in such a way that this software is serving other browser software or otherwise using the same protocol as a browser uses: this is what makes a "web application". So the purpose of a web app is usually to serve remote users connecting to this web app by way of their own browsers, from a remote location. The web app itself may be very similar in function to application installed on a local device (e.g. running natively on a mobile telephone or a desktop computer), meaning that a web app is not necessarily any different in use to a user, other than the user does not have to install it on a local device.

The user accessing the web application has not much control over the web app or the infrastructure hosting the web app. Also, if a user uploads a document to this web app, then the uploading user's effective control over that document will also definitely diminish. Often, web apps are created, because they are intended to serve multiple users at the same time and costs of maintenance and support are significantly decreased in this way. 

Against all the similarities, such a web app intended to be used by many users (resource pooling) does not necessarily mean a cloud app as well. A web app is only a cloud app if it also fulfills all the required characteristics of "cloud computing", including the following:

a) a consumer may use such a web app without specific human interaction (requiring the service; "on-demand self service");

b) the infrastructure running the web app is defined in a way that enables rapid scaling the resources used by the web app, without the consumer noticing a thing ("rapid elasticity"); and

c) use of this web app by consumers is measured by at least the number of simultaneous users (monitored, controlled, reported; "measured service").

From these conditions, for a web app to ensure "rapid elasticity", it has to be installed in an environment that is designed to ensure that capability. It is not enough that a single webserver is up and running and answers the requests from the remote users, thus making the web app available for their use. This requires that the web app is deployed on such a configuration of devices (including hardware and software: hypervisors, virtual machines, virtual data storage, and other computing resource abstractions) that makes this elasticity possible. This is called in yet another explanatory NIST publication [SP 500-292](https://bigdatawg.nist.gov/_uploadfiles/M0008_v1_7256814129.pdf) as a "resource abstraction and control layer" (sitting between the physical resources and the service layer defining the functions offered for the consumers of the cloud service). Without such a layer present, the web app will not be a cloud app as well.
## 2. This is my private cloud, because only I have access to this storage/server/software at site X, but I can access it from site Y or everywhere I have internet access!
This is a misunderstanding from multiple aspects:
a) a cloud computing service may be operated at the consumer's premises (onsite cloud computing) or outside of it (outsourced cloud computing, as clarified in SP 500-322;
b) location independence of a service is an important factor for the characteristics of "broad network access" and "resource pooling", but this is not sufficient in itself, and other essential characteristics have to be fulfilled as well, including "rapid elasticity";
c) a single device running a remotely accessible service will probably never meet the "rapid elasticity" and the measured service requirements;
d) similarly, the multi-tenant requirement arising from "resource pooling" is also highly unlikely to be complied if there are no multiple consumers, even internal users such as in-house departments (which is necessary for a private cloud as defined in NIST SP 800-145).

## 3. This is community cloud, because this service is provided to lawyers only!
Finally, a more confusing problem may be caused by the cloud service provider itself. Community cloud is defined by NIST as "The cloud infrastructure is provisioned for exclusive use by a specific community of [cloud consumers] from organizations that have shared concerns (e.g., mission, security requirements, policy, and compliance considerations)." If a cloud service provider has a service that can be understood as a cloud computing service (model), just defining a specific, cloud product for a specific group of professionals (such as lawyers), will not make it a community cloud. The cloud service will be a community cloud offering only if the cloud infrastructure used for that cloud computing service serves specifically just that group. So if a new cloud product targets a specific group of professionals, but at the same that "cloud product" is different only in terms of pricing, availability, applicable contractual provisions and e.g. support, but otherwise uses the same infrastructure as the the old cloud product, serving everyone outside the specific group of professionals the same way, then this will not be considered as a community cloud.

# Suggested approach

It is evident from the above that it is highly improbable for lawyers to find it out for themselves if a service provider's offering is indeed a cloud service or not. Often, the providers themselves will probably not know this themselves, and will probably use the term cloud computing based on commercial considerations.

Therefore, it might be advisable to consider whether the term "cloud computing" is the appropriate term based on which we would consider regulation for lawyers.

If we decide to use a different term, we have to agree on what this more expressive term should be, such as "lawyers using information society services", or "lawyers using outsourced computing services" or "lawyers using online platforms" etc. This depends on which risks we want to focus (see below).

If we go on with cloud computing, we have to make it crystal clear that we use the meaning of the term cloud computing that is different from that of NIST. 

So both approach in some way requires that we ourselves give a new meaning of "cloud computing". 

# Sources of risk arising from the decrease in control over IT resources

Regarding the risks lawyers face, all the new risks are related actually to the decreased control over the data and the IT tools. But using any kind of IT tool (or any complex technology) necessarily leads to some decrease in control, thanks to the methods of automation or the expertise needed to ensure appropriate use of a given technology, and a certain degree of training and competence will have to counterbalance this.

With cloud computing, the problem is that it is very difficult for lawyers to notice and understand the way his or her control is decreased. Cloud service providers may not be objectively transparent in this (sometimes due to lack of knowledge in the tools they themselves use and offer, sometimes due to lack of knowledge in what lawyers need to understand or what they would expect them to disclose before the lawyer has to choose a service). Sometimes lawyers have no choice in selecting the right cloud service, because a selection has already been made for them by their client, a counterparty, other regulatory choices or other dominant technological means. And sometimes the solution is just too complex for the lawyer to be able to make a free choice.

a) *Geographical distance to physical location of IT resources (tools, software)*: Even if the site of operation is a dedicated place (such as a specific secure data center), lawyers may have no longer any special protection as they have over documents held at their own premises.

b) *Access to secure data centers is highly regulated*: A direct consequence of more physical and administration controls in place results in actual access by users taking longer time; of course, increased security inevitably results in restrictions on how many identified persons are able to access the resources, and this also necessarily reflects how inspections may be carried out at the premises and by whom. The more users use a specific secure data center, the more unlikely it becomes that these users will be able to access their resources without compromising operational security.

c) *Abstraction from the physical devices (virtualisation)*: Virtualisation enables digital (virtual) sharing of the physical infrastructure. It has profoundly changed how servers work since early 2000, thanks to the commoditisation of servers and to an increase in their capacity. It has become a dominant force of transformation in the back office IT tools, later in desktop and development. This resulted in considerable savings in management and ownership costs, but at the same time also pointed toward building more and more secure data centers, with robust disaster recovery plans etc. However, economies of scale can only be achieved if these physical devices subject to virtualisation are shared between more users, resulting in a considerable loss of control for these users and the need for a separate provider of aggregate virtual machines. 

c) *Abstraction of the physical location of IT resources*: Introduction of virtualisation, homogeneity of the virtual resources and improvement in network capabilities, enable small and large cloud providers to manage their IT infrastructure more flexibly due to less constraints on the physical location of such infrastructure. While it also creates more efficiency and cost-savings, this also means that users are no more able to control where they IT resources are provided from. Considering that many regulations and law are location specific, this aggregation creates yet another layer of problem for lawyers.

d) *For the users, simpler to configure and use*: Relying on a virtual host is simpler for the user, because they don't have to deal with the peculiarities of the physical system and configure it. For many users, it is desirable to simplify the environment in which they want to run their applications, thus hide complexities of the IT when applications themselves are complex enough. Thus, rather than installing directly on virtual hosts and configuring all the details, for many users it is better to run applications on higher level computing platforms, in containers or even in browsers (such as for web apps). This makes the operational environment for the application easier to start and, in most cases, more reliable. The downside is that should any problems arise, the user has less possibility to identify the causes and correct these problems. The higher level the platform is, the more the user will be at the service provider's mercy, and the user may not be able to do nothing about this (regardless of the user's competence).
