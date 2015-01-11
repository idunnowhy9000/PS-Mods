if (format.banlistTable && format.banlistTable['mergemons']) {
	if (template.num) {
		var templateAfter, templateBefore, templateFE;

		function getByDexNo(num) {
			const firstPoke = "bulbasaur";
			const finalPoke = "volcanion"; // Change this for next gen
			if (num < 1) {
				return tools.getTemplate(finalPoke);
			} else if (num > tools.getTemplate(finalPoke).num) {
				return tools.getTemplate(finalPoke);
			}
			for (var i in tools.data.Pokedex) {
				if (num === tools.data.Pokedex[i].num) {
					return tools.getTemplate(i);
				}
			}
		}

		templateAfter = getByDexNo(template.num++);
		while (templateAfter.baseSpecies === template.baseSpecies && templateAfter.nfe) {
			templateAfter = getByDexNo(templateAfter.num++);
		}
		console.log(templateAfter);

		templateBefore = getByDexNo(template.num--);
		while (templateBefore.baseSpecies === template.baseSpecies && templateBefore.nfe) {
			templateBefore = getByDexNo(templateBefore.num--);
		}

		if (templateAfter.learnset) {
			if (templateAfter.learnset[move]) return false;
		}

		if (templateBefore.learnset) {
			if (templateBefore.learnset[move]) return false;
		}
	}
}