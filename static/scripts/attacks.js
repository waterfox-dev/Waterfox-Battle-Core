function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  } 

function doAttack(attackObject, victimObject, senderObject)
{
    percentOfPuissance = getRandomArbitrary(attackObject.precision, 100)
    puissanceOfDefense = getRandomArbitrary(victimObject.defense - 50, victimObject.defense)
    puissance = Math.round((percentOfPuissance * attackObject.attack) / 100 - puissanceOfDefense)
    attack(victimObject, senderObject, attackObject, puissance)
    reduceLife(puissance, victimObject.maxLife, victimObject)
    wait(500)
}

function getAttack(name, playerObject)
{   
    for(element in playerObject.attacks)
    {
        if(playerObject.attacks[element].name == name)
        {
            return playerObject.attacks[element]
        }
    }
    return console.error("Attack not found");
}