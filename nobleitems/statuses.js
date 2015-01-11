exports.BattleStatuses = {
	silverpowderSub: {
		onStart: function (target) {
			this.add('-start', target, 'Substitute');
			this.effectData.hp = Math.floor(target.maxhp / 4);
			delete target.volatiles['partiallytrapped'];
			
		},
		onTryPrimaryHitPriority: -1,
		onTryPrimaryHit: function (target, source, move) {
			if (target === source) {
				this.debug('sub bypass: self hit');
				return;
			}
			if (move.notSubBlocked || move.isSoundBased && this.gen >= 6) {
				return;
			}
			if (move.category === 'Status') {
				var SubBlocked = {
					block:1, embargo:1, entrainment:1, gastroacid:1, healblock:1, healpulse:1, leechseed:1, lockon:1, meanlook:1, mindreader:1, nightmare:1, painsplit:1, psychoshift:1, simplebeam:1, skydrop:1, soak: 1, spiderweb:1, switcheroo:1, topsyturvy:1, trick:1, worryseed:1, yawn:1
				};
				if (move.status || move.boosts || move.volatileStatus === 'confusion' || SubBlocked[move.id]) {
					return false;
				}
				return;
			}
			var damage = this.getDamage(source, target, move);
			if (!damage) {
					return null;
			}
			damage = this.runEvent('SubDamage', target, source, move, damage);
			if (!damage) {
				return damage;
			}
				if (damage > target.volatiles['substitute'].hp) {
				damage = target.volatiles['substitute'].hp;
			}
			target.volatiles['substitute'].hp -= damage;
			source.lastDamage = damage;
			if (target.volatiles['substitute'].hp <= 0) {
					target.removeVolatile('substitute');
			} else {
				this.add('-activate', target, 'Substitute', '[damage]');
			}
			if (move.recoil) {
				this.damage(Math.round(damage * move.recoil[0] / move.recoil[1]), source, target, 'recoil');
			}
			if (move.drain) {
					this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
			}
			this.runEvent('AfterSubDamage', target, source, move, damage);
			return 0;
		},
		onEnd: function (target) {
			this.add('-end', target, 'Substitute');
		},
	}
}