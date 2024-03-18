const qrCodeImg = document.querySelector("#qr-code img")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeBtn = document.querySelector("#qr-form button")
const container = document.querySelector(".container")



//funções 

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value
    if(!qrCodeInputValue) return
    qrCodeBtn.innerText = "Gerando QR Code..."
    qrCodeImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("active")
        qrCodeBtn.innerText = "Código criado!"
    })
}


qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})

qrCodeInput.addEventListener("keydown", (e)=>{
    if(e.code=="Enter") {
        generateQrCode()
    }
})

qrCodeInput.addEventListener("keyup", ()=>{
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText="Gerar QR Code"
    }
})