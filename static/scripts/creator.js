// TODO : create creator functions

nbAttack = 0

function createAttackField()
{
    nbAttack += 1;
    creatorForm = document.getElementById('creatorForm');
    attackName = document.createElement('input');
    attackDiv = document.createElement('div');
    attackDescription = document.createElement('input');

    attackDiv.style = "border:solid; background-color: black; border-color: orange;"
    
    attackName.type        = 'text';
    attackName.id          = `attackName${nbAttack}`;
    attackName.class       = 'attackName'
    attackName.name        = `attackName${nbAttack}`;
    attackName.style       = "border: solid;background-color: black;font-size: 25px; color: orange; font-family: 'VT323', monospace;";
    attackName.placeholder = 'Attack Name';
    attackName.required    = true;

    attackDescription.type        = 'text';
    attackDescription.id          = `attackDescription${nbAttack}`;
    attackDescription.class       = 'attackDescription'
    attackDescription.name        = `attackDescription${nbAttack}`;
    attackDescription.style       = "border: solid;background-color: black;font-size: 25px; color: orange; font-family: 'VT323', monospace;";
    attackDescription.placeholder = 'Attack Description';
    attackDescription.required    = true;

    attackDiv.appendChild(document.createElement('br'));
    attackDiv.appendChild(attackName);
    attackDiv.appendChild(document.createElement('br'));
    attackDiv.appendChild(attackDescription)
    creatorForm.appendChild(attackDiv);
}