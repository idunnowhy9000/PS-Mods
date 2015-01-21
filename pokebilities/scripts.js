exports.BattleScripts = {
	getRelevantEffectsInner: function (thing, callbackType, foeCallbackType, foeThing, bubbleUp, bubbleDown, getAll) {
		if (!callbackType || !thing) return [];
		var statuses = [];
		var status;

		if (thing.sides) {
			for (var i in this.pseudoWeather) {
				status = this.getPseudoWeather(i);
				if (status[callbackType] !== undefined || (getAll && thing.pseudoWeather[i][getAll])) {
					statuses.push({status: status, callback: status[callbackType], statusData: this.pseudoWeather[i], end: this.removePseudoWeather, thing: thing});
					this.resolveLastPriority(statuses, callbackType);
				}
			}
			status = this.getWeather();
			if (status[callbackType] !== undefined || (getAll && thing.weatherData[getAll])) {
				statuses.push({status: status, callback: status[callbackType], statusData: this.weatherData, end: this.clearWeather, thing: thing, priority: status[callbackType + 'Priority'] || 0});
				this.resolveLastPriority(statuses, callbackType);
			}
			status = this.getTerrain();
			if (status[callbackType] !== undefined || (getAll && thing.terrainData[getAll])) {
				statuses.push({status: status, callback: status[callbackType], statusData: this.terrainData, end: this.clearTerrain, thing: thing, priority: status[callbackType + 'Priority'] || 0});
				this.resolveLastPriority(statuses, callbackType);
			}
			status = this.getFormat();
			if (status[callbackType] !== undefined || (getAll && thing.formatData[getAll])) {
				statuses.push({status: status, callback: status[callbackType], statusData: this.formatData, end: function (){}, thing: thing, priority: status[callbackType + 'Priority'] || 0});
				this.resolveLastPriority(statuses, callbackType);
			}
			if (bubbleDown) {
				statuses = statuses.concat(this.getRelevantEffectsInner(this.p1, callbackType, null, null, false, true, getAll));
				statuses = statuses.concat(this.getRelevantEffectsInner(this.p2, callbackType, null, null, false, true, getAll));
			}
			return statuses;
		}

		if (thing.pokemon) {
			for (var i in thing.sideConditions) {
				status = thing.getSideCondition(i);
				if (status[callbackType] !== undefined || (getAll && thing.sideConditions[i][getAll])) {
					statuses.push({status: status, callback: status[callbackType], statusData: thing.sideConditions[i], end: thing.removeSideCondition, thing: thing});
					this.resolveLastPriority(statuses, callbackType);
				}
			}
			if (foeCallbackType) {
				statuses = statuses.concat(this.getRelevantEffectsInner(thing.foe, foeCallbackType, null, null, false, false, getAll));
			}
			if (bubbleUp) {
				statuses = statuses.concat(this.getRelevantEffectsInner(this, callbackType, null, null, true, false, getAll));
			}
			if (bubbleDown) {
				for (var i = 0;i < thing.active.length;i++) {
					statuses = statuses.concat(this.getRelevantEffectsInner(thing.active[i], callbackType, null, null, false, true, getAll));
				}
			}
			return statuses;
		}

		if (!thing.getStatus) {
			this.debug(JSON.stringify(thing));
			return statuses;
		}
		var status = thing.getStatus();
		if (status[callbackType] !== undefined || (getAll && thing.statusData[getAll])) {
			statuses.push({status: status, callback: status[callbackType], statusData: thing.statusData, end: thing.clearStatus, thing: thing});
			this.resolveLastPriority(statuses, callbackType);
		}
		for (var i in thing.volatiles) {
			status = thing.getVolatile(i);
			if (status[callbackType] !== undefined || (getAll && thing.volatiles[i][getAll])) {
				statuses.push({status: status, callback: status[callbackType], statusData: thing.volatiles[i], end: thing.removeVolatile, thing: thing});
				this.resolveLastPriority(statuses, callbackType);
			}
		}
		var template = this.getTemplate(thing.species);
		var l = 0;
		for (var i in thing.abilities){
			status = this.getAbility(toId(thing.abilities[i]));
			var bannedAbilities = {moody:1};
			if (status.id in bannedAbilities){
				continue;
			}
			//console.log(status);
			if (status[callbackType] !== undefined || (getAll && thing.abilityData[getAll])) {
				statuses.push({status: status, callback: status[callbackType], statusData: i, end: null, thing: thing, slot: l++});
				this.resolveLastPriority(statuses, callbackType);
			}
		}
		status = thing.getItem();
		if (status[callbackType] !== undefined || (getAll && thing.itemData[getAll])) {
			statuses.push({status: status, callback: status[callbackType], statusData: thing.itemData, end: thing.clearItem, thing: thing});
			this.resolveLastPriority(statuses, callbackType);
		}
		status = this.getEffect(thing.template.baseSpecies);
		if (status[callbackType] !== undefined) {
			statuses.push({status: status, callback: status[callbackType], statusData: thing.speciesData, end: function (){}, thing: thing});
			this.resolveLastPriority(statuses, callbackType);
		}

		if (foeThing && foeCallbackType && foeCallbackType.substr(0, 8) !== 'onSource') {
			statuses = statuses.concat(this.getRelevantEffectsInner(foeThing, foeCallbackType, null, null, false, false, getAll));
		} else if (foeCallbackType) {
			var foeActive = thing.side.foe.active;
			var allyActive = thing.side.active;
			var eventName = '';
			if (foeCallbackType.substr(0, 8) === 'onSource') {
				eventName = foeCallbackType.substr(8);
				if (foeThing) {
					statuses = statuses.concat(this.getRelevantEffectsInner(foeThing, foeCallbackType, null, null, false, false, getAll));
				}
				foeCallbackType = 'onFoe' + eventName;
				foeThing = null;
			}
			if (foeCallbackType.substr(0, 5) === 'onFoe') {
				eventName = foeCallbackType.substr(5);
				for (var i = 0; i < allyActive.length; i++) {
					if (!allyActive[i] || allyActive[i].fainted) continue;
					statuses = statuses.concat(this.getRelevantEffectsInner(allyActive[i], 'onAlly' + eventName, null, null, false, false, getAll));
					statuses = statuses.concat(this.getRelevantEffectsInner(allyActive[i], 'onAny' + eventName, null, null, false, false, getAll));
				}
				for (var i = 0; i < foeActive.length; i++) {
					if (!foeActive[i] || foeActive[i].fainted) continue;
					statuses = statuses.concat(this.getRelevantEffectsInner(foeActive[i], 'onAny' + eventName, null, null, false, false, getAll));
				}
			}
			for (var i = 0; i < foeActive.length; i++) {
				if (!foeActive[i] || foeActive[i].fainted) continue;
				statuses = statuses.concat(this.getRelevantEffectsInner(foeActive[i], foeCallbackType, null, null, false, false, getAll));
			}
		}
		if (bubbleUp) {
			statuses = statuses.concat(this.getRelevantEffectsInner(thing.side, callbackType, foeCallbackType, null, true, false, getAll));
		}
		return statuses;
	},
	runEvent: function () {
		if (this.eventDepth >= 8) {
			// oh fuck
			this.add('message', 'STACK LIMIT EXCEEDED');
			this.add('message', 'PLEASE REPORT IN BUG THREAD');
			this.add('message', 'Event: ' + eventid);
			this.add('message', 'Parent event: ' + this.event.id);
			throw new Error("Stack overflow");
		}
		if (!target) target = this;
		var statuses = this.getRelevantEffects(target, 'on' + eventid, 'onSource' + eventid, source);
		var hasRelayVar = true;
		effect = this.getEffect(effect);
		var args = [target, source, effect];
		//console.log('Event: ' + eventid + ' (depth ' + this.eventDepth + ') t:' + target.id + ' s:' + (!source || source.id) + ' e:' + effect.id);
		if (relayVar === undefined || relayVar === null) {
			relayVar = true;
			hasRelayVar = false;
		} else {
			args.unshift(relayVar);
		}

		var parentEvent = this.event;
		this.event = {id: eventid, target: target, source: source, effect: effect, modifier: 1};
		this.eventDepth++;

		if (onEffect && 'on' + eventid in effect) {
			statuses.unshift({status: effect, callback: effect['on' + eventid], statusData: {}, end: null, thing: target});
		}
		for (var i = 0; i < statuses.length; i++) {
			var status = statuses[i].status;
			var thing = statuses[i].thing;
			//this.debug('match ' + eventid + ': ' + status.id + ' ' + status.effectType);
			if (status.effectType === 'Status' && thing.status !== status.id) {
				// it's changed; call it off
				continue;
			}
			if (thing.ignore && thing.ignore[status.effectType] === 'A') {
				// ignore attacking events
				var AttackingEvents = {
					BeforeMove: 1,
					BasePower: 1,
					Immunity: 1,
					Accuracy: 1,
					RedirectTarget: 1,
					Damage: 1,
					SubDamage: 1,
					Heal: 1,
					TakeItem: 1,
					UseItem: 1,
					EatItem: 1,
					SetStatus: 1,
					CriticalHit: 1,
					ModifyPokemon: 1,
					ModifyAtk: 1, ModifyDef: 1, ModifySpA: 1, ModifySpD: 1, ModifySpe: 1,
					ModifyBoost: 1,
					ModifyDamage: 1,
					TryHit: 1,
					TryHitSide: 1,
					TrySecondaryHit: 1,
					Hit: 1,
					Boost: 1,
					DragOut: 1
				};
				if (eventid in AttackingEvents) {
					if (eventid !== 'ModifyPokemon') {
						this.debug(eventid + ' handler suppressed by Mold Breaker');
					}
					continue;
				}
			} else if (thing.ignore && thing.ignore[status.effectType]) {
				if (eventid !== 'ModifyPokemon' && eventid !== 'Update') {
					this.debug(eventid + ' handler suppressed by Gastro Acid, Klutz or Magic Room');
				}
				continue;
			}
			if (target.ignore && (target.ignore[status.effectType + 'Target'] || target.ignore[eventid + 'Target'])) {
				this.debug(eventid + ' handler suppressed by Air Lock');
				continue;
			}
			var returnVal;
			if (typeof statuses[i].callback === 'function') {
				var parentEffect = this.effect;
				var parentEffectData = this.effectData;
				this.effect = statuses[i].status;
				this.effectData = statuses[i].statusData;
				this.effectData.target = thing;

				returnVal = statuses[i].callback.apply(this, args);

				this.effect = parentEffect;
				this.effectData = parentEffectData;
			} else {
				returnVal = statuses[i].callback;
			}

			if (returnVal !== undefined) {
				relayVar = returnVal;
				if (!relayVar) {
					if (statuses[i + 1]) {
						 if(statuses[i].status.effectType === 'Ability' && statuses[i+1].status.effectType === 'Ability') continue;
					}
					break;
				}
				if (hasRelayVar) {
					args[0] = relayVar;
				}
			}
		}

		this.eventDepth--;
		if (this.event.modifier !== 1 && typeof relayVar === 'number') {
			// this.debug(eventid + ' modifier: 0x' + ('0000' + (this.event.modifier * 4096).toString(16)).slice(-4).toUpperCase());
			relayVar = this.modify(relayVar, this.event.modifier);
		}
		this.event = parentEvent;

		return relayVar;
	}
	pokemon: {
		update: function () {
			// reset for Light Metal etc
			this.weightkg = this.template.weightkg;
			// reset for diabled moves
			this.disabledMoves = {};
			this.negateImmunity = {};
			this.trapped = this.maybeTrapped = false;
			this.maybeDisabled = false;
			// reset for ignore settings
			this.ignore = {};
			for (var i in this.moveset) {
				if (this.moveset[i]) this.moveset[i].disabled = false;
			}
			if (init) return;

			if (this.runImmunity('trapped')) this.battle.runEvent('MaybeTrapPokemon', this);
			// Disable the faculty to cancel switches if a foe may have a trapping ability
			for (var i = 0; i < this.battle.sides.length; ++i) {
				var side = this.battle.sides[i];
				if (side === this.side) continue;
				for (var j = 0; j < side.active.length; ++j) {
					var pokemon = side.active[j];
					if (!pokemon || pokemon.fainted || !pokemon.template.abilities) continue;
					var template = (pokemon.illusion || pokemon).template;
					if (!template.abilities) continue;
					for (var k in pokemon.template.abilities) {
						var ability = template.abilities[k];
						if (ability === pokemon.ability) {
							// This event was already run above so we don't need
							// to run it again.
							continue;
						}
						if ((k === 'H') && template.unreleasedHidden) {
							// unreleased hidden ability
							continue;
						}
						if (this.runImmunity('trapped')) {
							this.battle.singleEvent('FoeMaybeTrapPokemon',
								this.battle.getAbility(ability), {}, this, pokemon);
						}
					}
				}
			}
			this.battle.runEvent('ModifyPokemon', this);

			this.speed = this.getStat('spe');
		},
		setAbilitySlot: function (slot, ability, source, effect, noForce) {
			if (!this.hp) return false;
			ability = this.battle.getAbility(ability);
			if (ability.id in {illusion:1, multitype:1, stancechange:1}) return false;
			var oldAbility = this.abilities[0];
			for (var i in this.abilities){
				var oldAbility = this.abilities[i];
				if (this.abilities[i] === ability.id && noForce) return false;
				if (oldAbility in {multitype:1, stancechange:1}) return false;
				this.abilities[slot] = ability.id;
				if (ability.id && this.battle.gen > 3) {
				   this.battle.singleEvent('Start', ability, this.abilityData, this, source, effect);
				}
			}
			return oldAbility;
		},
		getAbilities: function () {
			return this.abilities;
		}
	}
};
