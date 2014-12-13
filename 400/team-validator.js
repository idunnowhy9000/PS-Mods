if (format.banlistTable && format.banlistTable['400clause']) {
    var bst;
    for (var i in template.baseStats) {
        bst += template.baseStats[i];
    }
    if (bst <= 400) return false;
}
// (Add this after line ~584 containing "alreadyChecked[template.speciesid] = true;")