import { levelsList } from "./data/levelsList.js"

function renderLevels () {
  const container = document.querySelector('.cajitas-niveles')
  
  levelsList.forEach((level) => {
    const button = document.createElement('button')
    button.classList.add('boton-cajitas')
    button.innerHTML = level.id.toString()

    container.appendChild(button)
  })
}

document.addEventListener('DOMContentLoaded', renderLevels)