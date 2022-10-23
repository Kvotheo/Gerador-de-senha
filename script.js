let sliderElement = document.querySelector("#slider");
let buttomElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    // i começa em 0 e continua passando no for menor que o tamanho de caracter que o usuario selecionou 
    pass += charset.charAt(Math.floor(Math.random() * n));}
    //+= para somar os caracteres e nao ficar em apenasum

    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
  }
  
  function copyPassword(){
     navigator.clipboard.writeText(novaSenha)
  }
 

  