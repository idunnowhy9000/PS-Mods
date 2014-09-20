// alreadyChecked[template.speciesid] = true;
// ...
if (format.id === 'typeremix') {
    var megaTypes = [];
    for (var m = 0; m < template.otherFormes; m++){
    var otherFormeTemp = tools.getTemplate(template.otherFormes[m]);
    if (otherFormeTemp.isMega){
        for(var i = 0; i <otherFormeTemp.types; i++){megaTypes.push(otherFormeTemp.types[i]);}
    }
    }
    if (template.types.indexOf(tools.getMove(move).type) > -1 || (megaTypes && megaTypes.indexOf(tools.getMove(move).type) > -1)){
        var stabs = {
            "normal":{'extremespeed':1,'hypervoice':1,'recover':1,'rapidspin':1},
            "fighting":{'closecombat':1,'aurasphere':1,'bulkup':1,'drainpunch':1},
            "flying":{'bravebird':1,'hurricane':1,'roost':1,'acrobatics':1},
            "poison":{'poisonjab':1,'sludgebomb':1,'toxicspikes':1,'coil':1},
            "ground":{'earthquake':1,'hypervoice':1,'spikes':1,'bonemerang':1},
            "rock":{'stoneedge':1,'powergem':1,'stealthrock':1,'rockblast':1},
            "bug":{'megahorn':1,'bugbuzz':1,'quiverdance':1,'uturn':1},
            "ghost":{'shadowclaw':1,'shadowball':1,'destinybond':1,'nightshade':1},
            "steel":{'ironhead':1,'flashcannon':1,'autotomize':1,'gyroball':1},
            "fire":{'flareblitz':1,'fireblast':1,'willowisp':1,'flamecharge':1},
            "water":{'waterfall':1,'hydropump':1,'soak':1,'scald':1},
            "grass":{'woodhammer':1,'leafstorm':1,'leechseed':1,'gigadrain':1},
            "electric":{'wildcharge':1,'thunderbolt':1,'thunderwave':1,'voltswitch':1},
            "psychic":{'zenheadbutt':1,'psychic':1,'calmmind':1,'trickroom':1},
            "ice":{'iciclecrash':1,'icebeam':1,'haze':1,'iceshard':1},
            "dragon":{'outrage':1,'dracometeor':1,'dragondance':1,'dragonpulse':1},
            "dark":{'knockoff':1,'darkpulse':1,'nastyplot':1,'foulplay':1},
            "fairy":{'playrough':1,'moonblast':1,'moonlight':1,'drainingkiss':1}
        };
        var moveType = tools.getMove(move).type;
        if (stabs[moveType]){
            if (stabs[moveType][tools.getMove(move).id]) return false;
        }
    }
}
// ...
// if (template.learnset)