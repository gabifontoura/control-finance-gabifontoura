// Preciso:
//1 listar liMoneyMovement com o array de objetos insertedValues - OK
//2 criar liMoneyMovement quando clicar em btn inserir (do modal) com info do input(value) e do valueType - ok
//3 fazer condiçao no valueType para selecionar apenas entrada ou apenas Saída, deixando o btn com estilo active - ok
//4 filtar entradas, saídas e todos -ok
//5 remover liMoneyMovement pelo iconTrash - ok
//6 remover liMoneyMovement do array insertedValues -ok
//7 somar valores movimentados na conta





function totalSum (array) {


    // let total = insertedValues.reduce((acumulador,valorAtual) => {
    //     return acumulador + valorAtual.value
    // },0)

    const entradas = insertedValues.filter((element) => element.categoryID == 1 )

    let totalEntradas = entradas.reduce((acumulador,valorAtual) => {
        return acumulador + valorAtual.value
    },0)

    const saidas = insertedValues.filter((element) => element.categoryID == 2)

    let totalSaidas = saidas.reduce((acumulador,valorAtual) => {
        return acumulador + valorAtual.value
    },0)

    
    let sum = document.getElementById("sum-movements")

    sum.innerText = ""
    sum.innerText = `R$${(totalEntradas - totalSaidas).toFixed(2)}`


  
}

totalSum(insertedValues)





