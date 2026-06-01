---
layout: post
title:  580 SQE1 próbavizsgakérdés és néhány tanulság
date:   2026-06-01 10:00:00 +0200
author: dr. Homoki Péter
image: 2026-05-31-580-SQE1-mock-exam-questions-and-lots-of-lessons-to-learn.jpg
tags: 
  - SQE1
  - LLM
---


# 580 SQE1 próbavizsgakérdés és néhány tanulság

## 1\. Bevezető

Tavaly elhatároztam, hogy hétvégeken és ünnepnapokon készülök az [SQE1](https://en.wikipedia.org/wiki/Solicitors_Qualifying_Examination) vizsgára. A magyar jogi tanulmányaimat 1995-ben kezdtem, és már 22 éve szakvizsgázott magyar ügyvéd vagyok. Ideje valami egészen mással is foglalkozni - például angol joggal. Egészen más szellemiségű, és a különbséget nem nagyon lehet másként megérteni, mintha megtanuljuk a minimumot, amivel kint lehet praktizálni. Az Egyesült Királyság EU-ból való kilépése után is megmaradt, hogy az SQE2 típusú vizsgák alól mentességet kapunk (mind a szóbeli, mind az írásbeli-esszéírásos részek alól), így a szakvizsgához elég, ha egy kb. 60%-os eredményt érünk el egy feleletválasztós, "egyetlen lehetséges legjobb válasz" típusú teszten.[^1]

[^1]: Az SQE1 vizsgát két nap alatt teszik le, körülbelül egyhetes szünettel a két nap között. Mindkét nap meghatározott témakörökre vonatkozik (Functional Legal Knowledge = FLK1 és FLK2), 180 kérdéssel, ülésenként 90-90 kérdéssel. Minden ülés 2 óra 33 perces, vagyis nagyjából 10 óra 12 perc a teljes vizsgaidő mindkét napra.

Mintegy 28 felkészülésre szánt szakkönyv elolvasása és kijegyzetelése után készen álltam a próbavizsgákra. Ehhez viszont szükségem volt néhány technikai eszközre, ami segít a próbavizsgák eredményeinek ellenőrzésében.

* Voltak vizsgakérdéseim (SRA/Kaplan ingyenes minták letölthetőek + vettem egy próbavizsga-könyvet a Revise sorozatból), magyarázattal együtt.
* Pünkösdhétfőnek is köszönhetően egy hét leforgása alatt körülbelül 18 óra alatt sikerült az összes 580 kérdést végigfutnom: ebben volt két, megszakítás nélküli, 153 perces ülés is (hogy lássam, mennyire vagyok gyors), de a többi tesztelést akkor csináltam, amikor csak az időm engedte. A fő célom nem a tökéletes próbavizsga kialakítása és leülése volt, hanem az, hogy megtaláljam a tudásom gyenge pontját, illetve hogy kiderüljön, mely területeket nem tudtam még gyakorolni. A tananyagokban és más könyvekben sok olyan témakör volt, ami nem állt össze teljesen. Ilyenkor vagy egy jogi adatbázisban kutakodtam (pl. Westlaw), de legalább ilyen hasznos módszer az, ha találunk rá példát, hogy az adott jogi témakört hogyan is értelmezik egy-egy tesztkérdésben.
* Nem is az eredményeim miatt készült ez a poszt. Néhány eszközt ki kellett tehát alakítanom azért, hogy egyrészről beazonosíthassam azokat a területeket, amelyeket az első próbálkozás során elhibáztam, valamint azokat is, amelyeket még egyetlen kérdéssel sem tettem próbára.
* És ha az embernek már megvannak ezek az eszközei, jó ötletnek tűnt összehasonlítani az eredményeimet néhány legújabb LLM eredményével, hiszen végre van egy emberi viszonyítási alapom. Ez jó kifogás arra is, hogy a) néhány, a gyakorlatban is fontos, a nagy nyelvi modellekkel (LLM) kapcsolatos jelenséget bemutassak ügyvédeknek, és b) az elemzés és blogírás közben se kelljen már tanulnom...
* Amit konkrétan csináltam: lefutattam az 580 tesztkérdést 19 alkalommal különféle nagy nyelvi modellekkel is: az Anthropic Opus/Sonnet/Haiku[^2] és a DeepSeek Chat/Flash/Pro[^3] modelleken, "gondolkodás" (reasoning) és anélküli változatban is. Az első az ún. frontier, csúcsmodell, a második család pedig egy nyílt súlyú modellcsalád.

[^2]: Az itt tesztelt Anthropic modellek modellkártyái / termékoldalai:
    - Claude Opus 4.x - <https://www.anthropic.com/claude/opus>
    - Claude Sonnet 4.x - <https://www.anthropic.com/claude/sonnet>
    - Claude Haiku 4.5 - <https://www.anthropic.com/claude/haiku>

[^3]: A tesztelt nyílt súlyú DeepSeek modellek oldalai a Hugging Face-en:
    - DeepSeek-V4-Pro (1,6 T paraméter összesen, tokenenként 49 milliárd aktivált; Mixture-of-Experts; 1M token ablak) - <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro>
    - DeepSeek-V4-Flash (284 milliárd paraméter összesen, tokenenként 13 milliárd aktivált; Mixture-of-Experts; 1M token ablak) - <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash>
    A "DeepSeek Chat" néven valójában a DeepSeek-v4-Flash nem-érvelő változatára hivatkozom.
Mindez a kísérletezés **65 dolláromba** került, amely a 19 futtatás közvetlen API-költségét foglalja magában (szövegkészítés, ellenőrzésen, elemzésen), ezen felül pedig még az éves Claude Pro előfizetésemet folyamatosan használtam. Az eszközökhez szükséges kódok és az elemzések nagy részét a Claude Code-ot segítségével írtam (az Anthropic agentikus parancssoros eszköze) (Ezt a blogposztot viszont nem azzal írtam - csak a lábjegyzeteket, helyesírási hibákat stb. javítottam vele). Hogy megérthessük az LLM-ek költségeit, fontos tudni, hogy a modell a be- és kimeneti szöveget kisebb darabokra, úgynevezett tokenekre bontja (szavak alatti egységekre - angolban kb. 4 karakter / token, magyarban kevesebb stb.). A szolgáltatók a fogyasztást tokenekben mérik és számlázzák (azt is, amit beküldünk, és azt is, amit a modell kiad válaszként).

## 2\. SQE1 ranglista 

| Helyezés | Modell (futtatás) | Család | Siker | Költség egy tesztre (580 kérdés) | mp/kérdés |
|---:|---|---|---:|---:|---:|
| 1 | DeepSeek V4 Flash (2 futás átlaga) | DeepSeek | 86,6 % | ~$0,75 | 11 |
| 2 | DeepSeek V4 Flash 16K headroom | DeepSeek | 85,9 % | ~$0,87 | 14 |
| 3 | DeepSeek V4 Pro 16K headroom | DeepSeek | 85,3 % | ~$1,67 | 30 |
| 4 | Claude Opus 4.8 | Anthropic | 85,0 % | ~$4,30 | nem volt mérve |
| 5 | DeepSeek V4 Pro (2 futás átlaga) | DeepSeek | 84,9 % | ~$1,40 | 25 |
| 6 | Claude Opus 4.5 | Anthropic | 83,4 % | ~$3,19 | nem volt mérve |
| 7 | Claude Opus 4.0 | Anthropic | 81,6 % | ~$3,19 | nem volt mérve |
| 8 | Claude Sonnet 4.6 (3 futás átlaga) | Anthropic | 79,1 % | ~$0,64 | 2 |
| 9 | Claude Haiku 4.5 + 2K gondolkodás | Anthropic | 75,3 % | $1,62 | 8 |
| 10 | Claude Haiku 4.5 + 4K gondolkodás | Anthropic | 75,0 % | $2,37 | 11 |
| **11** | **Ember (én)** | Homoki | 67,1 % | ~3 600 € | 102 |
| 12 | DeepSeek Chat (2 futás átlaga) | DeepSeek | 66,1 % | ~$0,01 | 1 |
| - | _Elvárt minimum eredmény (~60 %)_ | - | _~60 %_ | - | - |
| 13 | Claude Haiku 4.5 (3 futás átlaga) | Anthropic | 48,2 % | ~$0,18 | 1 |
| - | _Véletlen tippelés_ | - | _20,0 %_ | - | - |


## 3\. 1. tanulság - Mik a "gondolkodó" (érvelő) modellek, és miért olyan drágák?

Az eredmények megértéséhez tudni kell, hogy mindkét modellcsaládon belül kérhetünk a modelltől egy a) egyenes, "gyors" választ (ami nem támaszkodik az ún. chain-of-thought / gondolatláncnak nevezett képességekre), vagy b) egy "gondolkodó" választ. Ez utóbbi esetében előre meg kell adni, hogy mekkora legyen a "gondolkodási költségkeret" (thinking budget). Vagyis: maximum hány tokent használhat fel a modell a belső érvelésre, mielőtt a külvilág számára is látható választ is meg kell adja. Egy ilyen belső érvelés, mint látjuk, sokat segít az eredményen. Ez a költségkeret lehet 1024 token vagy akár 32768 token is. Az érvelés a modellek SQE-eredményeit is javítva, de meglátszik a költségeken is. Ugyanannak a kérdésnek a "gondolkodással" történő megválaszolása ugyanis akár az eredeti költség százszorosába is kerülhet (lásd alább).

Ugyanaz a modell, ugyanaz az 580 kérdés, csak a gondolkodási keret változott:

| Haiku 4.5 beállítás | Költség | Siker | Költség minden további +1 %ponthoz az alapértékhez képest |
|---|---:|---:|---:|
| Gondolkodás nélkül (3 futtatás átlaga) | $0,18 | 48,2 % | - |
| + 2K gondolkodási keret | $1,62 | 75,3 % | $0,05 |
| + 4K gondolkodási keret | $2,37 | 75,0 % | $0,08 |

Az első 1024 gondolkodási token 27 százalékpontnyi pontosságot eredményezett, százalékpontonként 5 centért. A következő 1024 token költségkeret viszont már semmit.

Ez a $65 nyilván sok pénz egy ilyen posztra, és tényleg nem volt 1400 dollárom egy 580 kérdéses teszt lefuttatására, csak azért, hogy lássuk, a Claude Opus 32 ezer tokenes gondolkodási kerettel vajon milyen szuper eredményt érhet el.

Ahogy látható, a gondolkodás sokat tud javítani az eredményeken, de ez feladatfüggő, és semmi garancia nincsen arra, hogy minél többet költesz az érvelési költségkeretre, annál jobb teljesítményt kapsz. Tehát csak azért, mert egy kereskedelmi kommunikáció szerint valami érvelés alapú Opust használ, az még sok mindent jelenthet.

Továbbá, a [nyílt súlyú modellek](https://en.wikipedia.org/wiki/Open-source_artificial_intelligence#Open-weight_models) árazása nagyon különbözik a frontier modellek árazásától, akkor is, ha nem saját gépen futtatjuk őket, hanem távolról, felhőszolgáltatásként (API útján). Roppant olcsók, de meglepően jó teljesítményűek. A [DeepSeek](https://en.wikipedia.org/wiki/DeepSeek)-kel sokkal több tesztfuttatást tudtam végezni, mert - modellpáronként összemérve - nagyjából egy nagyságrenddel olcsóbb volt, mint az Anthropic.
A nyílt súlyú modellek nagyon fontosak a szakma számára, mert ezek esetén a felhasználó teljesen az irányítása alatt tarthatja az adataidat, és az inferencia a cég saját hardverén történhet, így az ügyféladatok nem is hagyják el az irodát.[^4]
Persze a legnagyobb nyílt súlyú modellek otthoni futtatása elméletben lehetséges, gyakorlatban viszont igényes. Egy DeepSeek-V4-Pro méretű modell futtatásához [háromfázisú betáplálás](https://en.wikipedia.org/wiki/Three-phase_electric_power) kell, a gép üresjáratban is kb. 2,5 kW-ot, kérdés-megválaszoláskor pedig 10 kW-ot fogyaszt, a hardver nagyjából $500 000 dollárba kerülne. Azonban a tesztek során a legjobb teljesítményt nyújtó DeepSeek-V4-Flash már elég kb. $100 000 dollárt szánni, és ez akár otthonról is futtatható, nem különösebben nagy az áramfelvétele sem. (Kis kompromisszumokkal és szerencsével akár $30 000 dollár alatt is megúszható, egy megfelelő memóriamennyiséggel bíró pl. Mac Studo M3 Ultrával, ha éppen kapható). A legtöbb jogi munkához pedig ennél is jóval kisebb nyílt súlyú modellek is bőven elegendőek, például a [Qwen](https://en.wikipedia.org/wiki/Qwen) család 3.6 modellje ([github.com/QwenLM/Qwen3.6](https://github.com/QwenLM/Qwen3.6) is elegendő.

[^4]: CCBE (Council of Bars and Law Societies of Europe / Európai Ügyvédi Kamarák Tanácsa), *Technical Guide on the Use of AI Tools and Models by Lawyers*, 2026. március. Elérhető: <https://www.ccbe.eu/fileadmin/speciality_distribution/public/documents/IT_LAW/ITL_Guides_recommendations/EN_ITL_20260327_CCBE-technical-guide-on-the-use-of-AI-tools-and-models-by-lawyers.pdf>.

* \[TÁBLÁZAT - 1. tanulság költségszerkezet]

## 4\. 2. tanulság - Sebesség, költség, pontosság

A mérések szerint:

  * DeepSeek Chat (=nem érvelő DeepSeek): 0,8 mp/kérdés, 66 %-os pontosság
  * DeepSeek Flash: 10 mp/kérdés, 87 %
  * DeepSeek Pro: 25 mp/kérdés, 85 %

| Modell | Kérdésenkénti idő | Költség (580 kérdés) | Siker |
|---|---:|---:|---:|
| DeepSeek Chat | ~1 mp | ~$0,01 | 66 % |
| Claude Haiku 4.5 + 2K gondolkodás | ~8 mp | $1,62 | 75 % |
| DeepSeek V4 Flash | ~11 mp | ~$0,75 | 87 % |
| DeepSeek V4 Pro | ~25 mp | ~$1,40 | 85 % |
| **Ember (én)** | ~102 mp | ~3 600 € | 67 % |

A DeepSeek "gondolkodó" modelljei (Flash és Pro) 10–30×-szor lassabbak, mint a DeepSeek Chat (nem gondolkodó) modellje; a Pro 2,5×-szer több időt tölt egy kérdésen, mint a Flash, miközben a teszt szerint rosszabb a találati aránya. Viszonyítási pontként: én kb. 4×-szer több időt töltök egy kérdésen, mint a leglassúbb érvelő modell - és több mint százszor annyi időt, mint a DeepSeek gyors modellje. Ugyanazt a teljesítményt érem el, csak százszor lassabban, és több ezerszer drágábban.

## 5\. 3. tanulság - Ugyanaz a modell legközelebb más választ fog adni

Láthatjuk, hogy ha ugyanazokat a kérdéseket ugyanazon a modellen többször is végigfuttatjuk, a modell nem mindenben fog mindig ugyanúgy válaszolni.

Öt modellt is újrafuttattam ugyanazon a 580 kérdésen, a futtatások között semmilyen beállítás változtatása nélkül:

| Modell | Futtatások | Futtatásonkénti találat (%) | Átlag | Maximális eltérés | Szórás | Hasonlóság (Jac.) |
|---|---:|---|---:|---:|---:|---:|
| Haiku 4.5 (gondolkodás nélkül) | 3 | 49,1 / 47,9 / 47,4 | 48,2 | 1,7 %pont | 0,7 %pont | 0,75 |
| Sonnet 4.6 (gondolkodás nélkül) | 3 | 79,5 / 79,5 / 78,4 | 79,1 | 1,0 %pont | 0,5 %pont | 0,92 |
| DeepSeek Chat (gondolkodás nélkül) | 2 | 65,5 / 66,7 | 66,1 | 1,2 %pont | 0,6 %pont | 0,73 |
| DeepSeek V4 Flash (gondolkodó) | 2 | 87,2 / 86,0 | 86,6 | 1,2 %pont | 0,6 %pont | **0,52** |
| DeepSeek V4 Pro (gondolkodó) | 2 | 84,5 / 85,3 | 84,9 | 0,9 %pont | 0,4 %pont | **0,47** |

A **futtatásonkénti találat** azt jelzi, hogy az adott számú kérdésből hány válasz volt helyes. A **maximális eltérés** a legjobb és a legrosszabb eredmény különbségét mutatja. A **szórás** azt mutatja, hogy az eredmények mennyire szóródnak az átlag körül. A **hasonlóság (Jaccard)** a futtatások *rossz válaszainak* halmazait hasonlítja össze: az 1,0 azt jelenti, hogy két futtatás pontosan ugyanazokat a kérdéseket rontotta el, 0,0 azt jelenti, hogy semmi nem volt közös a két futtatás közös rontásaiban.

Két dolgot érdemes kiemelni:
  * **A maximális eltérés mind az öt modellnél nagyjából azonos** (~1 %pont). Ha ugyanazt a tesztet újrafuttatod, körülbelül egy százalékpontnyi eltérésre számíthatsz. Ez azt is jelenti, hogy bármely két százalékpont alatti különbség a ranglistán nem feltétlenül jelent érdemi eltérést.
  * **A hasonlóság modellenként eltérő.** A Sonnet hibáinak 0,92-es "hasonlósága" nagyon magas - amikor a Sonnetnek különböző futtatásokon ugyanazt a kérdést tették fel, szinte mindig ugyanúgy döntött; az egy százalékpontos eltérés csak ugyanazokból a kérdésekből fakad. Eközben a Haiku és a DeepSeek Chat futtatásonként nagyjából ugyanazt a találati arányt érte el, mégis mindig más és más kérdéseket rontottak el. Az egyik Haiku-futtatásban elrontott 5 %-nyi hiba nem lesz átfedésben a következő futtatás során rontott 5%-nyi hibával.

Egy jobban kalibrált modell kiszámíthatóan ugyanazokon a kérdéseken hibázhat, más modell pedig minden futtatáskor más kérdéseket téveszthet. Ez utóbbi hiba sajnos az ügyvédi munka számára károsabb, mint az első, mert következetlen eredményeket okoz, amire nehezebb felkészülni.
Tehát nem csak a százalékos hibaeredményt fontos látnunk, hanem a szórást, varianciát - és ideális esetben az alatta lévő hasonlóságot is.

## 6\. 4. tanulság - Az ár nem mindig jelent jobb teljesítményt, és a rosszabb teljesítmény sem mindig olcsóbb

  * DeepSeek V4 Flash (~$0,75/futtatás, 2 futtatás átlaga): 86,6 %
  * Opus 4.8 (~$4,30/futtatás, ~6×-szer drágább): 85,0 %
  * DeepSeek Chat (gondolkodás nélkül, ~$0,01/futtatás, az Opus 4.8-nál 430×-szer olcsóbb): 66,1 %

Nem feltétlenül igaz, hogy a legjobb eredményhez a legdrágább modelleket kell használni - ez mindig a feladattól függ.

| Modell | Költség (580 kérdés) | Helyes / 580 | Költség egy helyes válaszra |
|---|---:|---:|---:|
| DeepSeek Chat (2 futtatás átlaga) | ~$0,01 | 384 | $0,00003 |
| Claude Haiku 4.5, gondolkodás nélkül (3 futtatás átlaga) | ~$0,18 | 279 | $0,0006 |
| Claude Sonnet 4.6 (3 futtatás átlaga) | ~$0,64 | 459 | $0,0014 |
| DeepSeek V4 Flash (2 futtatás átlaga) | ~$0,75 | 502 | $0,0015 |
| DeepSeek V4 Pro (2 futtatás átlaga) | ~$1,40 | 493 | $0,0028 |
| Claude Haiku 4.5 + 2K gondolkodás | $1,62 | 437 | $0,0037 |
| Claude Haiku 4.5 + 4K gondolkodás | $2,37 | 435 | $0,0054 |
| Claude Opus 4.8 | ~$4,30 | 493 | $0,0087 |

Az érvelés nélküli Opus 4.8 ebben a benchmarkban a negyedik legpontosabb modell. Egy helyes válaszra jutó költség alapján rendezve a utolsó. A legolcsóbb modell, ami elfogadható szintű választ adott az a nem-érvelő DeepSeek Chat (Flash) - egy helyes válaszra jutó költségben nagyjából 290×-szer olcsóbb, mint az Opus, annak ellenére, noha az Opus 109-cel több kérdést válaszolt meg helyesen.

## 7\. 5. tanulság - A különböző modellcsaládok különböző kérdéseken hibáznak

Az Anthropic és a DeepSeek nagyrészt eltérő kérdéseket hibázott el.

Az 580 kérdés közül 3 olyan volt, amit a **mind a 19 futtatás során minden** modell rosszul válaszolt meg, és további 15 kérdést a 19-ből 17 vagy 18 futtatás rontott el. Ezekben a modellek magabiztosan és egyformán hibáznak. Ha ugyanaz a kérdés két különböző modellcsaládhoz tartozó modellen is lefut, így olyan hibákat is beazonosíthatsz, amiket egy modell egyedül nem venne észre.

**Táblázat - azonos modell közti hasonlóság vs. családok közötti hasonlóság:**

| Összehasonlítás | Hasonlóság (Jac.) |
|---|---:|
| Sonnet ↔ Sonnet (azonos modell, különböző futtatás) | 0,92 |
| Haiku ↔ Haiku (azonos modell, különböző futtatás) | 0,75 |
| DeepSeek Chat ↔ DeepSeek Chat | 0,73 |
| DeepSeek V4 Flash ↔ Flash | 0,52 |
| DeepSeek V4 Pro ↔ Pro | 0,47 |
| **Anthropic ↔ DeepSeek (modellcsaládok között)** | **0,14 – 0,43 (átlag 0,29)** |

Ugyanannak a gondolkodás nélküli modellnek két futtatása a rossz kérdéseinek 70–90 %-ában fedi át egymást. Ugyanannak a gondolkodó modellnek a két futtatása viszont csak körülbelül a felében. Két különböző családba tartozó modell pedig a rossz kérdéseinek kevesebb mint egyharmadában fedi át egymást.

**Táblázat - konszenzusos hibák (kérdések, amelyekre több modell is tipikusan rossz választ adott):**

| 19 teljes futtatásból N-en hibázták el | QID-k száma |
|---:|---:|
| Minden egyes futtatáson (19/19) | 3 |
| 19-ből 17 vagy 18 futtatáson | 15 |
| Futtatások többségén (10 vagy több) | 109 |

580 kérdés közül három kérdésre minden modell minden futtatás során helytelen választ adott.

## 8\. Kód és további részletek

Megosztható részletek: \[https://github.com/peterhomoki/SQE_tests_share/tree/master](https://github.com/peterhomoki/SQE_tests_share/tree/master)
Tartalmazza: a teljes SRA taxonómiát, a Flask UI-t, a saját rossz-QID CSV beolvasásához szükséges scripteket, az elemzőeszközöket.
Nem tartalmazza: az általam használt kereskedelmi anyagokat, sem az SRA teszt kérdéseit.

A GitHub-on van egy részletesebb táblázat is a modellfuttatások eredményeiről, a tényleges válaszok bemutatása nélkül. A posztban szereplő minden szám újraszámolható ebből a CSV-ből:
  * `model_runs_anonymised.csv` - soronként `(modell, futtatás, kérdés)` hármas, csak a kérdés azonosítójával és azzal, hogy a modell helyesen oldotta-e meg. Ezzel a fenti adatok újraszámolhatók, és további elemzések is végezhetők.

A CSV szándékosan nem tartalmazza a kérdések szövegét, a bevezető részt (lead-in), a lehetséges válaszokat, a helyes megoldást, valamint az egyes kérdésekre vonatkozó taxonómiát, kategóriákat. A CSV-ben szereplő QID-k a saját adatbázisomban használt belső egyedi azonosítók.

## 9\. Záró gondolatok

Látható, hogy az LLM-ek értékelése és megértése nagyon fontos előfeltétele annak, hogy a modell kimenetének megfelelő minőségét kontrollálhassuk. Függetlenül attól, hogy mi lesz a tényleges SQE1-eredményem, legközelebb az **agentikus harnessekről** (keretrendszerekről) tervezek írni - arról, hogy mik ezek, hogyan kapcsolódnak az itt vizsgált LLM-ekhez, és hogy egy harness hogyan változtatja meg azt, ahogyan az ügyvédek valódi munkájukhoz használhatják az LLM-eket - nem csupán próbavizsgára tanuláshoz, mint itt.
