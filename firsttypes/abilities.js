exports.BattleAbilities = {
	"darkaura": {
		inheit:true,
		onAnyTryPrimaryHit: function (target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Ghost') {
				source.addVolatile('aura');
			}
		}
	},
	"fairyaura": {
		inheit:true,
		onAnyTryPrimaryHit: function (target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Normal') {
				source.addVolatile('aura');
			}
		}
	},
	"justified": {
		inheit:true,
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.type === 'Ghost') {
				this.boost({atk:1});
			}
		}
	},
	"pixilate": {
		inheit:true,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && move.id !== 'hiddenpower') {
				move.type = 'Normal';
				pokemon.addVolatile('pixilate');
			}
		}
	}
}