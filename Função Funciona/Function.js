
function menu() {
 var escolha = parseInt(prompt('Escolha uma função \n1. Calcular idade do animal em anos humanos\n2. Calcular meu lanche.\n3. Calcular circulo \n4. Converter temperatura'));
 switch (escolha) {
                case 1:
                calcularidadePet ();
                    break;
                case 2:
                calcularMeuLanche();
                    break;
                case 3:
                calcularcirculo()
                    break;
                case 4:
                ConvertFC();
                    break;
 }}
function calcularidadePet (){
let escolha = parseInt(prompt("Escolha um animal. \n 1. Cachorro \n 2. Gato \n 3. Urso"))
if (escolha === 1){
 cachorro();
}
else if (escolha === 2){
  gato();
}
else if (escolha === 3){
  urso();
}

}

function cachorro (){
    let nomeA = prompt("Qual o nome do seu urso ?")
    let idade = parseInt(prompt('Qual idade do seu pet ?'));
    let calculo = idade * 7;
    
    alert(nomeA+ " tem "+ calculo+" anos em anos humanos !");

 menu();
}
function gato(){
    let nomeA = prompt("Qual o nome do seu urso ?")
    let idade = parseInt(prompt('Qual idade do seu pet ?'));
    let calculo = idade * 15;
    
    alert(nomeA+" tem "+ calculo+" anos em anos humanos !");

 menu();
}
function urso (){
let nomeA = prompt("Qual o nome do seu urso ?")
let idade = parseInt(prompt('Qual idade do seu urso ?'));
    let calculo = idade * 12;
    
    alert(nomeA+" tem "+ calculo+" anos em anos humanos !");
menu();
}
   function calcularMeuLanche(){
    const idadeMaxima = 90
   let idade = parseInt(prompt("Qual sua idade ?"));
   let quantLPD = parseInt(prompt("Quantos lanches você consome por dia ?"));

   let calculo = (quantLPD * 365) * (idadeMaxima - idade);
   
   alert("Você precisará de "+calculo+" lanches, para durar até a idade "+idadeMaxima)
   menu();
   }
   function calcularcirculo (){
let escolha = parseInt(prompt("Escolha um calculo a ser realizado \n 1. Calcular circunferencia. \n 2. Calcular area."))
if (escolha === 1){
 calularCircunferencia();
}
else if (escolha === 2){
  calcularArea();
}
   }
   function calularCircunferencia(){
    var pi = 3.14;
    let raio = parseFloat(prompt("Digite o raio da circunferência do circulo"));
    let calculo = pi * raio;

    alert("A circunferencia é "+calculo);
    menu();
   }

   function calcularArea(){
   let raio = parseFloat(prompt('Qual o valor do raio do circulo?'));
   let area = pi * raio ** 2;
    alert("A área do círculo é de: "+area);
    menu();
}
function ConvertFC (){
    let escolha = parseInt(prompt("Escolha uma temperatura para converter \n 1. Coverter celsius em fahrenheit.\n 2. Conveter fahrenehit em celsius."))
    if (escolha === 1){
     converterCelsiusFahrenheit();
   }
    else if (escolha === 2){
    converterFahrenheitCelsiuas();
}}

function converterCelsiusFahrenheit(){
let tempC = parseFloat(prompt("Digite a temperatura em Celsius:"));
let calculo = tempC * 1.8 + 32
alert(tempC+"Celsius é igual a "+ calculo+"em fahrenheit");
}

function converterFahrenheitCelsiuas(){
let tempF = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
let calculo = (TempF - 32) / 1.8;

alert(tempF+"é igual a "+calculo+" celsius")
menu();
}


menu();
  