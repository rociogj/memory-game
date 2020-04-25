export default class Card {

  constructor (icon) {
    this.cardIcon = icon
  }

  get icon () {
    return this.cardIcon
  }

  create () {
    const element = document.createElement('div')
    element.classList.add('card')
    const cardFront = document.createElement('span')
    cardFront.classList.add('card--front')
    const cardBack = document.createElement('span')
    cardBack.classList.add('card--back')
    const iconFront = document.createElement('i')
    const iconBack = document.createElement('i')
    iconFront.classList.add('fas', `fa-${this.cardIcon}`)
    iconBack.classList.add('fas', 'fa-egg')
    cardFront.appendChild(iconFront)
    cardBack.appendChild(iconBack)
    element.append(cardFront, cardBack)
    return element
  }

  flip (cardNode) {
    if (!cardNode.classList.contains('matched')) {
      cardNode.classList.add('flip')
    }
  }

  matched (cards) {
    cards.forEach((card) => {
      card.classList.add('matched')
    })
  }
}