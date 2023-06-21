function inserc(num) {
    var numero = document.getElementById("Resultado").innerHTML;
   document.getElementById("Resultado").innerHTML= numero + num;
  }
  function limpar(){
    document.getElementById("Resultado").innerHTML = "";
  }
  function voltar() {
    var resultado = document.getElementById("Resultado").innerHTML;
    document.getElementById("Resultado").innerHTML = resultado.substring(0, resultado.length - 1);
  }
  function calcular(){
    var resultado = document.getElementById("Resultado").innerHTML;
    if(resultado){
        document.getElementById("Resultado").innerHTML = eval(resultado);
    } else {
        document.getElementById("Resultado").innerHTML = "Nenhum valor...";
    }
    //Esse codigo processa a calculadora
}
