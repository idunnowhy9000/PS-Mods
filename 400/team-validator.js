if (format.banlistTable && format.banlistTable['400clause']) {
	return !(Object.sum(template.baseStats) <= 400);
}
// (Add this after line ~584 containing "alreadyChecked[template.speciesid] = true;")