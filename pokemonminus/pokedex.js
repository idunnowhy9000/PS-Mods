exports.BattlePokedex = {
	// Slate 0
	gengar: {
		inherit: true,
		baseStats: {
			'hp': 80,
			'atk': 95,
			'def': 95,
			'spa': 95,
			'spd': 100,
			'spe': 130,
		},
		abilities: {
			0: 'Infiltrator',
			1: 'Prankster',
		}
	},
	gengarmega: {
		inherit: true,
		baseStats: {
			'hp': 80,
			'atk': 120,
			'def': 110,
			'spa': 180,
			'spd': 115,
			'spe': 140,
		}
	},
	kyogre: {
		inherit: true,
		baseStats: {
			'hp': 130,
			'atk': 100,
			'def': 100,
			'spa': 150,
			'spd': 130,
			'spe': 90,
		},
		types: ['Water', 'Ice']
	},
	mewtwo:{
		inherit: true,
		baseStats: {
			'hp': 116,
			'atk': 120,
			'def': 90,
			'spa': 164,
			'spd': 90,
			'spe': 140,
		}
	},
	mewtwomegax: {
		inherit: true,
		baseStats: {
			'hp': 116,
			'atk': 204,
			'def': 115,
			'spa': 130,
			'spd': 115,
			'spe': 140,
		}
	},
	mewtwomegay: {
		inherit: true,
		baseStats: {
			'hp': 116,
			'atk': 130,
			'def': 90,
			'spa': 204,
			'spd': 120,
			'spe': 160,
		},
		abilities: {
			0: 'Rational'
		}
	},
	// Slate 1
	darkrai: {
		inherit: true,
		baseStats: {
			'hp': 90,
			'atk': 100,
			'def': 90,
			'spa': 145,
			'spd': 90,
			'spe': 125,
		}
	},
	dialga: {
		inherit: true,
		baseStats: {
			'hp': 100,
			'atk': 120,
			'def': 120,
			'spa': 150,
			'spd': 100,
			'spe': 90,
		},
		abilities: {
			0: 'Pressure'
			1: 'Regenerator',
		}
	},
	yveltal: {
		inherit: true,
		baseStats: {
			'hp': 136,
			'atk': 136,
			'def': 100,
			'spa': 136,
			'spd': 100,
			'spe': 109,
		},
	},
	// Slate 2
	// Slate 3
	gothitelle: {
		inherit: true,
		baseStats: {
			'hp': 100,
			'atk': 55,
			'def': 110,
			'spa': 110,
			'spd': 130,
			'spe': 95,
		},
		abilities: {
			0: 'Clairvoyant Body'
			1: 'Competitive',
			'H': 'Shadow Tag'
		},
		types: ["Psychic","Dark"]
	},
	lugia: {
		inherit: true,
		baseStats: {
			'hp': 111,
			'atk': 90,
			'def': 133,
			'spa': 107,
			'spd': 179,
			'spe': 110,
		},
		types: ["Flying","Water"]
	},
	rayquaza: {
		inherit: true,
		baseStats: {
			'hp': 105,
			'atk': 160,
			'def': 90,
			'spa': 160,
			'spd': 90,
			'spe': 115,
		}
	},
	scizor: {
		inherit: true,
		baseStats: {
			'hp': 100,
			'atk': 140,
			'def': 110,
			'spa': 130,
			'spd': 110,
			'spe': 115,
		},
		abilities: {
			0: 'Swarm'
			1: 'Iron Fist',
			'H': 'Light Metal'
		}
	},
	scizormega: {
		inherit: true,
		baseStats: {
			'hp': 100,
			'atk': 165,
			'def': 155,
			'spa': 65,
			'spd': 125,
			'spe': 115,
		},
		abilities: {
			0: 'Tough Claws'
		}
	},
	// Slate 4
	genesect: {
		inherit: true,
		baseStats: {
			'hp': 71,
			'atk': 130,
			'def': 110,
			'spa': 130,
			'spd': 110,
			'spe': 119,
		},
		abilities: {
			0: 'Download',
			1: 'Light Metal',
			'H': 'Mega Launcher'
		}
	},
	sylveon: {
		inherit: true,
		baseStats: {
			'hp': 130,
			'atk': 65,
			'def': 105,
			'spa': 140,
			'spd': 150,
			'spe': 60,
		},
		abilities: {
			0: 'Fairy Aura',
			1: 'Magic Guard',
			'H': 'Pixilate'
		}
	},
	thundurus: {
		inherit: true,
		baseStats: {
			'hp': 99,
			'atk': 115,
			'def': 80,
			'spa': 140,
			'spd': 100,
			'spe': 136,
		},
		abilities: {
			0: 'Competitive',
			1: 'Prankster',
			'H': 'Amplifier'
		}
	},
	thundurustherian: {
		inherit: true,
		baseStats: {
			'hp': 79,
			'atk': 150,
			'def': 95,
			'spa': 145,
			'spd': 80,
			'spe': 121,
		},
		abilities: {
			0: 'Defiant',
			1: 'Generate',
			'H': 'Multiscale'
		}
	},
	wobbuffet: {
		inherit: true,
		baseStats: {
			'hp': 255,
			'atk': 33,
			'def': 63,
			'spa': 33,
			'spd': 63,
			'spe': 93,
		},
		abilities: {
			0: 'Shadow Tag',
			1: 'Natural Cure',
		}
	},
}