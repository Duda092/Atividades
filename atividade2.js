let modeloVeiculo, precoVeiculo, valorEntrada, valorParcela

modeloVeiculo = prompt ("Digite o modelo do veículo")
precoVeiculo = parseFloat(prompt("Digite o valor do veículo"))

valorEntrada = precoVeiculo / 2
valorParcela = (precoVeiculo / 2) / 12

document.write (`O valor do veículo ${precoVeiculo}. <br> A entrada é de ${valorEntrada} e o resto do pagamento é 12xR$${valorParcela.toFixed(2)}`)