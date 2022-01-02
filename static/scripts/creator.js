// TODO : create creator functions

nbAttack = 0

function createAttackField() {
    nbAttack += 1;

    creatorForm = document.getElementById('creatorForm');
    attackName = document.createElement('input');
    attackDiv = document.createElement('div');
    attackDescription = document.createElement('input');
    attackPoint = document.createElement('input');
    precisionPoint = document.createElement('input');

    attackDiv.style = "border:solid; background-color: black; border-color: orange;margin-top:0%; text-align:center;"

    attackName.type = 'text';
    attackName.id = `attackName${nbAttack}`;
    attackName.class = 'attackName'
    attackName.name = `attackName${nbAttack}`;
    attackName.style = "border: solid;background-color: black;font-size: 25px; color: orange; font-family: 'VT323', monospace;";
    attackName.placeholder = 'Attack Name';
    attackName.required = true;

    attackDescription.type = 'text';
    attackDescription.id = `attackDescription${nbAttack}`;
    attackDescription.class = 'attackDescription'
    attackDescription.name = `attackDescription${nbAttack}`;
    attackDescription.style = "border: solid;background-color: black;font-size: 25px; color: orange; font-family: 'VT323', monospace;";
    attackDescription.placeholder = 'Attack Description';
    attackDescription.required = true;

    attackPoint.type = 'number';
    attackPoint.id = `attackPoint${nbAttack}`;
    attackPoint.class = 'attackPoint';
    attackPoint.name = `attackPoint${nbAttack}`;
    attackPoint.style = "border: solid;background-color: black;font-size: 25px; color: orange; font-family: 'VT323', monospace;";
    attackPoint.placeholder = "Attack Points";
    attackPoint.required = true;

    precisionPoint.type = 'number';
    precisionPoint.id = `precisionPoint${nbAttack}`;
    precisionPoint.class = 'precisionPoint';
    precisionPoint.name = `precisionPoint${nbAttack}`;
    precisionPoint.style = "border: solid;background-color: black;font-size: 25px; color: orange; font-family: 'VT323', monospace;";
    precisionPoint.placeholder = "Precision Points";
    precisionPoint.required = true;

    attackDiv.appendChild(document.createElement('br'));
    attackDiv.appendChild(attackName);
    attackDiv.appendChild(document.createElement('br'));
    attackDiv.appendChild(attackDescription)
    attackDiv.appendChild(document.createElement('br'));
    attackDiv.appendChild(attackPoint)
    attackDiv.appendChild(document.createElement('br'));
    attackDiv.appendChild(precisionPoint)
    attackDiv.appendChild(document.createElement('p'));
    creatorForm.appendChild(attackDiv);
}