# Használati útmutató

## Mappa struktúra
A weboldal Jekyll megoldásra épül, amely egy Ruby nyelven kialakított ún. statikus weboldal (site) generátor (egy Ruby-féle csomag, azaz gem csomag). A GitHub repository-ban történő bármilyen módosítás esetén lefut a jekyll.yml szerinti Jekyll CI workflow, ami újra felépíti (build), majd elérhetővé teszi (deploy) a frissített weboldal tartalmat a módosított fájlok alapján.
- `_i18n`: Ebben vannak a különböző nyelvű alkönyvtárak és fájlok. A különböző nyelvű alkönyvtárakban lévő `_posts` könyvtárba lehet új cikkeket létrehozni. A különböző nyelvű fájlokban (`hu.yml`, `en.yml`) találhatók a változók, ahol a szövegeket lehet lefordítani globálisan az angol kulcsszóval.
- `_includes`: Tartalmazza a `.html` fájlokat, amik megfelelnek az egyes komponenseknek.
- `_layouts`: A sablonokat tartalmazza.
- `_sass`: A `.scss` fájlokat tartalmazza, amik a weboldal stílusát határozzák meg.
- `assets`: Itt tároljuk a JS-eket, fonts-okat, favicon-okat, és képeket.
- `pages`: Oldalak. Ha új oldalt szeretnél létrehozni pl.: Privacy Policy néven, ebben a pages könyvtárban kell létrehozni.

## `_config.yml`

Szerkeszteni lehet bármilyen értéket, ha szeretnél változtatni, kivéve `theme`, `plugins`, `sass`, `exclude` értékét.

## Cikk létrehozása, szerkesztése

Az `_i18n/{{ nyelv }}/_posts` mappában tudod létrehozni a fájlokat `dátum-cikk-neve.md` néven, pl.: `2021-10-12-hello-world.md`, illetve ott is tudod szerkeszteni a szövegeket.

## Képek feltöltése

A pl.: `_i18n/{{ nyelv }}/_posts/2021-10-12-hello-world.md`-ben található az `image` értéke, ami kapcsolódik az `assets/images/` könyvtárban lévő fájlhoz, ahova feltöltheted a képeket vagy módosíthatod.

## Hivatkozások yml-ben:
Lásd [itt](https://mademistakes.com/mastering-jekyll/how-to-link/)
# többnyelvi változók behivatkozása
1) definiáld a változót az en.yml és hu.yml-ben
## csomagok
lásd Gemfile & _config.yml: "jekyll-feed", "jekyll-multiple-languages-plugin", "jekyll-paginate-v2"