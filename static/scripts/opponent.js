function reduceLife(point, opponentObject, maxLife)
{
    opponentObject.life -= point;
    percent = (maxLife * 5) / opponentObject.life * 2
    document.getElementById("lifebar").style.marginRight = `${percent}%`
}

function choose(choices) 
{
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function randomAttack(opponentObject)
{
    return choose(opponentObject.attacks);
}


