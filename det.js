console.clear()
const prompt = require('prompt-sync')();

let sim = 0; // (precisa começar como 0)
let resposta = ""; //(precisa começar em branco)
resposta = prompt("Você conhece a vitima?");/* (Esse prompt serve pra mostrar uma mensagem e esperar uma resposta) */

if(resposta == "sim")
{
sim = sim +1; /* (ele só vai adicionar caso a pessoa responda sim, se não é igual a zero então não precisamos comprar, a menos que você queira adicionar um aviso de resposta incorreta) */
}
resposta = prompt("Você viu a vitima hoje?");
if(resposta == "sim")
{
sim = sim +1;
}
resposta = prompt("Você viu se tinha mais alguém com ela ?");
if(resposta == "sim")
{
sim = sim +1;
}
resposta = prompt("Você tem a chave da sala ?");
if(resposta == "sim")
{
sim = sim +1;
}
resposta = prompt("Está blusa é sua ?");
if(resposta == "sim")
{
sim = sim +1;
}

if(sim == 5) //(no fim de tudo é feito a comparação) 
{
console.log("Culpado");
}else if(sim == 4)
{
console.log("Suspeito");
}
else
{
console.log("Inocente");
}