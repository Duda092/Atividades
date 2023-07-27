let precoQuilo, consumo, valorPagar

precoQuilo = Number(prompt ("Digite o valor do Kilo"))
consumo = Number(prompt("Cosumo do cliente em (gr)"))

valorPagar = (precoQuilo/1000) * consumo

document.write (`O valor a pagar R$ ${valorPagar.toFixed(2)}`)