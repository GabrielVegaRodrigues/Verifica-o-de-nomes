//Algoritmo para veificar se o nome é comum ou diferente baseado em lista de nomes mais comuns



//matriz com os nomes mais comuns atualmente
nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]
// Variáveis
nomeTeste = "Francieli"
nome = false
// Laço de repetição para procurar o nome na matriz
for (x = 0; x < nomesComuns.length; x++ ){  
  if  (nomeTeste == nomesComuns[x]){   // Caso encontre o nome digitado na variavel nomeTeste na matriz de nomes comuns o algoritmo transforma a variavel lógica que iniciou como false em true ,para a busca e imprime Seu nome é comum.
    nome = true
        break
  }
}
  if (nome) {
      console.log("Seu nome é comum.")
}

    //Caso o algoritmo nao encontre o nome digitado na variavel nomeTeste dentro da matriz de nomes comuns será impresso "Seu nome é um nome incomum."
  else {
    console.log ("Seu nome é incomum.")
}