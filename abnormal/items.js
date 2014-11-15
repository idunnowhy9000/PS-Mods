exports.BattleItems = {
	"normalgem": {
		inherit: true,
		onSourceTryPrimaryHit: function (target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === source.getTypes()[0]) {
				if (source.useItem()) {
					this.add('-enditem', source, 'Normal Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
	},
	"silkscarf": {
		inherit: true,
		onBasePower: function (basePower, user, target, move) {
			if (move.type === user.getTypes()[0]) {
				return this.chainModify(1.2);
			}
		},
	},
	"chilanberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === source.getTypes()[0] && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return this.chainModify(0.5);
				}
			}
		},
	}
}