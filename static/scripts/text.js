function opponentAttack(opponentObject, attackObject)
{
    var textZone = document.getElementById('actionDescription')
    textZone.innerText = `${opponentObject.name} use ${attackObject.name} ! \n ${attackObject.description} `
}

function displayAttacks(playerObject)
{
    var textZone = document.getElementById('actionDescription')
    textZone.innerText = ''
    for(element in playerObject.attacks)
    {
        let btn = document.createElement('button')
        btn.innerHTML = playerObject.attacks[element].name;
        textZone.appendChild(btn);
    }
}

function displayActions(playerObject)
{
    var textZone = document.getElementById('actionDescription')
    textZone.innerText = ''
    for(element in playerObject.actions)
    {
        let btn = document.createElement('button')
        btn.innerHTML = `${playerObject.actions[element].name} - ${playerObject.actions[element].description}` ;
        textZone.appendChild(btn);
        textZone.appendChild(document.createElement('br'))
    }
}