---
layout: post
title:  Bonyolultan az egyszerű elektronikus aláírásról
date:   2023-01-19 09:00:00 +0100
author: dr. Homoki Péter
image: "simple_esignature.png"
tags:
  - eIDAS
  - electronic signature
  - elektronikus aláírás
  - írásbeliség
---

A közelmúltban két, tisztán szakmai-dogmatikai jellegű kérdés merült fel az *egyszerű elektronikus aláírás* fogalmával kapcsolatosan, amelyet indokolt az alábbiakban röviden körüljárni.

Az egyik kérdés, hogy az egyszerű elektronikus aláírás (uniós, illetve hazai) fogalmának fogalmi eleme-e az, hogy az aláírás létrehozó eszköz bármilyen módon az aláírás létrehozó személy birtokában, irányítása alatt legyen. Ehhez tartozó kérdés, hogy egyszerű elektronikus aláírásnak tekinthető-e az is, ha az aláírást felhasználó (befogadó) fél szoftveresen lehetőséget biztosít az aláíró félnek, hogy az aláírását elhelyezze egy, az aláírást befogadó fél által létrehozott elektronikus dokumentumon. Tipikus példája ennek a webáruházas "elfogadom" vagy "megrendelem" gombra kattintás - *ilyen esetben beszélhetünk-e nyilatkozattétel esetén az aláíró fél elektronikus aláírásáról?*

A másik kérdés, hogy egy *hang- vagy képfelvétel során elhangzott jóváhagyó nyilatkozat* esetén fogalmilag kizárt-e az egyszerű elektronikus aláírás létrejötte? (Függetlenül attól, hogy egy ilyen folyamat eredményét egy adott nemzeti jogban lehet-e írásbelinek vagy okiratnak minősíteni.)

## 1. Kell-e, hogy az aláíró birtokában legyen az aláírás-létrehozó eszköz?

Először az első kérdésre keressük meg az uniós jogi választ, mert erre lehet, bár bonyolult egyértelmű és meggyőző választ adni. Ennek érdekében érdemes feleleveníteni az uniós "egyszerű" elektronikus aláírás fogalmának szabályozását, annak változását. Az uniós szabályozás az "elektronikus aláírás" fogalmát általánosságban, igen tágan határozza meg, ezt szokás "egyszerű" aláírási szintnek nevezi, és ezen túl rögzít két további, egymásra épülő aláírási típust, szintet.

Az elektronikus aláírási irányelv első, még 1998-ban benyújtott bizottsági javaslatában [Proposal for a European Parliament and Council Directive on a common framework for electronic signatures COM/98/0297 final](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A51998PC0297) csak a két magasabb szintet definiálta külön, az "egyszerű" aláírási szint nem. Bár ez a szint is már jelen volt, hiszen a "nem tagadható meg a joghatása csak azért, mert ..." jellegű fordulat már ekkor is a szöveg része volt, és a javaslat maga is kiutalt a "szkennelt kép a Word végén"-jellegű egyszerűbb aláírásra, ami nem fokozott biztonságú.

De az e-aláírás általános definíciója csak a 1999. júniusi [tanácsi közös álláspontba](https://data.consilium.europa.eu/doc/document/ST-7634-1999-ADD-1/en/pdf) került bele, ami már megegyezett az elfogadott [irányelv](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31999L0093) szövegével: "olyan elektronikus adat, amely más elektronikus adathoz van csatolva vagy logikailag hozzárendelve, és amely hitelesítésre szolgál".

Az uniós irányelv szóhasználatában tehát hármas feltételt határozott meg: bármi lehet e-aláírás, ami
a) adat formájában van;
b) legalább logikailag hozzá van rendelve egy másik adathoz (az aláírni kívánt "adathoz"); és
c) az a) pont szerinti adat a b) pont szerint adat "hitelesítésére" (autentikációjára) szolgál.

Maga az irányelv túl sok magyarázatot nem fűzött ehhez a definícióhoz, de a forrása ennek is, mint a "joghatás meg nem tagadhatósága" fordulatnak is az UNCITRAL e tárgyban végzett munkája volt, lásd az UNCITRAL Model Law on Electronic Commerce [5. és 7. cikkét](https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/en/19-04970_ebook.pdf), az ez alapján az uniós aláírási irányelv előkészítésekor már tervezetként létező, de csak 2001-ben elfogadott [e-aláírási modelltörvény](https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/en/ml-elecsig-e.pdf) 2. cikk a) pontját.

Az egyszerű aláírások kapcsán konkrét példát az elfogadott uniós irányelv maga nem tartalmazott, csak az UNCITRAL aláírási modelltörvény implementálási útmutatója, amely kiutalt a PIN-kóddal aláírásra, a már említett szkennelt aláírás elektronikus dokumentumba tett változára és az "OK" gombra kattintásra is ([Part Two: Guide to the Enactment of the UNCITRAL Model Law on Electronic Signatures 2001, p. 21.](https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/en/ml-elecsig-e.pdf)).

Az uniós irányelv előkészítő anyagai közül érdemes kiemelni az ETSI (uniós szabványügyi szervezet) előkészítő munkájára is. Az 1998. évi előkészítő anyag (*Draft TR 101 xxx V0.4.2 (1998-11) Electronic signature standardization report*) egyértelműen az UNCITRAL definíciójára utalt ki, és lényegében ezt a szöveget vette át az uniós javaslat is 1999-ben. Az ETSI 1999. évi jelentésből (*European Electronic Signature Standardization Initiative (EESSI) Final Report of the EESSI Expert Team 20th July 1999*) az elektronikus aláírás fogalmát úgy foglalja össze, hogy az nem más, mint elektronikus hitelesítés, és a hitelesítésnek nagy vonalakban azt a jelentést adja, hogy "egy állítás szerinti azonosság megerősítése" ("validation of a claimed identity”). Az irányelv fogalmát igen tágan magyarázza meg, miszerint bármilyen hitelesítés e-aláírásnak minősül, ha logikailag összerendelik más elektronikus adattal. Majd a jelentés olyan példákat is hoz, mint a biometrikus ("aláírópados") aláírás, vagy a nem nyilvános kulcsú (szimmetrikus kulcsú) aláírások ilyen célú alkalmazását is ide sorolja, és az email aljára írt aláírásokat vagy a szkennelt aláírást maga is megemlíti, kijelentve, hogy bármifajta papíralapú hitelesítés (mint a bélyegzés) is elektronikus aláírásnak tekinthető az irányelv szerint.

Az uniós irányelv felülvizsgálatával kapcsolatos jelentések is értelmezték az egyszerű elektronikus aláírás fogalmát. A 2003. évi Dumortier jelentés (*Jos Dumortier et al.: The Legal and Market Aspects of Electronic Signatures, 2003*) kiemeli, hogy ha egy PIN-kódot valamely személy (entitás) azonosítására használják, például egy bankszámlához való hozzáférésre, akkor az nem elektronikus aláírás, de ha ugyanazt a technikát az "adat hitelesítésére" használják, például egy pénzügyi tranzakció megerősítésére, akkor az már egyszerű elektronikus aláírás (p. 21). Kiemeli azt is, hogy az irányelv elektronikus aláírás definíciója az összes lehetséges uniós tagállami aláírási fogalom legkisebb közös többszöröse kíván lenni.

A Bizottság által elfogadott 2006. évi jelentés ebből a szempontból sok újdonságot nem tartalmaz: az egyszerű elektronikus aláírás példájaként ez is egyszerűen a PIN-kód használatára utal, és ez is kiemeli az egyszerű e-aláírás elválasztását az adat hitelesítése (jóváhagyása) és az "entitások" hitelesítése fogalmak mentén. Utal arra is, hogy a banki hitelesítési rendszerek egyszeri jelszavai (OTP) egyszerű aláírásoknak tekinthetőek.

Az eIDAS 2012. évi [tervezete](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52012PC0238&from=EN) (nevében még csak eIAS) két szempontból hozott csak változást. Az egyik, hogy az autentikációs/hitelesítési célú felhasználás helyett a fogalmi feltétel az aláírási célú használatra változott (érthetőségi indokokra hivatkozva). A másik, lényegesebb változás pedig az aláíró meghatározásával volt kapcsolatos.

Az elektronikus aláírási irányelv szóhasználatában ugyanis az aláíró csak olyan személy lehetett, aki aláírás-létrehozó eszközzel rendelkezett (2. cikk (3) bekezdés), az angol eredeti szerint "holds a signature creation device", ami egyfajta birtoklásra utalhat. Ezt pedig néhányan úgy értelmezték, hogy csak akkor beszélhetünk egyszerű e-aláírásról is, ha az aláíró személy valamifajta rendelkezési joggal bír az aláírás létrehozására használt eszköz felett (ha nem is olyan kizárólagossággal, mint amit a fokozott biztonságú aláírás esetén fogalmi elvárás, 2. cikk (2) bekezdés).

Ezt a téves értelmezést azonban maga az eIDAS szóhasználata kiküszöbölte, amikor az aláíró fogalmát természetes személyre szűkítette, akkor nem kötötte az aláírói minőséget semmilyen eszköz birtoklásához ("elektronikus aláírást létrehozó természetes személy").

Ettől függetlenül ez az értelmezés azért sem volna helytálló, mert egy ilyen megszorító értelmezés kizárná az olyan, igencsak elterjedt webes megoldások e-aláírásként értelmezését, mint a fentebb már említett "OK-gombra kattintást" (ha pl. kioszkon használják), vagy az aláírást befogadó fél birtokában lévő eszközön való PIN használatokat is.

A 2013. évi, az eIDAS (akkor még csak eIAS) 2012. évi tervezetét követően kiadott jelentés, a [Feasibility study on an electronic identification, authentication and signature policy (IAS)](https://publications.europa.eu/resource/cellar/2d80fe08-751b-4097-96ed-4564bbbfb1b8.0001.01/DOC_1) a 111. lábjegyzetében is kifejezetten utal arra, hogy az egyszerű e-aláírás magában foglalhatja az "Elfogadom" gombok használatát is.

Az ilyen "kattintások" egyszerű e-aláírásnak minősítésével kapcsolatosan nehezen lehetne egyértelműbben fogalmazni, mint azt az angol Law Commission tette [Law Commission: Electronic Commerce: Formal Requirements in Commercial Transactions 18-19. oldal](https://www.lawcom.gov.uk/project/electronic-commerce-formal-requirements-in-commercial-transactions/): "We do not believe that there is any doubt that clicking on a website button to confirm an order demonstrates the intent to enter into that contract. That will satisfy the principal function of a signature: namely, demonstrating an authenticating intention. We suggest that the click can reasonably be regarded as the technological equivalent of a manuscript ‘X’ signature. In our view, clicking is therefore capable of satisfying a statutory signature requirement." Természetesen a Law Commission az angol jogot értékelte, azonban mint fentebb is írtuk, az irányelv egyszerű e-aláírási fogalmának meghatározása során igyekeztek a legtágabb aláírási értelmezést is befogadni.

Összefoglalva: az egyszerű e-aláírás semmilyen birtoklási vagy kontrollálási viszonyt nem feltételez az aláíró és az aláírásra használt eszköz között, csak annyi szükséges, hogy az aláíró képes legyen az aláírási (jóváhagyási) művelet megvalósítására, azaz szabad döntése keretében kifejezhesse az adott adatra vonatkozó jóváhagyását (a tartalom hitelesítését). Nem kizáró ok az egyszerű elektronikus aláírás esetén az sem, hogy a jóváhagyás (aláírás) megtörténtéről csak a nyilatkozatot befogadó fél rendszerében lesz bármi elektronikus bizonyíték, pl. naplóbejegyzés. Ilyen értelmezés a webes elfogadás egyszerű e-aláírási minősítését is szükségszerűen kizárná. Tehát ha a jóváhagyás, a tartalom hitelesítésének kifejezésére van mód a rendszerben, akármilyen egyszerű felhasználói felületi módszerrel, az már egyszerű elektronikus aláírás lehet.

## 2.

A másik kérdés, hogy egy hang- vagy képfelvétel során elhangzott jóváhagyó nyilatkozat esetén fogalmilag kizárt-e az egyszerű elektronikus aláírás létrejötte? Ha a hangfelvétel vagy a képfelvétel digitális formában rögzül, akkor az saját maga is nyilvánvalóan elektronikus adat (sőt, egyúttal az eIDAS 3. cikk 35. pont szerinti elektronikus dokumentum is).

Lehet-e az aláíró adat és az aláírt adat ugyanazon adatállomány akár technikailag nem feltétlenül elkülöníthető része? Ha készül egy digitális felvétel egy sor nyilatkozatról, ahol digitálisan nem különül el élesen az aláíró (jóváhagyó) és az aláírt adat, akkor csak magából a felvételből derül ki, hogy az aláírást kifejező nyilatkozat a felvételi adatállomány  időben korábbi szakaszára vonatkozik.

Mivel az egyszerű elektronikus aláírás fogalma eredendően tág, uniós szinten nem fogunk találni erre vonatkozóan eligazítást, szűkítő értelmezést. 

Nehéz tagadni, hogy a felvétel saját maga is adat, és a tartalom jóváhagyására (hitelesítésére) vonatkozó szándék is egyértelmű.  Az igazi kérdés így az, hogy ha egyetlen adatfolyamunk van, beszélhetünk-e külön aláíró és aláírt adatról, és a kettő legalább logikai egymáshoz rendeléséről? Mennyiben kell elkülönülnie az aláíró adat és az aláírni kívánt adatnak?

A jogértelmezés során természetesen ez utóbbi kizártságába is lehet kapaszkodni, de célszerűbb, ha az egyszerű e-aláírás általánossága miatt nem ez lesz a jogalkotói cél (az okirat alapú megoldásokra való hosszú távú átállás) kulcs eleme. Az egyszerű e-aláírásba igazából bármi digitális adat beleférhet, ehhez valódi joghatás egyébként sem fűződik, nincsen igazán jelentősége, hogy mit sorolunk be e fogalom alá és mit nem.

A megoldást itt is célszerűbbnek tűnik az írásbeliség vagy okiratiság meghatározásában, mintsem az egyszerű e-aláírás fogalmában keresni, mert az egyszerű e-aláírásnak van egy sajátos, nagyon tág uniós jogi értelmezése. Hozzá kell persze tenni, hogy a kép- és hangfelvételes nyilatkozatok jelen pillanatban egyértelműen nem tekinthetőek aláírásnak példáu az angol jog alatt (a már hivatkozott Law Commission Electronic Commerce értelmezése szerint ezt nem tekintik "látható formában lévő szavaknak"), vagy az aláírást meg nem határozó francia jog alatt egyértelműen nem tekinthető írásbelinek (Code civil Article 1365.)
Azért, mert valami nem aláírás, még lehet e-aláírás, mert ez utóbbit az eIDAS határozza meg, és azért, mert egy elektronikus dokumentum e-aláírással van ellátva, nem kell, hogy aláírtnak vagy okiratnak minősüljön.
Az, hogy egy megoldás egyszerű elektronikus aláírási mivoltát nem lehet kizárni az uniós jog alapján, nem jelenti azt, hogy az adott jóváhagyási formának egy nemzeti jogban bármilyen specifikus joghatást kell adni.
