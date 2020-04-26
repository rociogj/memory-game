import Cards from './cards'
import Card from './card'
import Nav from './nav'

export default class Game {
  constructor () {
    this.wrapper = document.createElement('div')
    this.wrapper.classList.add('wrapper')
    this.main = document.createElement('main')
    this.main.classList.add('main')
    this.wrapper.append(this.main, new Nav())
    this.flipTimes = 0
    this.timeout
    this.gameEnd = false
    document.body.append(this.wrapper)
    this.initGame()
  }
  initGame () {
    const buttonReset = document.querySelectorAll('.button--reset')[0]
    buttonReset.addEventListener('click', () => this.resetGame())
    this.resetGame()
  }

  resetGame () {
    this.main.innerHTML = ''
    const cards = new Cards()
    for (let i in cards.icons) {
      const card = new Card(cards.icons[i])
      const cardNode = card.create()
      this.main.appendChild(cardNode)
      cardNode.addEventListener('click', (event) => this.handleClick(event, card, cardNode, cards))
    }
  }

  handleClick (event, card, cardNode, cards) {
    if (this.flipTimes > 1 || event.target.parentElement.classList.contains('flip')) {
      return true
    }
    // flip card
    card.flip(cardNode)
    // check if icons match
    const match = cards.checkMatch(card.icon)
    clearTimeout(this.timeout)
    if (match && event.target.tagName === 'SPAN') {
      // add class matched to cards
      card.matched(document.querySelectorAll('.card.flip:not(.matched)'))
      // counter to 0
      this.flipTimes--
    } else {
      // unflip cards if they dont match
      this.timeout = setTimeout(() => {
        cards.resetCards(document.querySelectorAll('.card.flip:not(.matched)'))
        this.flipTimes = 0
      }, 1500)
      this.flipTimes++
    }
    this.checkEnd()
  }

  checkEnd () {
    this.gameEnd = document.querySelectorAll('.card.flip.matched').length === 12
    if (!this.gameEnd) {
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
    this.main.append(winnerLayer)
    setTimeout(() => {
      winnerLayer.classList.add('visible')
    }, 100)
    setTimeout(() => {
      winnerLayer.classList.remove('visible')
    }, 2500)
  }
}