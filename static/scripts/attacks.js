function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  

function doAttack(attackObject, victimObject, senderObject)
{
    percentOfPuissance = getRandomArbitrary(attackObject.precision, 100)
    puissance = Math.round((percentOfPuissance * attackObject.attack) / 100)
    attack(victimObject, senderObject, attackObject, puissance)
    sleep(1000)
    reduceLife(puissance, victimObject.maxLife, victimObject)
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