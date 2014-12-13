if (format.banlistTable && format.banlistTable['thepowerwithin']) {
    var hpTypesX,
        hpTypes = ['Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark'],
        tpwType;
    for (var s in template.baseStats) {
        hpTypeX += i * (set.ivs[s] % 2);
    }
    tpwType = hpTypes[Math.floor(hpTypeX * 15 / 63)];
    if (tpwType === tools.getMove(move).type) {
        return false;
    }
}
// (Add this after line ~584 containing "alreadyChecked[template.speciesid] = true;")