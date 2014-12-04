Megas For All
================================
Megas for All is a Pet Mod on Smogon's forum's Other Meta's section.
Introduction
--------------------------------
One of the largest changes to the Metagame in Generation 6 was the introduction of Mega Evolutions. Some of these Mega Evolutions served to make less used pokemon more viable such as Mawile and Manectric but most of these Mega Evolutions were given to already OU viable fan favorites such as Tyranitar, Scizor and Garchomp. I feel this is unfair and have decided for the sake of equality to create a metagame in which by holding a mcguffin-like item (probably Abomasite since its easiest to get to on the items list) **every fully evolved pokemon gets a Mega Evolution**. Since I'm not as creative as I would like to think I am I asking you to help me by submitting your own suggestions for new Mega Evolutions. *[(directly from original thread)][1]*

This is one of the mods that this repo has to offer.

DEVELOPMENT STAGE: **ALPHA** (implemented a bit)

**Most of the code used in V2 is cloned from [FireArrow5's repo][2] with his permission.**

  [1]: http://www.smogon.com/forums/threads/3507391/
  [2]: https://github.com/FireArrow5/Megas-For-All
**NOTE**: There are 2 versions, a version by based on acestriker13's thread and one by nightsitter's.
acestriker13's version will not be finished and *probably never will be.*
Installing
--------------------------------
Megas For All installs like most mods in this repo (consult repo's README). However, it requires you to have a custom client and modified server files so, clone Pokémon Showdown's client or download as ZIP file.

Next, copy all the code from ```abilities.js``` and ```pokedex.js``` without the first and last lines to ```Location/data``` respectively, where ```Location``` means the location where Pokémon Showdown's client is. Copy the folder to ```mods/megasforall``` in the Showdown's server folder. Replace Pokémon Showdown Server's ```battle-engine.js```'s ```this.canMegaEvo = ...``` (line ~205) with the first line of mod's ```battle-engine.js```.

Finally put this code in your ```formats.js``` file in the ```config``` folder where Pokémon Showdown's server is located.
```
{
	name: "Megas For All",
	section: "Other Metagames",

	mod: 'megasforall',
	ruleset: ['OU']
},
```
