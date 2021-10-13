# Használati útmutató

## Mappa struktúra

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
