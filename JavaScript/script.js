function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.07;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
    if(valorConvertido == null){
      var valorConvertido = "Digite um valor" + valorEmReal;
        elementoValorConvertido.innerHTML = valorConvertido;
  }else(valorConvertido == true)
      var valorConvertido = "O resultado em real é R$" + valorEmReal;
        elementoValorConvertido.innerHTML = valorConvertido;
  
  
}