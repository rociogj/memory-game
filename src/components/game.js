import Cards from './cards'
import Card from './card'
import Nav from './nav'

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
const main = document.createElement('main')
main.classList.add('main')
wrapper.append(main, new Nav())

let flipTimes = 0
let timeout
let gameEnd = false


export default class Game {
  constructor () {
    document.body.append(wrapper)
    this.initGame()
  }
  initGame () {
    const buttonReset = document.querySelectorAll('.button--reset')[0]
    buttonReset.addEventListener('click', () => this.resetGame())
    this.resetGame()
  }

  resetGame () {
    main.innerHTML = ''
    const cards = new Cards()
    console.log('cards.icons', cards.icons)
    for (let i in cards.icons) {
      const card = new Card(cards.icons[i])
      const cardNode = card.create()
      main.appendChild(cardNode)
      cardNode.addEventListener('click', (event) => this.handleClick(event, card, cardNode, cards))
    }
  }

  handleClick (event, card, cardNode, cards) {
    if (flipTimes > 1 || event.target.parentElement.classList.contains('flip')) {
      return true
    }
    // flip card
    card.flip(cardNode)
    // check if icons match
    const match = cards.checkMatch(card.icon)
    clearTimeout(timeout)
    if (match && event.target.tagName === 'SPAN') {
      // add class matched to cards
      card.matched(document.querySelectorAll('.card.flip:not(.matched)'))
      // counter to 0
      flipTimes--
    } else {
      // unflip cards if they dont match
      timeout = setTimeout(() => {
        cards.resetCards(document.querySelectorAll('.card.flip:not(.matched)'))
        flipTimes = 0
      }, 1500)
      flipTimes++
    }
    this.checkEnd()
  }

  checkEnd () {
    gameEnd = document.querySelectorAll('.card.flip.matched').length === 12
    if (!gameEnd) {
      return true
    }
    const winnerLayer = document.createElement('div')
    winnerLayer.classList.add('layer')
    const winnerContent = document.createElement('div')
    winnerContent.classList.add('layer__content')
    const winnerText = document.createElement('p')
    winnerText.classList.add('layer__text')
    winnerText.innerHTML = '<i class="fas fa-grin-hearts"></i> Congrats! You made it!'
    winnerContent.append(winnerText)
    winnerLayer.append(winnerContent)
    main.append(winnerLayer)
    setTimeout(() => {
      winnerLayer.classList.add('visible')
    }, 100)
    setTimeout(() => {
      winnerLayer.classList.remove('visible')
    }, 2500)
  }
}