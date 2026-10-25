---
layout: post
title:  Nyilvános magyar jogi adatkészletek a hazai ügyvédi munka színvonalának javításához
date:   2026-10-26 08:00:00 +0200
author: dr. Homoki Péter
image: hu_legal_datasets_dl_formal_request.jpg
tags: 
  - jogi adatkészlet
  - jogi adatbázisok
  - határozatok
  - ügyvédi munka
  - letöltés
---

Nagyon beszédes, hogy az uniós eredetű nyílt adat kezdeményezés (vagy éppen hogyan hívják) vívmányai miként jelennek meg a gyakorló jogászok számára, ha élni szeretnének a jog adta lehetőségeikkel. Az érdeklődő ügyvéd, jogtanácsos stb. célja ilyenkor az lenne, hogy minél több nyilvános jogforráshoz és határozathoz hozzáférhessen, a lehető leginkább kereshető, egységes formában. 

Természetesen mindenki előfizethet (és fizessen is elő!) a jól ismert piaci jogi adatbázisokhoz, és ízlése szerint választhat abból, hogy a tíz vagy a húsz évvel ezelőtt divatos felhasználói felület áll-e a szívéhez közelebb. Nekem személy szerint egyik sem: a felhasználói élmény iránti fogékonyságom valahol a nyolcvanas évek végén megrekedt a parancssoros interfészeknél. Az igazi szenvedést számomra mindig az jelenti, hogy a munkámhoz szükséges adatokat nem tudom jól integrálni a gyorsan változó munkafolyamatokhoz. Tehát a fizetős adatbázisok tartalma kiváló és minden pénzt megérnek, de a hozzáférési igényeim annyira egyediek, hogy azt nem lehet egyetlen standard szoftverrel kielégíteni.

Szerencsére vannak a fizetős jogi adatbázisokon túlmutató, ingyenes adatforrások is, még ha a keresőfelület, a keresési képesség, a működési logika heterogén, és nem dokumentált.

Ebben a publikációban azt szeretném röviden bemutatni, hogy milyen lehetőségeink vannak, ha ezeket az ingyenes adatforrásokat a jogászi munka szolgálatába szeretnénk állítani úgy, hogy azok súrlódásmentesen együttműködhessenek a piacvezető nagy nyelvi modellekkel és azok agentikus keretrendszereivel is.

Az első részt nyugodtan átugorhatja az, akit a jogi háttér kevésbé érdekel, de bocsássák meg nekem, hivatásom miatt nem tudom szó nélkül hagyni, hogy mivé "korcsosult" a 2005-ben még oly nemes kezdeményezés, és hogyan jutottak az anonimizált határozatok két szék között a padlóra.

Először tekintsük át azt, hogy miként is kellene mindennek a jogalkotói szándék szerint működnie, mi mindennek kellene elérhetővé lennie. Majd, a második részben nézzük meg, hogy mindez hogyan működik a gyakorlatban, mit találhatunk.

## A jogszabályokban leírt hozzáférés egyes jogi adatbázisokhoz?

A nyilvános adatbázisokhoz való hozzáférés igen hosszú múltra vezethető vissza, csak a magyarországi törvényi környezet is több, mint húsz éves már, az unióban pedig 1998-ban jelent meg a Bizottság első zöld könyve kifejezetten a közadatokról,  
([European Commission, COM(1998) 585 final, Public Sector Information: a key resource for Europe, Green Paper on Public Sector Information in the Information Society](https://op.europa.eu/hu/publication-detail/-/publication/599834ce-7a43-44fe-8cd8-334b3c19feba/language-en)) amely a kormányzati adatok között kifejezetten  a jogi információra is utalt [lásd 6-7, 23. oldal].

Ezt nem sokkal később követte az első, a közadatok újrahasznosításáról szóló irányelv [Az Európai Parlament és a Tanács a közszféra információinak további felhasználásáról szóló 2003. november 17-i 2003/98/EK irányelve], bár ebben már nem esett külön szó a jogi információkról. Ezt az irányelvet kellett a friss uniós tagállam Magyarországnak is implementálnia, amely az elektronikus információszabadságról szóló 2005. évi XC. törvényben és végrehajtási rendeleteiben történt meg [kiemelendő, hogy a felhatalmazást adó jogszabály hatályon kívül helyezése ellenére ma is hatályos még a közérdekű adatok elektronikus közzétételére, az egységes közadatkereső rendszerre, valamint a központi jegyzék adattartalmára, az adatintegrációra vonatkozó részletes szabályokról szóló 305/2005. (XII. 25.) Korm. rendelet]. A törvény a címében és a legtöbb rendelkezésében inkább az információszabadság vetületeire fókuszál, azaz a közfeladatot ellátó szervek működésének átláthatóságát kívánja biztosítani. Ennek ellenére a jogalkotás folyamatával és a bírósági határozatok nyilvánosságával kapcsolatos előírásai révén a jogi adatbázisok terén is maradandót alkotott [lásd a 9-15. §-ban a jogalkotás nyilvánosságáról, a 16-20. §-ban pedig a bírósági határozatok nyilvánosságáról, kötelező anonimizálással].

Sajnos a kifejezetten előremutató közadatkeresési képességek terén a szabályok végrehajtása látszólagos: a közfeladatot ellátó szervek inkább arra összpontosítottak, hogy a közzétételi listákkal kapcsolatos feladatot minél egyszerűbb megússzák, ami jól látható a közzétételi listák minimalista, távirati stílusában (beleértve az ezen feladat ellátásával ma már megbízott NAIH-ot is).

Ezen nem segített a 2005. évi törvényt felváltó, a közadatok újrahasznosításáról szóló 2012. évi LXIII. törvény sem. Még az új törvény elfogadását megelőzően a közadatkereső rendszer és a  közérdekű adatok központi elektronikus jegyzéke is átkerült az információszabadsággal foglalkozó 2011. évi CXII. törvény hatálya alá. Ezért a 2012. évi LXIII. törvény a közadatok újrahasznosítására összpontosított, míg a 2011. évi CXII. törvény a közérdekű adatokra. Bár a jogszabályok ez utóbbi körbe tartoznak, a határozatok nagy részében van valamifajta személyes adat, és amíg anonimizálási kötelezettséget kifejezetten nem ír elő semmi, addig a határozatok a legtöbb szerv számára nem kötelező egyik törvény alapján sem. Ennek következtében az általános közzétételi listában csak akkor szerepelne egy ilyen, a jogászok számára érdekes jogforrás, ha az egyúttal egy "nyilvántartás" is lenne. Noha a gyakorlatban a legtöbb döntéshozó szerv valószínűleg fenntart valami nyilvántartást (adatbázist) a döntéseiről, attól az "közigazgatási jogi" értelemben nem lesz nyilvántartás.

Ennek következtében hiába próbálunk meg a [közadatkeresőben](https://www.kozadat.hu/kereso/) akár a fent említett Bírósági Határozatok Gyűjteményére (BHGY) is rátalálni, akár más szerv hasonló "döntésgyűjteményeire", egyet sem találunk, mert nem tartozik oda, legalábbis az általános közzétételi listába biztosan nem. Természetesen a 2005. évi törvény kiemelt jogi adatbázisok a 2005 óta változatlan kinézetű kereső felhasználói felületén láthatóak, de a jogi adatbázisok terén a fejlődés valóban megállt 2005-ben. 

Elkezdhetjük a közadatkereső által biztosított találatokat tételesen is ellenőrizni. Nézzük meg, hogy először ki-mit tett közzé pl. a közérdekű adatok igénylésével kapcsolatosan. A közadatkereső kiad 1.958 találatot, de ha ezt letöltjük, 4.316 találat látunk. A letöltött listából azonban a közzétett internetes hivatkozások 40%-a ránézésre is hibás, mert valahogy szóköz került az URL belsejébe. Ha ezt a hibát javítjuk, akkor is kb. 30%-a a fennmaradó címeknek nem működik. Ami működik, abból pedig sok nem jó helyre mutat vagy a honlapjuk egy általános részére fog mutatni.

Rosszabb a helyzet, ha a közzétételi listák tartalma érdekelne bennünket: a közadatkereső felületén 1.727 találatot kapunk, de ha ezt megpróbáljuk exportálni, gyanúsan 9.990 elemes lesz a lista, amiben inkább közzétételek vannak (pl. egy-egy ülésről tájékoztatók), nem a közzétételi ista maga, a honlapos találatokkal ellentétben. Az így megmutatott 9990 találat 80%-a egy (valószínűleg az önkormányzatokra ráerőltetett) közzétételi portál adataira hivatkozik ki ([kozadat.localinfo.hu](https://kozadat.localinfo.hu))

Röviden: a 2005-ben indult közadatkereső sajnos mára már a jogi adatbázison kívüli célokra is használhatatlanná vált, az újabb Nemzeti Közadatportál Közadatkatasztere pedig nem tartalmaz jogi jellegű adatbázisokra hivatkozást sem. Ha valaki mégis megpróbálkozna azzal, hogy jogi adatbázisokhoz hozzá kíván férni a törvényi keretek szerint, akkor ezt a Nemzeti Közadatportálon keresztül jelezheti az "Adathasznosítás-támogatási szolgáltatás" iránti igény részeként.

Meg lehet próbálkozni persze a közérdekű adatok megismerésére vonatkozó kérelem benyújtásával is, de csak akkor, ha tudjuk, hogy az adott szerv anonimizálja a határozatait vagy egyébként a keresett jogforrások nem tartalmaznak majd személyes adatot.

## A technikai módszer

Érdekesebb, ha ezt a kihívást nem csak jogászként értelmezzük, egy ügyintézési folyamatként, aminek a végén vagy megkapjuk az adatot vagy nem, hanem inkább egy műszaki kérdésként. Ez esetben abból érdemes kiindulni, hogy mely szervek, mit tesznek közzé, és miként tudjuk azokat esetleg műszakilag letölteni.

Nézzünk egy esetleges listát arról, hogy melyek a szóba jöhető, nyilvánosságra hozott döntésekkel vagy más, kifejezetten az ügyvédi-jogtanácsosi munkát támogató jogi tartalmak (az adatok 2026. október körüliek, nem feltétlenül egy napra vonatkoznak). A lista alapvetően a saját érdeklődési körömet tükrözi, tehát nem vizsgáltam különösebben pl. a NAV által közzétett igen nagyszámú adatot, útmutatót, ajánlásokat, űrlap kitöltési útmutatót, vagy az igen értékes közbeszerzési adatokat, sem a beszámolók és cégnyilvántartás részét képező adatokat. Ügyvédi célra ez utóbbiak közül a legértékesebb a cégnyilvántartás részét képező határozat és beadott iratok (kérelmek, mellékletek stb.) nyilvántartása, de ezek esetében 24 óra alatt maximum száz iratot lehet letölteni ([E-betekintés](https://eakta.birosag.hu/e-ceg-betekintes)).

Szintén érdekes a jogi munka számára, de nem térek ki most a közzétett [uniós szintű adatokra](https://language-data-space.ec.europa.eu/index_en).  

### Bírósági Határozatok Gyűjteménye

[Anonimizált határozatok keresője](https://eakta.birosag.hu/anonimizalt-hatarozatok)

222.364 döntés, összesen kb. 12 GB eredeti (letöltési) méretében, 8 GB egyszerű szövegfájlra átalakítva (kereséshez stb.), az OBH által gazdagon biztosított metaadatokkal (rezumé, bíróság, kollégium, jogterület, jogszabályhelyek stb.). Ez "A" magyar jogi aranybánya, és rengeteg olyan információt lehet még belőle kinyerni, amelyeket a standard piaci adatbázis termékek nem nyújtanak. A kézi letöltése kissé hosszadalmas, de nem tiltott a gépi hozzáférés, így ha sok ügyvéd vagy robot úgy dönt, hogy márpedig letölti, akkor könnyen lehet, hogy a hozzáférés feltételei meg fognak változni.

### Gazdasági Versenyhivatal

A Gazdasági Versenyhivatalnak sem kell szégyenkeznie, mert régóta és következetesen, nagy számban közzéteszi a [döntéseit](https://www.gvh.hu/dontesek) a nagyközönség számára. A saját döntései 1997 óta elérhetőek a honlapon, valamint a kapcsolódó bírósági döntések is:

|döntések típusa|darabszám|letöltési méret|átalakított szöveg mérete|
|---|---:|---:|---:|
|Versenyhivatali döntések|7.894|8 GB|260 MB|
|Bírósági döntések|1.400|690 MB|37 MB|

Szánjunk a letöltésére kb. 12 órát.

### Ügyvédi kamarai fegyelmi határozatok

Ezt a legutóbbi bejegyzésben mutattam be, a MÜK a [honlapján](https://net.jogtar.hu/muk-fegyelmi-kereso/gyors) mintegy 1.544 fegyelmi határozatot tett közzé, vegyesen elmarasztaló és megszüntető határozatokat, a html formátumú eredeti szöveggé átalakított teljes mérete összesen csak 30 MB.

### Alkotmánybíróság

Az Alkotmánybíróság a létrejöttétől kezdve meghozott valamennyi határozatát közzéteszi, jelenleg mintegy 13.340 döntést: [kereső](https://alkotmanybirosag.hu/ugykereso/?hatarozat_sorszam=&hatarozat_evszam=&ugyszam_sorszam=&ugyszam_evszam=&dontes_szerv=&befejezo_dontes_tartalma=&rendelkezo_resz=&indoklas=&velemenyek=&alkotmanybiro=&ugyszaki_jelleg=&lezaras_modja=&inditvanyozo_tipusa=&eljaras_tipusa=&ugyallapot=&alkotpanasz_ugyall=&jogszabaly=&lenyeg=&feltetel1=2&feltetel2=2&befejezes_tipusa=)

Ezek teljes (letöltési) mérete 812 MB, érdemes azért vagy 15 órát szánni a letöltésére (persze ha nem kézzel kattintgatunk....) Az átalakított szöveges méret 300 MB.

### Nemzeti Adatvédelmi és Információszabadság Hatóság

Négy eltérő döntéstípust gyűjtöttem be, aminek jelentősége lehet (a 4 db. ajánlás gépi feldolgozásának nem láttam külön értelmét), az egész kevesebb, mint fél óra alatt kényelmesen letölthető:

|döntés típusa|darabszám|letöltési méret|átalakított szöveg mérete|
|---|---:|---:|---:|
|[Adatvédelmi tárgyú határozatok és végzések](https://naih.hu/hatarozatok-vegzesek)|268|94 MB|18 MB|
|[Adatvédelmi állásfoglalások](https://naih.hu/adatvedelmi-allasfoglalasok)|72|15 MB|1 MB|
|[Adatvédelmi tájékoztatók, közlemények](https://naih.hu/dontesek-adatvedelem-tajekoztatok-koezlemenyek)|50|14 MB|0,5 MB|
|[Információszabadság állásfoglalások](https://naih.hu/dontesek-infoszab-allasfoglalasok)|131|25 MB|2 MB|

### Nemzeti Média- és Hírközlési Hatóság

A közzétett tartalom nagy része nem annyira a hírközlési jogászoknak készült, de pl. egy helyről elérhetőek a nyilvános elektronikus hírközlési szolgáltatást nyújtó szolgáltatók általános szerződési feltételei: [ÁSZF](https://hirkszolg.nmhh.hu/kulso/app/index.jsp?v=55), 369 db., eredeti méret 640 MB, szövegesként 140 MB.

[Piacmeghatározási döntésekből](https://nmhh.hu/hirkozles/szabalyozas/piacmeghatarozasi-dontesek) 53 db. van közzétéve, 71/22 MB méretű, míg [elektronikus hirdetésből](https://nmhh.hu/hatosagi-dontesek-elektronikus-hirdetes) 60 db., 10 MB/1 MB méretben.

A legnagyobb számban a Médiatanács döntéseit találhatjuk meg ([Médiatanács döntései](https://nmhh.hu/mediatanacs/dontesek), majdnem négy napig kellett tölteni a 24.787 dokumentumot, 1,5 GB letöltve, de a hasznos (szöveges) tartalom csak 164 MB).

### Nemzeti Kereskedelmi és Fogyasztóvédelmi Hatóság

Az NKFH is közzéteszi a [határozatait](https://nkfh.gov.hu/hatarozatok), 4.667 határozata van 2024-től kezdődően (pár közzétett határozata pedig a metaadatok szerint 2029-ből került valahova ide), és 21 óra alatt lehetett letölteni mintegy 2,9 GB-ot, ami 129 MB lett szöveggé alakítva.

### Szerzői Jogi- és Iparjogvédelmi Szakértő Testület Szakvéleményei

Az SZTNH által felügyelt két szakértői testület véleményei is elérhetőek az [SZTNH oldalán](https://epub.sztnh.gov.hu/e-kutatas/?lang=HU), ebből mindösszesen 833 db. van csak közzétéve, 2000-től kezdődően, kb. 1 óra alatt le lehet tölteni a 137 MB döntést, 14 MB szövegesen.

### Földjogi adásvételi és haszonbérleti szerződések

A közzététel időpontja alatt a NISZ Zrt. közzéteszi a [termőfölddel kapcsolatos adásvételi és haszonbérleti szerződéseket](https://hirdetmenyek.gov.hu/) is, tehát ezek csak kb. egy hathetes időszak alatt érhetőek el. Ebben az időablakban mintegy 6.000 szerződés volt így elérhető, és hetente kb. 1.000 új szerződést töltenek fel.

### Domain.hu (Domain és Regisztrációs Döntnök, ISZT Tanácsadó Testület stb.)

A domain.hu oldalon is mintegy 736 döntés [elérhető](https://www.domain.hu/dontesek-es-allasfoglalasok/), mintegy 42 MB letölthető és 6 MB átalakított szöveges méretben.

### Magyar Nemzeti Bank állásfoglalásai és döntései

Míg a többi közzétett határozat gond nélkül letölthető volt lényegében bármilyen automatizálási módszerrel (vagy csak túl udvarias és lassú letöltési módszert használtam), addig az MNB valamifajta "aktív" védelemmel igyekszik megnehezíteni az állásfoglalásainak és határozatainak robotikus letöltését, azaz az ún. "headless" browsereket igyekszik valamilyen tűzfaluk beazonosítani, és azoknak nem kívánnak választ adni.

Az MNB határozatkereső [oldalán](https://hatarozatkereso.mnb.hu/) valamivel több, mint 81.000 határozat van közzétéve, ezzel nem is nagyon érdemes próbálkozni.

Tekintettel arra azonban, hogy az MNB állásfoglalások jóval érdekesebbek a szakmánk számára, és abból csak 1.928 van jelenleg, azt érdemes lehet a böngészőbe beépített automatizálással (pl. TamperMonkey UserScript) megkísérelni, de így is legalább négy napig el fog tartani. Lásd az állásfoglalás dedikált [keresőoldalán](https://allasfoglalaskereso.mnb.hu/)

## A technikai és a jogszabályi módszer miért nem ér össze?

A technikai megközelítés hátránya, hogy esetleges: nem tudjuk a vizsgálatunkat kibővíteni, és nem látjuk, hogy mely szervnek lehet még esetleg érdekes közzétett határozata, vagy kiket lehetne még rávenni arra, hogy anonimizálják a meglévő határozataikat.

Mindenesetre sajnálatos, hogy Magyarország e téren műszakilag le van maradva a Bizottság által megvalósított közadatnyilvánosságtól. Magyarországon semmelyik jogi forrásnál nincsen egy, a webes felületre kivezetett lehetőség arra, hogy nyilvánosan kérhessék az adatok egyszeri letöltését (dump), noha az itt leírtakhoz hasonló, automatizált, határozatonkénti letöltögetés egy-két héten át az érintett szervek részére nagyobb költséget és megterhelést jelent.

Minden állampolgár és vállalkozás érdeke, hogy a jogszabályok és a nyilvánosságra hozott döntések, hatósági gyakorlatok, és hasonló közadatok minél könnyebben letölthetőek és feldolgozhatóak legyenek. Nem azért, mert ezzel üzleti lehetőségeket nyithatunk vállalkozó szellemű embereknek, hanem azért, mert a mai informatikai környezetben teljesen reális forgatókönyv, hogy minden érdekelt személy saját maga szeretné a közadatokat hasznosítani, nem feltétlenül egy standard kereskedelmi termék által elérhetővé tett formában. Ezt pedig nem segíti, ha a közadatokat nem teszik elérhetővé, azok legfeljebb egy húsz éves felületen kereshetőek, és az informatikai megoldások is csak próba-szerencse alapon fognak működni. Akkor is, ha egyébként a közadatok hasznosítása terén az unió által "mért" mutatók szerint minden [csodásan](https://data.europa.eu/en/open-data-maturity/2025) alakul, és mindenfajta fiktív mutató mindig felfelé tart.

## Mire jó mindez, miért vesződjünk vele?

Mégis mire jó ez az egész, miért érdemes ezzel vesződnie bárkinek? A jól ismert, közhelyszerű mondás, hogy *az adat az új olaj*, ez igaz az ügyvédi munkára is. Ugyanakkor a mérnök-jogászok közötti kommunikáció nem mindig kellően erős ahhoz, hogy a mérnökök, menedzsereik vagy befektetőik maguktól kitalálják, hogy mire is van szüksége pl. az ügyvédi hivatásnak ahhoz, hogy megőrizhesse önállóságát. Ezt a feladatot nem lehet egészében kiszervezni a hivatáson kívülre. Mást lát ugyanabban a jogi adatkészletben egy nyelvész-informatikus, és egy ügyvéd vagy jogtanácsos. Mivel a munkafolyamataink igen képlékenyek, a konkrét feladatokhoz igazodnak, így nehéz a nem gyakorló jogászok számára meglátni a jogi szövegben azt, hogy miként lehetne annak újabb rétegeit feltárni, miként lehetne egy-egy rejtve maradt jellemzőből hatékony segítséget adni a jogász kezébe.

A jogi korpuszok kapcsán nem elég "általában" a szöveget vagy annak bizonyos tipikus metaadatokat keresni, nem elég a metaadatok körét úgy általában bővíteni, gazdagítani, ahogy a szövegben rejlő egyes szabályosságokat sem elegendő absztrakt, nyelvtani szinten kezelni. Ezt az irányt csak a keresést használó hivatás tudja megadni. Míg egy szövegben a "kulcsszavakat" szinte bárki meg tudja találni, addig az "összefoglalás" már egy értékszemléletű művelet: másként foglalná össze egy-egy bírósági ítélet lényegét az, aki a saját igazát vagy a másik fél tévedését keresi benne, másként az, aki jogirodalmi útmutatást vagy egységes bírósági gyakorlatot szeretne ebből faragni.

Ezeket a kérdéseket csak akkor tudjuk megvizsgálni, és megérteni, ha ott van előttünk legalább egy ilyen jogi adatkészlet, letöltve, szövegtisztítva, egyszerű szövegfájllá átalakítva, hogy azt keresni és mutatózni lehessen, és az alapján új szövegeket vagy szövegrétegeket lehessen előállítani.

A következő posztban megnézzük, hogy a kereshetőként rendelkezésre álló szövegeket miként tudjuk gazdagítani, a szövegben való keresési képességeket javítani, pl. az ún. beágyazások (embedding) alkalmazásával, a jogi szövegekben való szemantikus keresési képességek fokozásával.

A letöltésre használt programokat mindenki elő tudja állítani egy nagy nyelvi modell segítségével, de illusztrációként néhányat itt is elérhet az az olvasó, akit ez érdekel: [Homoki Ü. I. GitHub oldal](https://github.com/Homoki-Ugyvedi-Iroda/2026-10-25-legal_datasets_hu)