# Használati útmutató

## Mappa struktúra

A weboldal Jekyll megoldásra épül, amely egy Ruby nyelven kialakított ún. statikus weboldal (site) generátor (egy Ruby-féle csomag, azaz `gem` csomag). A GitHub repository-ban történő bármilyen módosítás esetén lefut a `jekyll.yml` szerinti Jekyll CI workflow, ami újra felépíti (build), majd elérhetővé teszi (deploy) a frissített weboldal tartalmat a módosított fájlok alapján.

- `_i18n`: Ebben vannak a különböző nyelvű alkönyvtárak és fájlok. A különböző nyelvű alkönyvtárakban lévő `_posts` könyvtárban a cikkeket, illetve `_pages` könyvtárban pedig az oldalakat tartalmazza. A különböző nyelvű fájlokban (`hu.yml`, `en.yml`) találhatók a változók, ahol a szövegeket lefordíthatjuk globálisan az angol kulcsszóval.

- `_includes`: Tartalmazza a `.html` fájlokat, amik megfelelnek az egyes komponenseknek.

- `_layouts`: A sablonokat tartalmazza.

- `_sass`: A `.scss` fájlokat tartalmazza, amik a weboldal stílusát határozzák meg.

- `assets`: Itt tároljuk a JS-eket, fonts-okat, favicon-okat, és képeket.

- `pages`: Az oldalakat tartalmazza. Ha új oldalt létrehozzuk pl.: `privacy-policy.md` néven, ebben a könyvtárban kell létrehozni. Nyelvesítés esetén az `_i18n/{{ nyelv }}/_pages` könyvtárban lévő fájlt tartalmazni kell ebben a `privacy-policy.md` fájlban.

## `_config.yml`

Szerkeszthetünk bármilyen értéket, ha szeretnénk változtatni pl.: `title`, `email` értékét, kivéve `theme`, `plugins`, `sass`, `exclude`.

## Cikkek létrehozása, szerkesztése

Az `_i18n/{{ nyelv }}/_posts` mappában létrehozzuk a fájlokat `dátum-cikk-neve.md` néven, pl.: `2021-10-12-hello-world.md`, illetve ott is szerkeszthetjük a szövegeket.

## Képek feltöltése

A pl.: `_i18n/{{ nyelv }}/_posts/2021-10-12-hello-world.md`-ben található az `image` értéke (pl.: `earth.jpg`), ami kapcsolódik az `assets/images/` könyvtárban lévő fájlhoz, ahova feltölthetjük a képeket vagy módosíthatjuk.

## Hivatkozások yml-ben:

Lássuk [itt](https://mademistakes.com/mastering-jekyll/how-to-link/){:target="\_blank"}.

## Többnyelvi változók behivatkozása

Definiáljuk a változót az `hu.yml` és `en.yml`-ben.

## Csomagok

Lássuk `Gemfile` és `_config.yml`:

- `jekyll-feed`
- `jekyll-multiple-languages-plugin`
- `jekyll-paginate-v2`
