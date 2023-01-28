---
layout: post
title:  A közvetítő szolgáltatók drága új ruhája
date:   2023-01-26 14:00:00 +0200
author: dr. Homoki Péter
image: "misty jungle with a narrow paved way in the middle.jpg"
tags:
  - platformjog
  - intermediary
  - közvetítő
  - P2B
  - DSA
---

# Avagy mire számítsanak a magyar kisvállalkozások?

## Bevezető

Az EU 2022. október 19-én elfogadta a digitális szolgáltatásokról szóló rendeletét (amelyre röviden **DSA**-ként is fogunk hivatkozni),[^1] ezzel tovább bővítette az egyes online tevékenységek ellátására
vonatkozó szabályok körét.

Az előírásainak majd 2024. február 17-étől kell megfelelni, mivel közvetlenül alkalmazható rendelet lesz, hazai átültetés, hazai jogalkotás nem is feltétlenül fog történni. Az új rendelet számos internetes szolgáltató tevékenységét érinteni fogja, olyanokét is, akik nem fogyasztók számára nyújtják csak a szolgáltatásaikat. Érdemes ezért kitérni az új elvárásaira.

Maga a rendelet számos méretfüggő szabályt is tartalmaz, és a jelen cikkben csak azokat a szabályokat fogjuk bemutatni, amelyek a kisvállalkozásokra is irányadóak.
A cikkben nem csak a digitális szolgáltatásokról szóló rendelet új szabályaira térünk ki. Elkerülhetetlen, hogy bemutassuk azt is, hogy mi a különbség a már két és fél éve alkalmazandó P2B (platform-to-business) rendelet (**P2B rendelet**) szabályaihoz képest, hiszen e két szabályozó között igen nagy a tartalmi átfedés.[^2]

Az uniós versenyképesség jegyében tehát a kisvállalkozók tevékenységére irányadó szabályok családja újabb taggal bővült, kiegészítve az eddigi adatvédelmi, szavatossági és elektronikus szerződéskötési, fogyasztóvédelmi, kereskedelmi, adózási, szerzői jogi és IT biztonsági felügyelettel összefüggő szabályok népes sokaságát.

(Emlékeztetőül: kisvállalkozás alatt az uniós jog[^3] az olyan, a beszámoló szerint 50 főnél kevesebb foglalkoztatotti létszámmal rendelkező vállalkozásokat érti, akiknek vagy az éves mérlegfőösszege, vagy az éves nettó árbevétele legfeljebb 10 millió euro -- most nem térve ki a nem önálló vállalkozások miatti bonyolult részekre.)[^4]

## Kik a közvetítő szolgáltatók?

A „**közvetítő szolgáltató**" (intermediary service provider) kifejezést az elektronikus kereskedelmi irányelv[^5] határozta meg (a polgári jogi közvetítő fogalmától teljesen függetlenül). A meghatározás fő célja az elektronikus kereskedelmi irányelv céljainak támogatása volt, nem pedig az, hogy egy dogmatikailag megalapozott fogalmat hozzanak létre. Az irányelv egyik legfőbb célja pedig az volt, hogy az akkor még gyerekcipőben járó internetes kereskedelem felett gyülekező „fellegeket" a korabeli nemzetközi szabályozási szokásoknak megfelelően kezelje. Ehhez az eszköz egy *horizontális mentesülési mechanizmus* volt az egész EU (akkor még Európai Közösség) területén a
különféle internetes szolgáltatók számára. Az irányelv e körben lényegében az Egyesült Államok Communications Decency Act és Digital Millenium Copyright Act (DMCA) szövetségi törvényeinek az Európai Közösségre szabott változata.

A közvetítő fogalom szóhasználata az irányelvben abból áll, hogy egy nagyon tág *információs társadalommal összefüggő szolgáltatás* (information society service, „**ITÖSZ**") fogalomra építve tételesen három, további *szintén nagyon tág szolgáltatási kategóriát határozzon meg* (12-14. cikkek). Ha egy szolgáltató ilyen szolgáltatásnak minősülő szolgáltatást nyújt, azaz közvetítői szolgáltató, akkor a szabályozás ténylegesen jelentősen csökkenteni fogja a jogi kockázatait, és nem csak nemzeti, hanem uniós szinten.

Maga az információs társadalommal összefüggő szolgáltatás lényegében minden, ma e körben szóba jöhető online szolgáltatást lefed (98/34/EK irányelv). Azonban huszonöt évvel ezelőtt fontos volt, hogy az internetes/online típusú, távolról és egyedi igény alapján elektronikusan nyújtott szolgáltatásokat fogalmilag leválassza a korabeli „társszolgáltatásokat", így a fizikai automatákból történő értékesítést és a csomagküldő szolgáltatások adathordozós értékesítéseit, a távközlési és műsorterjesztési szolgáltatásokat, a pénzügyi szolgáltatásokat, sőt, még a telefonon nyújtott ügyvédi szolgáltatásokat is.[^6]

Ezt az ITÖSZ fogalmat egészítette ki eredetileg három további altípus (egyszerű adatátvitel/**mere conduit**, gyorsítótár/**caching** és tárhelyszolgáltatás/**hosting**), és mindhárom típus nagyon sokfajta internetes szolgáltatást lefedett, idővel egyre növekvő körben, mind technikai szinten, mind az üzleti végfelhasználók körében (a cikkben az angol kifejezéseket fogjuk használni).

Érdemes példálózóan felsorolni, hogy a DSA-ban[^7] és előkészítése[^8] során milyen piaci szolgáltatásokat sorolt a jogalkotó egyértelműen az egyes jogi kategóriák alá:

a)  „mere conduit": előfizetői internet hozzáférést biztosító szolgáltatók és (nagykereskedelmi) internet tranzit szolgáltatások és internetes kicserélő központok, wifi hozzáférési pontot szolgáltatók, VPN szolgáltatók, domain név (DNS) kiszolgálók (a DSA óta), top-level domain nyilvántartók és regisztrátorok, sőt, még a hitelesítésszolgáltatók is;[^9]

b)  „caching": caching proxy kiszolgálók, content delivery network (CDN) szolgáltatások;

c)  „hosting": webhoszting, médiamegosztó platformok (fotó, zene, videó, blog), fájlmegosztó alkalmazások, a felhős infrastruktúra- és platform szolgáltatások (IaaS, PaaS); közösségi hálók (beleértve pl. TikTokot is) és fórumok, online piacterek (eBay, Craigslist), többfelhasználós online játékok (Xbox Live, WoW), keresőprogramok, értékelő rendszerek.

Magyarországon már 2001-től törvényi szinten egyértelmű volt, hogy a keresőszolgáltatók is közvetítő szolgáltatónak minősülnek,[^10] míg ezt uniós szinten a luxemburgi bíróság döntése tette egyértelművé.[^11] Ezt követően, 2016. és 2020-ban a hazai közvetítő szolgáltató kifejezés tovább bővült az alkalmazásszolgáltatókkal és a videómegosztóplatform-szolgálatóval is, de ebből egyedül az alkalmazásszolgáltató kifejezés lóg ki ma az uniós közvetítő szolgáltatói terminológia alól.

## Az online platform szolgáltatók új fogalma

Az Európai Unió 2022. november 16-ától bevezetett egy új kifejezést is, miszerint a közvetítők egyik típusa az „**online platform**" (3. cikk):
„*olyan tárhelyszolgáltatás, amely a szolgáltatás igénybe vevőjének kérésére információkat tárol és nyilvánosan terjeszt ...*", példaként pedig a „*közösségi hálózatokat vagy a fogyasztók számára a kereskedőkkel távollévők között kötött szerződések létrehozását lehetővé tévő online platformokat*" hozza fel. Az online platform eddig is a hosting altípusú közvetítő szolgáltatók közé tartozott, csak a DSA révén jelentős újabb kötelezettségek fogják terhelni e kategóriát.

Nem szabad elfelejteni, hogy az online platform esetén is maga a szolgáltatás információ tárolása *[és terjesztése]{.ul}* *az* *egyik felhasználó kérésére*. Tehát ha egy online szolgáltató saját maga illusztrációkat tesz elérhetővé (amelyeket nem a felhasználóitól gyűjti be), attól még nem lesz tárhelyszolgáltatás és online platform szolgáltatás, mert a szolgáltatása lényege itt a saját szolgáltatásának elérhetővé tétele, nem az információ tárolása és terjesztése egy felhasználó kérésére. Ha ugyanez a szolgáltató ezeket az illusztrációkat már a felhasználóitól gyűjti be, és azokat teszi elérhetővé, akkor már online platform szolgáltató lesz (akkor is, ha effektíve többfajta eltérő típusú felhasználói kategóriája lesz, pl. egy illusztrátoroknak szóló aloldal és egy letöltőknek szóló aloldal).

A definícióban nem szerepel, de az online platformok lényegi eleme az, hogy két, egymástól független felhasználó közötti interakciót segítik elő, azaz legalább kétrétegű a szolgáltatás: a platform szolgáltatásra mindig épül egy másik szintű interakció is -- akár az, hogy közösségi hálóként a felhasználók (fogyasztók) egymás közötti, nem profitorientált kommunikációt folytatnak az általuk a platformon közzétett információk útján (terjesztenek), vagy akár az, hogy ezeknek a platform használóknak lehetővé teszik, hogy üzleti szolgáltatásokat nyújtsanak további végfelhasználók számára, pl. online piactereket működtetnek. A téma alaposabb megismerésére törekvő kollégák számára mindenképpen javasolom Ződi Zsolt alapos történeti elemzését is elolvasni.[^12]

Kiemelendő még, hogy az online platform rendeletbeli fogalmát túl tágan is lehet értelmezni, alapvetően olyan hosting szolgáltatást is e fogalmi kör alá lehet vonni, aminél nem indokolt a platform jelleg sajátosságaiból fakadó szabályokat alkalmazni. E körben azokra a felhőszolgáltatásokra kell gondolni, amelyek célja bizonyos platform vagy infrastruktúra biztosítása a végfelhasználók számára. A rendelet (13) preambulum bekezdése is erre utal: „... *az infrastruktúraként -- például egy internetalapú alkalmazás, webhely vagy online platform mögöttes infrastrukturális tárhelyeként -- funkcionáló felhőszolgáltatások és webtárhely-szolgáltatások önmagukban nem tekintendők olyan szolgáltatásoknak, amelyek egy ... igénybe vevőjének kérésére tárolt vagy feldolgozott információkat nyilvánosan terjesztenek.*"

![](assets/images/original/kozvetito_mermaid-diagram-20230123182409.svg){width="6.3in" height="4.6625in"}

## A minden kisvállalkozó közvetítő szolgáltatóra irányadó szabályokról

Az elektronikus kereskedelmi irányelv a közvetítő szolgáltatókra csak egészen kevés kötelezettséget írt elő. Alapvetően a *felelősségi szabályok keretében* csak a caching és hosting szolgáltatók esetén mondta ki, hogy mit kell tenniük, ha tudomást szerez valami jogsértő információról.[^13] Ezek a felelősségi szabályok pedig csak minimálisan változtak (lásd lentebb), és az általános monitorozási kötelezettség hiánya is fennmaradt.

Az elektronikus kereskedelmi irányelv két, egyszerűen teljesíthető kötelezettsége (az általános adatszolgáltatás kötelezettségét és a kereskedelmi tájékoztatás egyedi szabályai) változatlanul hatályban maradnak a közvetítő szolgáltatókra is (ezek betartását az irányelv azonban nem a közvetítő szolgáltatókra, hanem minden, információs társadalommal összefüggő szolgáltatás nyújtójára írja elő).

Jelentősen bővült azonban annak a feltételrendszere, hogy jogellenes tartalommal kapcsolatosan milyen kötelezettség terheli az online szolgáltatókat. Mindegyik közvetítő szolgáltató esetén egyértelmű elvárás lett, hogy akár a más tagállamokból -- a nemzeti koordinátorokon keresztül -- érkezett bírósági vagy hatósági megkereséseknek is sürgősen eleget kell tenniük, legyen szó letiltásokról vagy adatszolgáltatásokról.[^14]

Ez már önmagában is jelentős erőforrást fog lekötni a szolgáltatóknál -- beleértve azt is, ha a megkeresés teljesítése előtt meg kívánnák vizsgálni, hogy az adott hatóság a kért adatra vagy letiltásra vajon jogosult-e.

Az elektronikus kereskedelmi irányelv általános adatszolgáltatási kötelezettsége kibővül azzal, hogy a közvetítő szolgáltatóknak külön kapcsolattartási pontot kell fenntartaniuk és közzétenniük a hatósági és a felhasználói kapcsolattartási célokra is. Ráadásul nem elegendő, ha ez a megadott kapcsolattartási pont kizárólag automatizált eszköz lesz, pl. egy csevegőrobot.[^15]

Várhatóan jelentősen felforgatja minden közvetítő szolgáltató működését az, hogy a felhasználók védelme érdekében a DSA is saját előírásokat fogalmazott meg a szerződési feltételeik tartalmával kapcsolatosan. Az
új elvárások általános jelleggel a felhasználás korlátozásával kapcsolatos információk közzétételére vonatkoznak (beleértve az esetleges moderálást, automata döntéshozatalt, illetve a panaszkezelést), de megtalálhatjuk az egyoldalú módosításról való értesítés kötelezettségét is. A 7. pontban látni fogjuk, hogy üzleti platformok esetén még ennél is részletesebb kötelezettségek irányadóak.

## A hosting szolgáltatók kötelezettségei

Még a legkisebb hosting szolgáltatókat is számos új kötelezettség fogja terhelni.

A kötelezettségek első csoportja a jogsértőnek vélt tartalommal kapcsolatos eljárást részletezik, a bejelentések megtételének módjával és a kivizsgálás folyamatának áttekinthetőbbé tételével kapcsolatosak. Mivel a bejelentések fogadásával kapcsolatos kötelezettség nagyon sok szolgáltatóra vonatkoznak, és részletes technikai feltételeket is előír a rendelet, a gyakorlatban várhatóan e téren is kialakul majd valami egységesített bejelentési felület, szolgáltatás, hasonlóan pl. a cookie-elfogadási mechanizmusokhoz.[^16]

Az átláthatóság biztosítása részeként kifejezetten jelezniük kell a hosting szolgáltatóknak, ha a bejelentések elbírálását bármilyen módon automatizálják -- azaz ez nem csak az automatizált döntéshozatal esetén irányadó kötelezettség, hanem az automatizált feldolgozás bármilyen formájáról tájékoztatást kell adni. A bejelentések elbírálására konkrét határidőt azonban a rendelet nem ír elő.

Szintén a felhasználók védelmét és a szolgáltatói döntések áttekinthetőségét biztosítja az az elvárás, hogy az egyes felhasználások korlátozásáról kötelező lesz indokolt értesítést (tájékoztatást) adni a felhasználók számára.[^17] Az indokolás szabályait viszonylag részletesen leírja a rendelet, remélve, hogy ez korlátot szab a szolgáltatók szűkszavú, adott esetben a felhasználókat érzékenyen érintő döntéseinek.

Végül a rendelet a hosting szolgáltatókra feljelentési (bejelentési) kötelezettséget telepít arra az esetre, ha olyan információ birtokába jutott, ami valaki „életét vagy biztonságát fenyegető bűncselekmény" elkövetésére utal.[^18]

Láthatjuk, hogy ha egy közvetítő szolgáltató e kötelezettségek mindegyikének eleget kíván tenni, az nem elhanyagolható költségeket fog jelenteni a számára -- annak ellenére, hogy az uniós hatásvizsgálat ezt elenyésző költségnek találta.[^19]

## Az online platform szolgáltatók kötelezettségei

Kisvállalkozások esetében a kifejezetten online platformra vonatkozó kötelezettségek köre minimális lesz, hiszen a rendelkezések többsége alól felmentést ad a DSA.[^20]

Tehát az online platformok esetén a kötelezettségek nagyobb része azonos a hosting szolgáltatókra irányadó kötelezettségekre, két további kiegészítéssel.

Az egyik kiegészítés az online platform szolgáltatók körén belüli, az online piacterek kategóriájára vonatkozik: nem mentesülhet a szolgáltató a közvetítői mentesülés szerint, ha egy átlagos fogyasztó számára úgy tűnhetett, hogy az adott megrendelést a piactér saját maga vagy egy általa irányított szereplő teljesítette.[^21] Az online platform szolgáltatók általában érdekeltek az eltérő kategóriájú felhasználóik közötti erőviszonyok átformálására, saját előnyükre fordítására. Például ha egy helyi szolgáltatási piacon a vevő elégedett a szolgáltató szolgáltatásával (pl. egy ügyes villanyszerelővel). Az adott helyi szolgáltatásokhoz való hozzáférést uraló platform azonban nem feltétlenül érdekelt abban, hogy a vevő legközelebb már közvetlenül ezt a szolgáltatót hívja, akár csak a részesedése elmaradása miatt, ezért előfordul, hogy a platform a szolgáltatását úgy alakítják ki, hogy a tényleges szolgáltató jelentőségét, beazonosíthatóságát minimalizálják a vásárlók számára. Ez a szabály éppen ezen „diszruptív" törekvésnek kíván gátat szabni (bár inkább termékek, mint a példa szerinti szolgáltatások esetén).

A másik kiegészítés egy adatszolgáltatási kötelezettség, ahol -- a későbbi jogi aktusokkal meghatározott módszertan szerint -- a tagállami koordinátor kérésére a hathavi átlagos felhasználószámukat meg kell majd adniuk.[^22]

## Az „online közvetítő szolgáltatás": a B2B platformok kevésbé ismert egyedi szabályai

A témánk szempontjából fontos még a kevéssé ismert „**online közvetítő szolgáltatás**" megismerése is.[^23] Az online közvetítő szolgáltatás a gyakorlatban szükségszerűen a DSA szerinti közvetítő szolgáltatás (ezen belül online platform) is lesz egyben, a fogalom meghatározása ettől mégis független. Ennek oka, hogy a fogalom a digitális szolgáltatási rendeletet jóval megelőzően jött létre. Valami furcsa okból a Bizottság nem igyekezett összhangba hozni a két szabályozás szóhasználatát, csak a DSA tervezetében utaltak arra, hogy a P2B rendeletet „lex specialisként" kell tekinteni.[^24]

Az online közvetítő szolgáltatás fogalma és a P2B rendelet az üzleti „továbbfelhasználás" céljára készült platformokkal összefüggő félelmek megnyugtatására lett kiadva. Tehát csak az üzleti felhasználókat célzó szolgáltatások tartoznak ide, ahol a „platform szolgáltatás" maga az üzleti felhasználók és fogyasztók közötti ügyletek elősegítését szolgálja.[^25]

Tehát a P2B rendelet a fogyasztói jellegű platformokra nem irányadó (tipikusan a közösségi hálókra, TikTok stb.), míg a DSA online platform kifejezése ezeket a fogyasztók közötti platformokat is lefedi.

A P2B rendelet a digitális szolgáltatási rendelethez képest ugyan szűkebb körre vonatkozik, de annál részletesebb és szigorúbb szabályokat tartalmaz. Nehéz a rendelet érvényesülését észrevenni, noha már 2020. július óta alkalmazandó. Néhány nagyobb platform szolgáltató esetén megtalálhatjuk már a nyomát az új szabályozásnak, de néhány esetében még nem.[^26] Olaszországban az illetékes hatóság nyilvános konzultációt követően már egy alkalmazási útmutatót is közzétett,[^27] de más országokban (pl. Magyarország) azt sem lehet tudni, hogy mely hatóság jár el majd e tárgyban. A 27 tagállamból eddig csak három vette a fáradságot arra, hogy az üzleti felhasználók érdekeit képviselő hatóságot vagy szervezetet jelöljön ki a P2B rendelet szerint. A Bizottságnak is több, mint egy éve már meg kellett volna küldenie a jelentését a Parlamentnek a P2B rendelet alkalmazásának tapasztalatairól -- a jelentés tervezete a közbeszerzések tanúsága szerint már elkészült ugyan, de még nem nyilvános.[^28]

Tekintsük át röviden, hogy miben térnek el a P2B rendelet kötelezettségei a DSA kötelezettségeihez képest.

A DSA szerződési feltételekkel kapcsolatos általános kötelezettségeihez képest a P2B rendelet részletesebb kötelezettségeket ír elő. Így többek között nem elég a feltételek (egyoldalú) módosításáról tájékoztatni a felhasználókat, de a módosítás határidejére is előír egy minimum időtartamot. Szűk kivételeken kívül a módosítás időtartamának lehetővé kell tennie, hogy az üzleti felhasználó a közölt változáshoz igazodjon (de 15 napnál nem lehet rövidebb). A feltételeknek tájékoztatást kell még adniuk arról is, hogy a platform használata miként érinti az üzleti felhasználók szellemi tulajdonnal kapcsolatos jogát, illetve hogy milyen további csatornákon értékesít a platform szolgáltató a saját felhasználója által is kínált termékeket.[^29]

A szolgáltatás korlátozásával kapcsolatos feltételek is jóval szigorúbbak. Míg a DSA esetén csak a hosting szolgáltatókra irányadó általános korlátozási feltételek terhelik a kisvállalkozó szolgáltatásokat (lásd az 5. pontban), és a visszaélésszerű felhasználások korlátozásával kapcsolatos kapcsolatos részletesebb szabályok alól[^30] mentesülnek, addig a P2B rendelet esetén a kisvállalkozások sem kapnak ilyen könnyítést. A szerződési feltételeikben részletesen rendelkezniük kell arról, hogy miként járnak el nyilvánvalóan jogsértő tartalom esetén, a korlátozásról tartós adathordozón kell értesíteniük a felhasználójukat legkésőbb a korlátozással egyidejűleg, és lehetővé kell tenniük, hogy a felhasználóik panasz útján tisztázhassák magukat.[^31] A felfüggesztéstől függetlenül a szolgáltatásnyújtás felmondásának határideje nem lehet rövidebb, mint 30 nap. 

Az online keresőszolgáltatók és az online platform szolgáltatók egyaránt kötelesek a P2B rendelet alapján közzétenni a felhasználóikkal kapcsolatosan alkalmazott rangsorolásuk magyarázatát,[^32] ez alól szintén nem mentesülnek a kisvállalkozások sem (míg a DSA-ban igen).[^33]

Végül csak a P2B rendelet alapján kötelesek a kisvállalkozások a szerződési feltételeikben arról tájékoztatást adniuk a felhasználóiknak, hogy miként férhetnek hozzá a szolgáltatások során bevitt vagy keletkezett adataikhoz.[^34]

## Összefoglaló

Tekintettel arra, hogy a P2B rendelet és a DSA rendelet még hazai szinten is jelentős számú szolgáltatót fog érinteni, indokolt volna e két uniós jogi aktus tárgyában a minél intenzívebb ismeretterjesztés. A P2B rendelet tényleges alkalmazása sok országban, így Magyarországon is várat még magára, annak ellenére, hogy az alkalmazás megkezdésének határideje már két és fél éve lejárt. Valószínűleg a jogosultak nem is tudnak arról, hogy e téren jogaikat nem tartják be, a szükséges információkat nem teszik közzé, a tagállamok és hatóságok pedig kevés kivétellel nem segítenek ezek a helyzeten. 

Ahogy közeledik a 2024. február 17-i időpont, egyre valószínűbb, hogy e két rendelet hatása együtt fog csak tudatosulni a felhasználók és a szolgáltatók körében is. Minél később kezdenek el azonban felkészülni ezekre a nem elhanyagolható költségű változásokra a kisvállalkozások, annál drágább lesz a megfelelés költsége, annál kevesebb lehetőség lesz a koordinált, költséghatékony informatikai és jogi megoldások alkalmazására.

(Utoljára frissítve 2023. január 28-án)

[^1]: AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2022/2065 RENDELETE (2022. október 19.) a digitális szolgáltatások egységes piacáról és a 2000/31/EK irányelv módosításáról (digitális szolgáltatásokról szóló rendelet), <https://eur-lex.europa.eu/eli/reg/2022/2065>.

[^2]: Az Európai Parlament és a Tanács (EU) 2019/1150 rendelete (2019. június 20.) az online közvetítő szolgáltatások üzleti felhasználói tekintetében alkalmazandó tisztességes és átlátható feltételek előmozdításáról (P2B rendelet), <https://eur-lex.europa.eu/eli/reg/2019/1150/oj>.

[^3]: A Bizottság 2003. május 6-i ajánlása a mikro-, kis- és középvállalkozások meghatározásával kapcsolatosan, <http://data.europa.eu/eli/reco/2003/361/oj>, magyarul lásd a 2004. évi XXXIV. törvényt a kis- és középvállalkozásokról, fejlődésük támogatásáról.

[^4]: A DSA szerinti mentesülések a középvállalkozásokra nem vonatkoznak.

[^5]: Az Európai Parlament és a Tanács 2000/31/EK irányelve (2000. június 8.) a belső piacon az információs társadalommal összefüggő szolgáltatások, különösen az elektronikus kereskedelem egyes jogi vonatkozásairól).

[^6]: Lásd az Európai Parlament és a Tanács 98/34/EK irányelve (1998. június 22.) a műszaki szabványok és szabályok terén történő információszolgáltatási eljárás megállapításáról (a 98/48/EK irányelvvel való módosítás utáni állapot) V-VI. mellékletét.

[^7]: DSA (28)-(29) preambulum bekezdések.

[^8]: Lásd SWD(2020) 348 final Commission Staff Working Document: Impact Assessment Report Accompanying the document PROPOSAL FOR A REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on a Single Market For Digital Services (Digital Services Act) and amending Directive 2000/31/EC, 2020. 12. 15., <https://eur-lex.europa.eu/resource.html?uri=cellar:5ebd61c9-3f82-11eb-b27b-01aa75ed71a1.0001.02/DOC_2&format=PDF> és Sebastian Felix Schwemer, Tobias Mahler és Håkon Styri, 'Legal     Analysis of the Intermediary Service Providers of Non-Hosting Nature' (1 July 2020) <https://papers.ssrn.com/abstract=3798494>, hozzáférés 2023. januá 21-én.

[^9]: DSA (29) preambulumbekezdés

[^10]: 2001\. évi CVIII. törvény 2. § l) pont.

[^11]: Az Európai Unió Bíróságának a C-236/08-C-238/08, Google France and Google v. Vuitton egyesített ügyekben hozott 2006. december 12-i ítélete, ECLI:EU:C:2010:159.

[^12]: Ződi Zsolt, 'Characteristics of the European Platform Regulation: Platform Law and User Protection' (2022) 7 Public Governance, Administration and Finances Law Review, 91. oldal <https://folyoirat.ludovika.hu/index.php/pgaf/article/view/6319>, hozzáférés 2023. január 17-én.

[^13]: 13\. cikk (1) e), 14. cikk (1) és (2) bekezdése, 15. cikk.

[^14]: 9-10. cikk.

[^15]: \(43\) preambulumbekezdés és a 12. cikk (1) bekezdés.

[^16]: 16\. cikk

[^17]: 17\. cikk

[^18]: 18\. cikk

[^19]: SWD(2018) 138 final COMMISSION STAFF WORKING DOCUMENT IMPACT ASSESSMENT Accompanying the document Proposal for a Regulation of the European Parliament and of the Council on promoting fairness and transparency for business users of online intermediation services, 6.2. pont, <https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52018SC0138>.

[^20]: 19\. és 29. cikk.

[^21]: 6\. cikk (3) bekezdés.

[^22]: 24\. cikk (4) bekezdés.

[^23]: A P2B rendelet szerinti fogalom \"online intermediation service\", míg az elektronikus kereskedelmi irányelv és a DSA szerinti fogalom az intermedi[ary]{.ul} service. Az első magyarul online közvetítő szolgáltató, a második közvetítő szolgáltató -- noha az elektronikus kereskedelmi irányelv és a DSA szerint minden közvetítő szolgáltató szükségeszerűen online is egyben, és a P2B rendelet az online intermediation service fogalmát az ITÖSZ-re építi, nem az elektronikus kereskedelmi irányelv szerinti \"intermediary service\" fogalmára.

[^24]: COM(2020) 825 final, Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on a Single Market For Digital Services (Digital Services Act) and amending Directive 2000/31/EC, 5. oldal, <https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52020PC0825>

[^25]: Ugyanott 2. cikk 2. pont.

[^26]: Pl. az airbnb, booking, Shopify esetén találtunk ilyen, a P2B rendeletből következő rendelkezéseket, de pl. az eBay és Amazon webáruház esetén nem.

[^27]: [Delibera N. 406/22/CONS](https://www.agcom.it/documents/10179/28582788/Delibera+406-22-CONS/f6730d70-2f7c-4899-834f-98a5ba4b8bc6?version=1.1)v Linee guida per l'adeguata ed efficace applicazione del Regolamento (UE) 2019/1150 e instituzione tavolo tecnico.

[^28]: Lásd \‘Study on “Evaluation of the Regulation (EU) 2019/1150 on Promoting Fairness and Transparency for Business Users of Online Intermediation Services (the P2B Regulation)\”\’ <https://ppmi.lt/study-on-evaluation-review-p2b-regulation-20191150-248>, hozzáférés 2023. január 28-án

[^29]: P2B rendelet 3. és 8. cikk

[^30]: DSA 23. cikk

[^31]: P2B rendelet 4. cikk

[^32]: Lásd erről a Bizottság közleményét: Iránymutatás a rangsorolási átláthatóságról az (EU) 2019/1150 európai parlamenti és tanácsi rendeletnek megfelelően, <https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:52020XC1208(01)>

[^33]: P2B rendelet 5. cikk és DSA 27. cikk

[^34]: P2B rendelet 9. cikk
