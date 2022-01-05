

function reduceLife(point, maxLife, battleObject)
{
    if(battleObject.type == 'opponent')
    {
        battleObject.life -= point;
        if(battleObject.life <= 0 )
        {
            window.alert(`You win against ${battleObject.name}`);
            window.history.back();
        }
        newSize = (battleObject.life * 100) / maxLife;
        document.getElementById("opponentLifebar").style.marginRight = `${100 - newSize}%`;
        doAttack(randomAttack(battleObject), currentPlayer, battleObject);

    }else{
        battleObject.life -= point;
        if(battleObject.life <= 0 )
        {
            window.alert(`You loose against ${battleObject.name}`);
            window.history.back();
        }
        newSize = (battleObject.life * 100) / maxLife;
        document.getElementById("playerLifebar").style.marginRight = `${100 - newSize}%`;
    }
}