// Carne - 400gr por pessoa +de 6 horas - 650gr
// Cerveja - 1200ml por pessoa +de 6 horas 2000ml
// Refrigerante/agua - 1000ml por pessoa +de 6 horas 1500ml

// Criança valem por 0,5 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("Calculando...")
  let duracao = inputDuracao.value;
  let qtdAdutos = inputAdultos.value;
  let qtdCriancas = inputCriancas.value;

  let qtdCarne = carnePP(duracao) * qtdAdutos + (carnePP(duracao)/2 * qtdCriancas);
  let qtdCerveja = cervejaPP(duracao) * qtdAdutos;
  let qtdBebidas = bebidasPP(duracao) * qtdAdutos + (bebidasPP(duracao)/2 * qtdCriancas);

 resultado.innerHTML =  "<p>" + (qtdCarne / 1000) + "kg de Carne<p>";
 resultado.innerHTML += "<p>" + Math.ceil(qtdCerveja / 355) + " Latas de Cerveja<p>";
 resultado.innerHTML += "<p>" + Math.ceil(qtdBebidas / 2000) + " Garrafas de Refrigerante de 2l<p>";
 

}

function carnePP(duracao){
  if(duracao >= 6){
    return 650;
  }else{
    return 400;
  }
}

function cervejaPP(duracao){
  if(duracao >= 6){
    return 2000;
  }else{
    return 1200;
  }
}

function bebidasPP(duracao){
  if(duracao >= 6){
    return 1500;
  }else{
    return 1000;
  }
}