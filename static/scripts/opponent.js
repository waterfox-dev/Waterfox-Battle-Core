

function choose(choices) 
{
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function randomAttack(opponentObject)
{
    return choose(opponentObject.attacks);
}


