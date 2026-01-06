


// assegno una classe ad ogni numero del cartellone

const numeriCartelloneEl = document.querySelectorAll("th")

numeriCartelloneEl.forEach((Element, index) => {
  const classeCrescente =`numero-` + (index + 1)
  Element.classList.add(classeCrescente)
  console.log(`Aggiunta classe: ${classeCrescente} a ${numeriCartelloneEl.tagName}`)
})



const estractionElement = document.getElementById("btnEstraction")
const ultimoNumeroElement = document.getElementById("estrazione")
const numeriEstratti = []
let ultimoNumero

estractionElement.addEventListener("click", () => {
  if (numeriEstratti.length == 89) {
    estractionElement.setAttribute("disabled", true)
    console.log("Gioco terminato")
  } else {
  ultimoNumero = (Math.floor(Math.random() * (90 - 1) + 1))
  while (numeriEstratti.includes(ultimoNumero)){
    ultimoNumero = (Math.floor(Math.random() * (90 - 1) + 1))

  }}
  const modificaCartellone = document.querySelector(`.numero-${ultimoNumero}`)
  modificaCartellone.classList.toggle("bg-white")
  modificaCartellone.classList.toggle("bg-warning")
  ultimoNumeroElement.textContent = ultimoNumero
  numeriEstratti.push(ultimoNumero)
  console.log(Number(ultimoNumero))
  console.log(numeriEstratti)
})