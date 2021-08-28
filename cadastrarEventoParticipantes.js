
dataAtual = new Date().toISOString().substring(0,10)
dataEvento = new Date("2021-10-07").toISOString().substring(0,10)

console.log("Data Atual: "+dataAtual)
console.log("Data do Evento: "+dataEvento)

anoAtual = new Date().getFullYear();
dataAniversario = "01/05/2000";
anoInformado = dataAniversario.split('/')[2];
idade = anoAtual - anoInformado;

qtdadeParticipante = 80;

if (dataEvento<=dataAtual){
    console.log ("O cadastro não será permitido por data inválida: " +dataEvento)
} else if (idade < 18) {
    console.log("O cadastro não é permitido pela idade: " + idade)
}else if(qtdadeParticipante>=100){
    console.log("Quantidade excedeu de participantes: " + qtdadeParticipante)
}else{
    console.log("Incluir participantes")
}