

function reduceLife(point, maxLife, battleObject)
{
    if(battleObject.type == 'opponent')
    {
        sleep(1000)
        battleObject.life -= point;
        newSize = (battleObject.life * 100) / maxLife;
        document.getElementById("opponentLifebar").style.marginRight = `${100 - newSize}%`;
        doAttack(randomAttack(battleObject), currentPlayer, battleObject);
    }else{
        battleObject.life -= point;
        newSize = (battleObject.life * 100) / maxLife;
        document.getElementById("playerLifebar").style.marginRight = `${100 - newSize}%`;
    }
}