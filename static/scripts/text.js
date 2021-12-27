function attack(victimObject, senderObject, attackObject, puissance)
{
    var textZone = document.getElementById('actionDescription')
    textZone.innerText = `${senderObject.name} use ${attackObject.name} against ${victimObject.name}! ${victimObject.name} lose ${puissance} PV\n`
}

function displayAttacks(playerObject, opponentObject)
{
    var textZone = document.getElementById('actionDescription')
    textZone.innerText = ''
    for(element in playerObject.attacks)
    {
        let btn = document.createElement('button')
        btn.innerHTML = playerObject.attacks[element].name;
        btn.onclick = function(){doAttack(getAttack(playerObject.attacks[element].name, playerObject),opponentObject, playerObject);}
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

function initializeText(opponentName)
{
    document.getElementById("textPopup").innerHTML = `Battle against ${opponentName}`;
    document.getElementById("opponentName").innerHTML = opponentName
}