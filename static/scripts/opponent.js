function reduceLife(point, opponentObject, maxLen, maxLife)
{
    opponentObject.life -= point;
    newSize = (opponentObject.life * maxLen) / maxLife
    document.getElementById("lifebar").clientWidth = `${newSize}px`
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


