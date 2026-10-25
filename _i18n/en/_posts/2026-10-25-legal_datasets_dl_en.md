---
layout: post
title:  Public Hungarian legal datasets to raise the standard of legal practice in Hungary
date:   2026-10-26 08:00:00 +0200
author: Dr. Péter Homoki
image: hu_legal_datasets_dl_formal_request.jpg
tags: 
  - legal dataset
  - legal databases
  - decisions
  - legal practice
  - download
---

It is very telling how the achievements of the EU-born open data initiative (or whatever it happens to be called) look to practising lawyers who want to exercise the rights the law gives them. What an interested attorney, in-house counsel, etc. would want in such a case is access to as many public legal sources and decisions as possible, in a uniform and as searchable a form as possible.

Of course, anyone can subscribe (and should subscribe!) to the well-known commercial legal databases, and choose according to taste whether the user interface that was fashionable ten or twenty years ago is closer to their heart. Personally, I like neither: my sensitivity to user experience got stuck somewhere in the late eighties, with command-line interfaces. For me, the real pain has always been that I cannot properly integrate the data I need for my work into rapidly changing workflows. So the content of the paid databases is excellent and worth every penny, but my access needs are so specific that no single standard piece of software can meet them.

Fortunately, there are also free data sources beyond the paid legal databases, even if their search interfaces, search capabilities and operating logic are heterogeneous and undocumented.

In this post I would like to show briefly what options we have if we want to put these free data sources to work for lawyers in a way that they can work frictionlessly with the leading large language models and their agentic frameworks.

Those less interested in the legal background may safely skip the first part, but forgive me: my profession does not let me pass over in silence what the once so noble initiative of 2005 has "degenerated" into, and how anonymised decisions fell between two stools.

First, let us review how all this should work according to the legislator's intent and what should be available. Then, in the second part, let us see how it all works in practice and what we can find.

## Access to legal databases as described in the legislation?

Access to public databases has a very long history: the Hungarian statutory framework alone is more than twenty years old, and in the EU the Commission's first green paper specifically on public sector information was published in 1998,  
([European Commission, COM(1998) 585 final, Public Sector Information: a key resource for Europe, Green Paper on Public Sector Information in the Information Society](https://op.europa.eu/hu/publication-detail/-/publication/599834ce-7a43-44fe-8cd8-334b3c19feba/language-en)) which, among government data, also referred specifically to legal information [see pages 6–7 and 23].

This was soon followed by the first directive on the re-use of public sector information [Directive 2003/98/EC of the European Parliament and of the Council of 17 November 2003 on the re-use of public sector information], although it no longer said anything specific about legal information. Hungary, then a new EU member state, also had to implement this directive, which it did in Act XC of 2005 on Electronic Freedom of Information and its implementing decrees [notably, although the act that authorised it has been repealed, Government Decree 305/2005. (XII. 25.) on the detailed rules for the electronic publication of data of public interest, the uniform public data search system, the content of the central register and data integration is still in force]. In its title and most of its provisions, the act focuses on aspects of freedom of information, that is, on making the operation of bodies performing public tasks transparent. Nevertheless, through its provisions on the publicity of law-making and of court decisions, it also made a lasting contribution to legal databases [see sections 9–15 on the publicity of law-making, and sections 16–20 on the publicity of court decisions, with mandatory anonymisation].

Unfortunately, in the area of its genuinely forward-looking public data search capabilities, the rules were implemented only in appearance: bodies performing public tasks focused rather on getting away as easily as possible with their duties related to publication schemes, as is clearly visible in the minimalist, telegraphic style of the publication schemes (including those of the NAIH, which is now in charge of this task).

Nor was this helped by Act LXIII of 2012 on the re-use of public sector information, which replaced the 2005 act. Even before the new act was adopted, the public data search system and the central electronic register of data of public interest had been moved under Act CXII of 2011, which deals with freedom of information. So Act LXIII of 2012 concentrated on the re-use of public sector information, while Act CXII of 2011 concentrated on data of public interest. Although legislation falls into the latter category, most decisions contain some kind of personal data, and as long as nothing expressly requires anonymisation, decisions are not mandatory to publish for most bodies under either act. As a result, such a legal source of interest to lawyers would appear in the general publication scheme only if it were also a "register". Although in practice most decision-making bodies probably maintain some kind of register (database) of their decisions, that does not make it a register in the "administrative law" sense.

Consequently, if we try to find in the [public data search engine](https://www.kozadat.hu/kereso/) either the above-mentioned Collection of Court Decisions (BHGY) or similar "collections of decisions" of other bodies, we find none, because they do not belong there, or at least certainly not in the general publication scheme. Of course, the legal databases highlighted by the 2005 act are visible on a search user interface whose look has not changed since 2005, but in the area of legal databases progress really did stop in 2005.

We can also check item by item the hits returned by the public data search engine. Let us first see who published what, for example, in relation to requests for data of public interest. The search engine returns 1,958 hits, but if we download them, we see 4,316. In the downloaded list, however, 40% of the published web links are faulty even at first glance, because somehow a space has ended up inside the URL. Even if we correct this error, about 30% of the remaining addresses do not work. And of those that do work, many point to the wrong place or to a general part of the body's website.

The situation is worse if we are interested in the content of publication schemes: the search interface gives 1,727 hits, but if we try to export them, the list suspiciously has 9,990 items, containing publications (e.g. notices of individual meetings) rather than the publication scheme itself, unlike the hits on the website. 80% of these 9,990 hits link to the data of a single publication portal (probably forced upon local governments) ([kozadat.localinfo.hu](https://kozadat.localinfo.hu)).

In short: the public data search engine launched in 2005 has, unfortunately, by now become useless even for purposes other than legal databases, and the Public Data Cadastre of the newer National Public Data Portal does not contain references to legal databases either. Should someone nevertheless attempt to access legal databases within the statutory framework, they can indicate this through the National Public Data Portal as part of a request for the "data utilisation support service".

One can of course also try submitting a request for access to data of public interest, but only if we know that the body concerned anonymises its decisions or that the legal sources sought will not otherwise contain personal data.

## The technical method

It is more interesting if we interpret this challenge not only as lawyers, as an administrative procedure at the end of which we either get the data or not, but rather as a technical question. In that case, it is worth starting from which bodies publish what, and how we could technically download it.

Let us look at a non-exhaustive list of the candidate published decisions and other legal content that specifically supports the work of attorneys and in-house counsel (the figures are from around October 2026 and do not necessarily refer to a single day). The list basically reflects my own interests, so I did not specifically examine, for example, the very large amount of data, guidance, recommendations and form-filling instructions published by the NAV (tax authority), or the very valuable public procurement data, or the data forming part of annual reports and the company register. For lawyers, the most valuable of the latter is the register of decisions and filed documents (applications, annexes, etc.) forming part of the company register, but here at most one hundred documents can be downloaded in 24 hours ([E-inspection](https://eakta.birosag.hu/e-ceg-betekintes)).

Also interesting for legal work, but not covered now, are the [data published at EU level](https://language-data-space.ec.europa.eu/index_en).

### Collection of Court Decisions (BHGY)

[Search for anonymised decisions](https://eakta.birosag.hu/anonimizalt-hatarozatok)

222,364 decisions, about 12 GB in original (download) size, 8 GB converted to plain text files (for searching etc.), with rich metadata provided by the OBH (National Office for the Judiciary): summary, court, division, area of law, cited statutory provisions, etc. This is "the" Hungarian legal goldmine, and a great deal of information can still be extracted from it that the standard commercial database products do not provide. Downloading it manually is somewhat tedious, but automated access is not prohibited, so if many lawyers or robots decide to download it anyway, the terms of access may well change.

### Hungarian Competition Authority (GVH)

The Hungarian Competition Authority has nothing to be ashamed of either, since it has long, consistently and in large numbers published its [decisions](https://www.gvh.hu/dontesek) for the general public. Its own decisions since 1997 are available on its website, together with the related court decisions:

|type of decisions|number|download size|converted text size|
|---|---:|---:|---:|
|Competition Authority decisions|7,894|8 GB|260 MB|
|Court decisions|1,400|690 MB|37 MB|

Allow about 12 hours for downloading.

### Disciplinary decisions of the bar

I presented these in my previous post: the Hungarian Bar Association (MÜK) has published some 1,544 disciplinary decisions on its [website](https://net.jogtar.hu/muk-fegyelmi-kereso/gyors), a mix of decisions imposing sanctions and decisions terminating proceedings; converted from the original HTML to text, their total size is only 30 MB.

### Constitutional Court

The Constitutional Court publishes all the decisions it has made since its establishment, currently some 13,340 decisions: [search](https://alkotmanybirosag.hu/ugykereso/?hatarozat_sorszam=&hatarozat_evszam=&ugyszam_sorszam=&ugyszam_evszam=&dontes_szerv=&befejezo_dontes_tartalma=&rendelkezo_resz=&indoklas=&velemenyek=&alkotmanybiro=&ugyszaki_jelleg=&lezaras_modja=&inditvanyozo_tipusa=&eljaras_tipusa=&ugyallapot=&alkotpanasz_ugyall=&jogszabaly=&lenyeg=&feltetel1=2&feltetel2=2&befejezes_tipusa=)

Their total (download) size is 812 MB, but it is still worth allowing some 15 hours for downloading (provided, of course, that we are not clicking by hand...). The converted text size is 300 MB.

### Hungarian National Authority for Data Protection and Freedom of Information (NAIH)

I collected four different types of decisions that may be relevant (I saw no point in machine-processing the 4 recommendations); the whole set can comfortably be downloaded in less than half an hour:

|type of decision|number|download size|converted text size|
|---|---:|---:|---:|
|[Data protection decisions and orders](https://naih.hu/hatarozatok-vegzesek)|268|94 MB|18 MB|
|[Data protection opinions](https://naih.hu/adatvedelmi-allasfoglalasok)|72|15 MB|1 MB|
|[Data protection information notices and announcements](https://naih.hu/dontesek-adatvedelem-tajekoztatok-koezlemenyek)|50|14 MB|0.5 MB|
|[Freedom of information opinions](https://naih.hu/dontesek-infoszab-allasfoglalasok)|131|25 MB|2 MB|

### National Media and Infocommunications Authority (NMHH)

Most of the published content is not really written for telecoms lawyers, but, for example, the general terms and conditions of providers of public electronic communications services are available in one place: [GTC](https://hirkszolg.nmhh.hu/kulso/app/index.jsp?v=55), 369 documents, 640 MB in original size, 140 MB as text.

53 [market definition decisions](https://nmhh.hu/hirkozles/szabalyozas/piacmeghatarozasi-dontesek) are published, 71/22 MB in size, and 60 [decisions published by electronic notice](https://nmhh.hu/hatosagi-dontesek-elektronikus-hirdetes), 10 MB/1 MB in size.

The largest number are the decisions of the Media Council ([Media Council decisions](https://nmhh.hu/mediatanacs/dontesek); downloading the 24,787 documents took almost four days, 1.5 GB downloaded, but the useful (text) content is only 164 MB).

### National Trade and Consumer Protection Authority (NKFH)

The NKFH also publishes its [decisions](https://nkfh.gov.hu/hatarozatok): it has 4,667 decisions from 2024 onwards (and, according to the metadata, a few published decisions have somehow landed here from 2029); about 2.9 GB could be downloaded in 21 hours, which became 129 MB when converted to text.

### Expert opinions of the Copyright and Industrial Property Expert Boards

The opinions of the two expert boards supervised by the SZTNH (Hungarian Intellectual Property Office) are also available on the [SZTNH website](https://epub.sztnh.gov.hu/e-kutatas/?lang=HU); only 833 of them have been published in total, starting from 2000; the 137 MB of decisions can be downloaded in about 1 hour, 14 MB as text.

### Agricultural land sale and lease contracts

For the duration of the publication period, NISZ Zrt. also publishes the [sale and lease contracts concerning agricultural land](https://hirdetmenyek.gov.hu/), so these are available only for a period of about six weeks. In this time window some 6,000 contracts were available this way, and about 1,000 new contracts are uploaded each week.

### Domain.hu (Domain Registration Arbitrator, ISZT Advisory Board, etc.)

Some 736 decisions are also [available](https://www.domain.hu/dontesek-es-allasfoglalasok/) on the domain.hu site, about 42 MB to download and 6 MB as converted text.

### Opinions and decisions of the Magyar Nemzeti Bank (central bank)

While the other published decisions could be downloaded without problems using essentially any automation method (or perhaps I simply used a too polite and slow download method), the MNB uses some kind of "active" protection to make robotic downloading of its opinions and decisions harder: its firewall tries to identify so-called "headless" browsers, and they do not wish to respond to them.

Slightly more than 81,000 decisions are published on the MNB decision search [site](https://hatarozatkereso.mnb.hu/); it is hardly worth trying with these.

However, given that the MNB opinions are much more interesting for our profession, and there are currently only 1,928 of them, it may be worth trying with automation built into the browser (e.g. a Tampermonkey userscript), but even so it will take at least four days. See the dedicated opinion [search page](https://allasfoglalaskereso.mnb.hu/).

## Why don't the technical and the legal methods meet?

The disadvantage of the technical approach is that it is haphazard: we cannot extend our survey, and we do not see which other bodies may have interesting published decisions, or whom else we could persuade to anonymise their existing decisions.

In any case, it is regrettable that Hungary is technically lagging behind the public data openness implemented by the Commission. In Hungary, no legal source offers an option on its web interface for publicly requesting a one-off download (dump) of the data, even though automated, decision-by-decision downloading over one or two weeks, like the one described here, means greater cost and burden for the bodies concerned.

It is in the interest of every citizen and business that legislation, published decisions, administrative practice and similar public data be as easy as possible to download and process. Not because this opens business opportunities for entrepreneurial people, but because in today's IT environment it is an entirely realistic scenario that every interested person wants to use public data themselves, not necessarily in the form made available by a standard commercial product. And this is not helped if public data is not made available, can at best be searched on a twenty-year-old interface, and IT solutions will work only on a hit-or-miss basis. Even if, according to the indicators "measured" by the EU, everything in the re-use of public data is going [wonderfully](https://data.europa.eu/en/open-data-maturity/2025), and every kind of fictitious indicator keeps pointing upwards.

## What is all this good for, why bother?

So what is all this good for, why should anyone bother? The well-known cliché that *data is the new oil* is true for legal practice as well. However, communication between engineers and lawyers is not always strong enough for engineers, their managers or their investors to figure out on their own what, for example, the legal profession needs in order to preserve its independence. This task cannot be fully outsourced outside the profession. A computational linguist and an attorney or in-house counsel see different things in the same legal dataset. Since our workflows are very fluid and adapt to specific tasks, it is hard for non-practising lawyers to see in a legal text how its further layers could be uncovered, or how a hidden feature could be turned into effective help in a lawyer's hands.

With legal corpora it is not enough to search the text or some typical metadata "in general", it is not enough to extend and enrich the range of metadata in general, just as it is not enough to handle certain regularities in the text at an abstract, grammatical level. This direction can only be given by the profession that uses search. While almost anyone can find the "keywords" in a text, a "summary" is already a value-laden operation: someone looking for proof of their own position or of the other party's error in a court judgment would summarise its essence differently from someone who wants to carve out of it guidance for legal scholarship or a uniform judicial practice.

We can examine and understand these questions only if we have in front of us at least one such legal dataset, downloaded, cleaned and converted into plain text files, so that it can be searched and indexed, and new texts or layers of text can be produced on that basis.

In the next post we will look at how the texts available in searchable form can be enriched and how search capabilities can be improved, e.g. by using so-called embeddings to enhance semantic search in legal texts.

Anyone can produce the programs used for downloading with the help of a large language model, but as an illustration, interested readers can find some of them here: [Homoki Law Office GitHub page](https://github.com/Homoki-Ugyvedi-Iroda/2026-10-25-legal_datasets_hu)
