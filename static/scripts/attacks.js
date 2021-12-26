function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  

function doAttack(attackObject, victimObject)
{
    percentOfPuissance = getRandomArbitrary(attackObject.precision, 100)
    puissance = (percentOfPuissance * attackObject.attack) / 100
    victimObject.life -= puissance
    
}