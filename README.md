Pokémon Showdown Mods
================================
This is a repository for my OM (other metas) implementations. These OMs can be found on [the OMs information kiosk and souvenir stand][1] (idk) Right now only I am developing this.

  [1]: http://www.smogon.com/forums/threads/3505031/

Installing
--------------------------------
You can make or copy a block of metagame code to your ```formats.js``` file in your Pokémon Showdown server's ```config/formats.js``` (for instance, ```~/Downloads/Pokemon-Showdown/formats.js``` or ```C:\Users\Bob\Downloads\Pokemon-Showdown\config\formats.js```)

Here is a standard block of meta code:
```
{
	name: "GAME NAME",
	section: "SECTION",
	gameType: 'GAME TYPE',
	
	team: 'RANDBAT TEAM',
	ruleset: ['RULESET'],
	banlist: ['BANLIST']
},
```
Where:
* ```GAME NAME``` is the metagame's name which will be displayed on the challenge menu.
* ```SECTION``` is the category it is listed under
* ```GAME TYPE``` is the game mode of the metagame (doubles, triples)
* ```RANDBAT TEAM``` is a random team *idk how to explain this* (say if you type in ```random``` is an automatically generated singles team, ```randomDoubles``` is an automatically generated doubles team, ```randomCC``` is a Challenge Cup team.
* ```RULESET``` is the ruleset where the format follows (usually ```Pokemon, Standard, Team Preview```)
* ```BANLIST``` is the banlist from the formats (usually a combination ```Simple + Shell Smash```, a Pokémon ```Xerneas```, or an item ```Soul Dew```)