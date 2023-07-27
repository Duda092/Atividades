let valorMedicamento, precoFinal

valorMedicamento = Number(prompt("Qual o valor do medicamento?"))

precoFinal = valorMedicamento * 2 

document.write(`O preço final dos medicamentos é: ${precoFinal} <br> Já o preço final com desconto é ${Math.floor(precoFinal)}>`)