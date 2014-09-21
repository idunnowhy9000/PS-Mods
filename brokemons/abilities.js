function createTypeChanger(id, name, type) {
    return {
        desc: "Turns all of this Pokemon's Normal-typed attacks into " + type + "-type and deal 1.4x damage. Does not affect Hidden Power.",
        shortDesc: "This Pokemon's Normal moves become " + type + "-type and do 1.4x damage.",
        onModifyMove: function(move, pokemon) {
            if (move.type === 'Normal' && move.id !== 'hiddenpower') {
                move.type = type;
                pokemon.addVolatile(id);
            }
        },
        effect: {
            duration: 1,
            onBasePowerPriority: 8,
            onBasePower: function(basePower, pokemon, target, move) {
                return this.chainModify([0x14CD, 0x1000]);
            }
        },
        id: id,
        name: name,
        rating: 3,
        num: -6,
        gen: 6
    };
}
function createAbsorber(id, name, type){
	return {
		desc: "This Pokemon is immune to " + type + " moves. If hit by an " + type + " move, it recovers 25% of its max HP.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by " + type + " moves; " + type + " immunity.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === type) {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]');
				}
				return null;
			}
		},
		id: id,
		name: name,
		rating: 3.5,
		num: -7
	};
}
exports.BattleAbilities = {
    // Adaptability: Powers up STAB moves by 1.8x
    adaptability: {
        inherit: true,
        onModifyMove: function(move) {
            move.stab = 1.8;
        }
    },
    // Aerilate: Turns Normal moves into Flying moves and boosts them by 1.4x
    aerilate: createTypeChanger('aerilate', 'Aerilate', 'Flying'),
    // Aftermath: Takes away 1/3 of the max HP of the attacker landing the finishing hit.
    aftermath: {
        inherit: true,
        onFaint: function(target, source, effect) {
            if (effect && effect.effectType === 'Move' && effect.isContact && source) {
                this.damage(source.maxhp / 3, source, target);
            }
        }
    },
    // Air Lock: Removes all weather
    airlock: {
        inherit: true,
        onStart: function() {
            this.clearWeather();
        },
        onAnyModifyPokemon: function() {},
        onAnyTryWeather: function() {}
    },
    // Amplifate: Turns Normal moves into Electric moves and boosts them by 1.4x
    amplifate: createTypeChanger('amplifate', 'Amplifate', 'Electric'),
    // Analytic: Boosts power of moves when the Pokemon moves last by 1.4x
    analytic: {
        inherit: true,
        onBasePower: function(basePower, attacker, defender, move) {
            if (!this.willMove(defender)) {
                this.debug('Analytic (x1.4) boost');
                return this.chainModify(1.4);
            }
        }
    },
    anticipation: {
        inherit: true,
        onStart: function(pokemon) {
            function toSentence(words) {
                var wordsBeforeLast = words.slice();
                var last = wordsBeforeLast.pop();
                var separator = ', ';
                var lastSeparator = ' and ';
                if (words.length > 2) {
                    lastSeparator = ', and ';
                }
                if (wordsBeforeLast.length !== 0) {
                    return wordsBeforeLast.join(separator) + lastSeparator + last;
                } else {
                    return last;
                }
            }
            var targets = pokemon.side.foe.active;
            for (var i = 0; i < targets.length; i++) {
                if (!targets[i] || targets[i].fainted) continue;
                var moves = [];
                for (var j = 0; j < targets[i].moveset.length; j++) {
                    var move = this.getMove(targets[i].moveset[j].move);
                    if (move.category !== 'Status' && (this.getImmunity(move.type, pokemon) && this.getEffectiveness(move.type, pokemon) > 0 || move.ohko)) {
                        moves.push(move.name);
                    }
                }
                if (moves.length) {
                    this.add('-message', pokemon.name + ' shuddered because of ' + toSentence(moves) + '!');
                }
            }
        }
    },
    // Bad Dreams: Causes all sleeping targets to lose 1/6 of their HP
    // every turn they're asleep
    baddreams: {
        inherit: true,
        onResidual: function(pokemon) {
            if (!pokemon.hp) return;
            for (var i = 0; i < pokemon.side.foe.active.length; i++) {
                var target = pokemon.side.foe.active[i];
                if (!target || !target.hp) continue;
                if (target.status === 'slp') {
                    this.damage(target.maxhp / 6, target);
                }
            }
        }
    },
    // Battle Armor: Prevents critical hits and reduces all taken damage
    // to 11/12ths of its original damage, and Pokemon with this ability
    // are immune to damage from sandstorm
    battlearmor: {
        inherit: true,
        onImmunity: function(type, pokemon) {
            if (type === 'sandstorm') return false;
        },
        onSourceModifyDamage: function(damage, source, target, move) {
            return this.chainModify(11 / 12);
        }
    },
    // Big Pecks: User's Defense cannot be lowered, and in addition,
    // the user gets +1 Defense every time it switches in
    bigpecks: {
        inherit: true,
        onStart: function() {
            this.boost({
                def: 1
            });
        }
    },
    // Burninate: Turns Normal moves into Fire moves and boosts them by 1.4x
    burninate: createTypeChanger('burninate', 'Burninate', 'Fire'),
    // Chlorophyll: User's speed is raised by 1.5x in heavy sunlight
    chlorophyll: {
        inherit: true,
        onModifySpe: function(speMod) {
            if (this.isWeather('sunnyday')) {
                return this.chain(speMod, 1.5);
            }
        }
    },
    // Clear Body: Prevents user's stats from being lowered (either by foe
    // with moves like Growl or by user with moves like Superpower)
    clearbody: {
        inherit: true,
        onBoost: function(boost, target, source, effect) {
            var showMsg = false;
            for (var i in boost) {
                if (boost[i] < 0) {
                    delete boost[i];
                    showMsg = true;
                }
            }
            if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
        }
    },
    // Cloud Nine: Removes all weather
    cloudnine: {
        inherit: true,
        onStart: function() {
            this.clearWeather();
        },
        onAnyModifyPokemon: function() {},
        onAnyTryWeather: function() {}
    },
    // Competitive: This Pokemon's Special Attack is boosted by 1 for
    // each of its stats that is lowered by a foe.
    competitive: {
        inherit: true,
        onAfterEachBoost: function(boost, target, source) {
            if (!source || target.side === source.side) {
                return;
            }
            for (var i in boost) {
                for (var i = 0; i < -boost[i]; i++) {
                    this.boost({
                        spa: 1
                    });
                }
            }
        }
    },
    // Color Change: Makes the users type the same as the first attack the user has.
    colorchange: {
        inherit: true,
        onStart: function(pokemon) {
            var move = pokemon.moveset[0].id;
            var moveType = move === 'hiddenpower' ? pokemon.hpType : this.getMove(move).type;
            if (pokemon.getTypes().join() !== moveType) {
                if (!pokemon.setType(moveType)) return false;
                this.add('-start', pokemon, 'typechange', moveType, '[from] Color Change');
            }
        },
        onAfterMoveSecondary: function() {}
    },
    damp: {
        inherit: true,
        onFoeBasePower: function(basePower, attacker, defender, move) {
            if (this.effectData.target !== defender) return;

            switch (move.type) {
                case 'Water':
                case 'Ice':
                case 'Fire':
                    return this.chainModify(0.5);
                case 'Electric':
                    return this.chainModify(2);
            }
        },
        onAnyTryMove: function() {},
        onAnyDamage: function() {}
    },
    defeatist: {
        inherit: true,
        onSourceFaint: function(target, source, effect) {
            if (effect && effect.effectType === 'Move') {
                this.damage(source.maxhp / 6, source, source);
            }
        },
        onModifyAtk: function() {},
        onModifySpA: function() {}
    },
    defiant: {
        inherit: true,
        onAfterEachBoost: function(boost, target, source) {
            if (!source || target.side === source.side) {
                return;
            }
            for (var i in boost) {
                for (var i = 0; i < -boost[i]; i++) {
                    this.boost({
                        atk: 1
                    });
                }
            }
        }
    },
    draconate: createTypeChanger('draconate', 'Draconate', 'Dragon'),
    environmentalist: {
        id: "environmentalist",
        name: "Environmentalist",
        gen: 6,
        onStart: function(source) {
            this.useMove('grassyterain');
        }
    },
    // Illuminate: Upon entering battle, the opponent’s Speed lowers
    // one stage. Pokémon with the Clear Body or White Smoke ability
    // are unaffected. If both sides switch on the same turn, and
    // first player sends out a Pokémon with Illuminate, the opponent’s
    // Speed will be lowered before the opponent’s Pokémon switches.
    illuminate: {
        inherit: true,
        onStart: function(pokemon) {
            var foeactive = pokemon.side.foe.active;
            for (var i = 0; i < foeactive.length; i++) {
                if (!foeactive[i] || foeactive[i].fainted) continue;
                if (foeactive[i].volatiles['substitute']) {
                    // does it give a message?
                    this.add('-activate', foeactive[i], 'Substitute', 'ability: Illuminate', '[of] ' + pokemon);
                } else {
                    this.add('-ability', pokemon, 'Illuminate', '[of] ' + foeactive[i]);
                    this.boost({
                        spe: -1
                    }, foeactive[i], pokemon);
                }
            }
        }
    },
    // Incubate: User gains 1/8 of its HP in sunshine, but loses 1/8 of
    // its HP in hail, and Fire attacks heal 25% of the Pokémon's HP,
    // but Ice attacks do 25% more damage
    incubate: {
        onTryHit: function(target, source, move) {
            if (target !== source && move.type === 'Fire') {
                if (!this.heal(target.maxhp / 4)) {
                    this.add('-immune', target, '[msg]');
                }
                return null;
            }
        },
        onBasePowerPriority: 7,
        onFoeBasePower: function(basePower, attacker, defender, move) {
            if (this.effectData.target !== defender) return;
            if (move.type === 'Ice') {
                return this.chainModify(1.25);
            }
        },
        onWeather: function(target, source, effect) {
            if (effect.id === 'sunnyday') {
                this.heal(target.maxhp / 8);
            } else if (effect.id === 'hail') {
                this.damage(target.maxhp / 8);
            }
        },
        id: "incubate",
        name: "Incubate"
    },
	// Zen Mode: Changes Darmanitan's form
	zenmode: {
		inherit: true,
		onResidual: null,
		effect: null,
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			if (pokemon.template.speciesid === 'darmanitan'){
				pokemon.formeChange('Darmanitan-Zen');
			}
		}
	},
	// Wonder Guard: Protects against damaging moves that are not super effective and passive damage such as Poison or Hazards.
	// This also includes recoil damage.
	wonderguard: {
		inherit: true,
		onSwitchIn: function (pokemon) {
			this.add('-message', pokemon.name + ' is cloaked in a mystical veil!');
		},
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				return false;
			}
		},
	},
	// White Smoke: Prevents stat drops, including stat drops inflicted by the user.
	whitesmoke: {
		inherit: true,
		onBoost: function (boost, target, source, effect) {
			var showMsg = false;
			for (var i in boost) {
				if (boost[i] < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
		},
	},
	// Warped Mind: Summons Trick Room for 5 turns upon switch-in. Affected by Strange Relic
	warpedmind: {
		id: "warpedmind",
        name: "Warped Mind",
        gen: 6,
        onStart: function(source) {
            this.useMove('trickroom');
        }
	},
	// Water Veil: The user is immune to the burn status. If the user is a Water type, heals 1/16th health each turn.
	waterveil: {
		inherit: true,
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual: function (pokemon) {
			if (pokemon.hasType('Water')) {
				this.heal(pokemon.maxhp / 16);
			}
		},
	},
	// Wonderer: Summons Wonder Room for 5 turns upon switch-in. Affected by Wonderful Stone
	wonderer: {
		id: "wonderer",
        name: "Wonderer",
        gen: 6,
        onStart: function(source) {
            this.useMove('wonderroom');
        }
	},
	// Wonder Skin: Lowers damage of contact attacks by 0.75x and the damage of non-contact attacks by 0.9x
	wonderskin: {
		inherit: true,
		onAccuracyPriority: false,
		onAccuracy: false,
		onModifyAtkPriority: 6,
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.isContact) return this.chainModify(0.75);
			if (!move.isContact) return this.chainModify(0.9);
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
			if (move.isContact) return this.chainModify(0.75);
			if (!move.isContact) return this.chainModify(0.9);
		},
	},
	// Unnerve: Upon entering battle, the opponent’s Special Attack lowers one stage.
	unnerve: {
		inherit: true,
		onFoeEatItem: true,
		onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (foeactive[i].volatiles['substitute']) {
					// does it give a message?
					this.add('-activate', foeactive[i], 'Substitute', 'ability: Unnerve', '[of] ' + pokemon);
				} else {
					this.add('-ability', pokemon, 'Unnerve', '[of] ' + foeactive[i]);
					this.boost({spa: -1}, foeactive[i], pokemon);
				}
			}
		}
	},
	// Tough Claws: Boosts the power of contact moves by 1.3x
	toughclaws: {
		inherit: true,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.isContact) {
				return this.chainModify(1.3);
			}
		}
	},
	// Turboblaze: Fire type moves used by the user are boosted by 1.3x, and can bypass immunities
	turboblaze: {
		inherit: true,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(1.3);
			}
		}
	},
	// Teravolt: Electric type moves used by the user are boosted by 1.3x, and can bypass immunities
	teravolt: {
		inherit: true,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.type === 'Electric') {
				return this.chainModify(1.3);
			}
		}
	},
	// Telepathy: Raises user's Special Attack by one stage every time it gets a KO
	telepathy: {
		inherit: true,
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa:1}, source);
			}
		}
	},
	// Symbiosis: The user heals up to 25% of it’s maximum HP when hit with Grass-type moves
	symbiosis: createAbsorber('symbiosis','Symbiosis','Grass'),
	// Steadfast: User's Speed is raised by one stage every time it flinches, and in addition, whenever it flinches, the damage from the attack is negated
	steadfast: {
		inherit: true,
		onTryHit: function (target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???') return;
			this.debug('Steadfast ' + move.id);
			if (move.secondaries) {
				for (var i = 0; i < move.secondaries) {
					source.boost({spe: 1});
					source.addVolatile('flinch');
					return null;
				}
			}
		},
	},
	// Solar Power: User's Special Attack is raised by 1.5x in heavy sunlight
	solarpower: {
		inherit: true,
		onWeather: false
	},
	// Solar Panel: User's HP is restored by 12.5% at the end of each turn in heavy sunlight
	solarpanel: {
		onWeather: function (target, source, effect) {
			if (effect.id === 'sunnyday') {
				this.heal(target.maxhp / 8);
			}
		},
		id: "solarpanel",
		name: "Solar Panel"
	},
	// Snow Rush: User's Speed is raised by 1.5x in hail, and Pokemon with this ability are immune to damage from hail
	snowrush: {
		onModifySpe: function (speMod, pokemon) {
			if (this.isWeather('hail')) {
				return this.chain(speMod, 1.5);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "snowrush",
		name: "Snow Rush",
	},
	// Snow Cloak: User's Defense is raised by 1.5x in hail, and Pokemon with this ability are immune to damage from hail
	snowcloak: {
		onModifyDef: function (def, pokemon) {
			if (this.isWeather('hail')) {
				return this.chain(def, 1.5);
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "snowcloak",
		name: "Snow Cloak",
	},
	// Shield Dust: User is immune to the negative effects of being burned, poisoned, and paralyzed
	shielddust: {
		inherit: true,
		onTrySecondaryHit: false,
		onDamage: function (damage, target, source, effect) {
			var ignores = {'brn':1,'tox':1,'psn':1};
			if (effect.effectType !== 'Move' && effect.id in ignores) {
				return false;
			}
		},
	},
	// Shed Skin: Has a 50% chance of curing any major status ailment after each turn.
	shedskin: {
		inherit: true,
		onResidual: function (pokemon) {
			if (pokemon.hp && pokemon.status && this.random(2) === 0) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Shed Skin');
				pokemon.cureStatus();
			}
		}
	},
	// Shell Armor: Prevents critical hits and reduces all taken damage to 11/12ths of its original damage,
	// and Pokemon with this ability are immune to damage from hail
	shellarmor: {
		inherit: true,
		// todo add reduce damage
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
	}
}