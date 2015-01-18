exports.BattleFormats = {
	megamania: {
		validateSet: function (set, format, isNonstandard) {
			// validate names
			if (!set.name) return;
			set.name = set.name.replace(/[^\u0000-\u007F]/g, ''); // use only ascii chars for name
		},
	}
}
