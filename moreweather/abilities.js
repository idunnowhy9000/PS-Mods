exports.BattleAbilities = {
	"forecast": {
		desc: "This Pokemon's type changes according to the current weather conditions: it becomes Fire-type during Sunny Day, Water-type during Rain Dance, Ice-type during Hail and remains its regular type otherwise.",
		shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",
		onUpdate: function (pokemon) {
			if (pokemon.baseTemplate.species !== 'Castform' || pokemon.transformed) return;
			var forme = null;
			switch (this.effectiveWeather()) {
			case 'sunnyday':
				if (pokemon.template.speciesid !== 'castformsunny') forme = 'Castform-Sunny';
				break;
			case 'raindance':
				if (pokemon.template.speciesid !== 'castformrainy') forme = 'Castform-Rainy';
				break;
			case 'hail':
				if (pokemon.template.speciesid !== 'castformsnowy') forme = 'Castform-Snowy';
				break;
			case 'sandstorm':
				if (pokemon.template.speciesid !== 'castformsandy') forme = 'Castform-Sandy';
				break;
			case 'warzone':
				if (pokemon.template.speciesid !== 'castformgladiator') forme = 'Castform-Gladiator';
				break;
			case 'deltastream':
				if (pokemon.template.speciesid !== 'castformaero') forme = 'Castform-Aero';
				break;
			case 'acidrain':
				if (pokemon.template.speciesid !== 'castformfilthy') forme = 'Castform-Filthy';
				break;
			case 'sinisterfog':
				if (pokemon.template.speciesid !== 'castformominous') forme = 'Castform-Ominous';
				break;
			case 'metalmeteor':
				if (pokemon.template.speciesid !== 'castformiron') forme = 'Castform-Iron';
				break;
			case 'thunderstorm':
				if (pokemon.template.speciesid !== 'castformvolty') forme = 'Castform-Volty';
				break;
			case 'pollenstorm':
				if (pokemon.template.speciesid !== 'castformvine') forme = 'Castform-Vine';
				break;
			case 'blackhole':
				if (pokemon.template.speciesid !== 'castformshadow') forme = 'Castform-Shadow';
				break;
			case 'pixiefog':
				if (pokemon.template.speciesid !== 'castformpixie') forme = 'Castform-Pixie';
				break;
			case 'dragonmeteor':
				if (pokemon.template.speciesid !== 'castformdraco') forme = 'Castform-Draco';
				break;
			default:
				if (pokemon.template.speciesid !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme);
				this.add('-message', pokemon.name + ' transformed! (placeholder)');
			}
		},
		id: "forecast",
		name: "Forecast",
		rating: 4,
		num: 59
	}
};
