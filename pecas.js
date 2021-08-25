var listaDePecas = ["Filtro de ar", "Carburador", "Radiador"]

if (listaDePecas.length < 10) {
    console.log ("É possível cadastrar mais peças.")}
    else {
        console.log("Não há mais espaço nesta lista. Não foi possível cadastrar.")
        }

let peso = 150;

if (peso < 100){
    console.log("A peça deve pesar 100g no mínimo")
}   
    else{
        console.log("A peça tem o peso adequado")
    }

let nomePeca = "";

if (nomePeca.length > 3){
    console.log ("Nome da peça está adequado para cadastro")
}
    else if (nomePeca.length == 0){
        console.log ("O nome da peça não pode estar vazio")
    }
    else {
        console.log ("O nome da peça deve ter mais de 3 caracteres")
    }

switch (nomePeca.length){
    case 0:
    console.log ("O nome da peça não pode ser vazio")
    break;

    case 1:
    case 2:
    case 3:
        console.log ("O nome deve ter mais de 3 caracteres")
        break;

    case 4:
        console.log ("O nome possui 4 caracteres")
        break;
    
    default:
        console.log ("Nome da peça está adequado para cadastro.")
        break;
}