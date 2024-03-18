//Seleção de Elementos
const multiplicationForm = document.querySelector("#multiplicator-form")
const numberInput = document.querySelector("#number")
const multiplicatorInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplication-operations")
const multiplicationTitle = document.querySelector("#multiplicator-title span")
//funções


const criarTabela = (number, multiplicatorNumber)=>{
    multiplicationTable.innerHTML=""

    for(i = 1; i<=multiplicatorNumber;i++) {
        const result = number * i
        const template = `
            <div id="row">
                <div id="operation">${number} x ${i}</div>
                <div id="result"> = ${result}</div>
            </div>`

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector("#row")
        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerText = number

}



//eventos

multiplicationForm.addEventListener("submit",(e) =>{
    e.preventDefault()
    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicatorInput.value

    if(!multiplicationNumber || !multiplicatorNumber) return
    criarTabela(multiplicationNumber,multiplicatorNumber)
})