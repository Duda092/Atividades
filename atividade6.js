let nomeProduto, precoProduto, desconto, valorFinal

nomeProduto = prompt("Digite o nome do produto")
precoProduto = Number(prompt("Digite o preço do produto"))

desconto = (precoProduto / 2).toFixed(2)
valorFinal = ((precoProduto * 3) - desconto).toFixed(2)

alert(`O valor com produto com o desconto é R$${valorFinal}`)