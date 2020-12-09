# Ring-Verses translations

```
  Three Rings for the Elven-kings under the sky,
  Seven for the Dwarf-lords in their halls of stone,
  Nine for Mortal Men doomed to die,
  One for the Dark Lord on his dark throne

  In the land of Mordor where the Shadows lie.
  One Ring to rule them all, One Ring to find them,
  One Ring to bring them all and in the darkness bind them
  In the land of Mordor where the Shadows lie.
```

The collection of translations started in 2002; it was offline for years
(I sent it to some people, though). The translations were taken from
many sources: printed books, online resources (see below), and several
translations were made by myself.

This project contains the collection and a React-based web UI to see it.

The main page contains an index of the languages, grouped according to
the linguistic classification (language families, groups etc.).
Every translation page contains its author(s), if known, date when it
was added to the collection, and its source(s). Also, some translations
are presented in several variants - in various scripts, for example.

A translation id is a number in the original collection (a couple of
numbers were mistakenly skipped there). 

## Collection history

For all these years, the collection was in a single HTML file (+ some
assets like pictures and fonts); non-ASCII symbols (except for Cyrillic
letters) were mostly encoded there as HTML entities like `&aacute;` for
*á* etc.: when the collection started, the Unicode support was not very
good in the browsers :) Of course, this repo uses Unicode instead.

Along with the collection file, there was a file with history information
(updated manually) - date, counts and sources. When I was putting the
translations to this repository, I represented every collection update
as a single Git commit. These commits contain date in their comments
(not commit dates, though).

This collection organization here is based on this history file items:
there is an "inputs" list, and every item (translation) contains a
reference to one of these inputs. This organzation allows to collect
the `/history` page automatically, based on these inputs and referenced
translations. The layout of the history page is similar to the old
history file mentioned above.

## Credits

The translations were taken from a lot of sources. The main ones:
- [КНИГА - Толкиен и его мир](http://www.kniga2001.narod.ru/tolkien/01pere).
This site was the first large source for the collection
- [*Ivan Derzhansky* page](http://www.math.bas.bg/~iad/ashnazg.html) - not
large but contains some exotic languages like Ancient Egyptian
- [Tolkien Rosetta Stone](http://my.ort.org.il/tolkien/gandalf/html/ring/ring.html)
- [Zbihniew collection](http://zbihniew.krasl.cz/lingua/rings/rings.pdf)
(it also had some different links, they all look dead now, but still can
be opened via web.archive.org)
- some Tolkien-related forums - [АнК](http://www.kulichki.com/tolkien/),
[planet-tolkien](http://www.planet-tolkien.com/board/cat/23/thread/1776/0),
[Elbenwaldforum](http://www.elbenwaldforum.de/showflat.php?Cat=&Number=33183&page=&view=&sb=5&o=),
[eldalie.it](http://eldalie.it/forum/list_thread.php?iddiscussione=4513),
etc. Along with the "official" versions of languages, the latter two
contain many dialects and variants of German and Italian.
- book *Trzysta przekładów dla fanów pod nieba skłonem...* by **Tadeusz
A. Olszański**. This book also includes the most of collections listed
above also - and an older version of my collection too
- [Ring Verse Multilanguage](http://www.slideshare.net/Jonatan7BR/the-ring-verse-multilanguage)

The complete list of sources can be found in
[sources.ts](./src/data/sources.ts). 

### Additional resources

The project uses fonts
- *Assurbanipal* by [Sylvie Vanséveren](https://www.hethport.uni-wuerzburg.de/cuneifont)
- *Braille 1998* by [Philippe Blondel](http://electrolyseur.fr/philing)
- *CuneiformNA* by [Karel Píška](http://www-hep2.fzu.cz/~piska/cuneiform.html)
- *HGNTransliteration* font adapted by Boris Jegorovic, from the original
design of the Crimson Font Family by [Sebastian Kosch](https://www.aldusleaf.org)
- *Morse* font by Furetto Bislacco

To prepare some scripts, these tools were used:
- [Cuniefy](http://oracc.museum.upenn.edu/saao/knpp/cuneiformrevealed/cuneify)
with [online converter](http://cuneifyplus.arch.cam.ac.uk)
- [SVG Cuneify Tool](https://kursoj.pagesperso-orange.fr/cunei) by Marc
Bravant
- [WikiHiero](http://aoineko.free.fr/index.php) by Guillaume Blanchard
