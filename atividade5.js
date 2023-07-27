let valorMinutos, tempoCliente, ValorPagar1, ValorPagar2

valorMinutos = Number(prompt("Qual é o valor dos 15 minutos?"))
tempoCliente = Number(prompt("Digite o valor de tempo do cliente"))

ValorPagar1 = tempoCliente / 15
ValorPagar2 = ValorPagar1 * valorMinutos

document.write (`O valor a pagar pelo cliente é: ${Math.ceil(ValorPagar2)}`)