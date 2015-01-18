exports.BattleFormats = {
	// Due to the changes in which you can use MissingNo, MissingNo Clause is coded.
	missingnoclause: {
		validateSet: function (set, format) {
			var template = this.getTemplate(set.species),
				ability = set.ability;
			if (template.id !== 'missingno') {
				if (ability.name !== template.abilities['0'] &&
					ability.name !== template.abilities['1'] &&
					ability.name !== template.abilities['H']) {
					return [set.species + " cannot have " + ability.name + "."];
				}
			} else {
				set.ability = "";
			}
		}
	}
}