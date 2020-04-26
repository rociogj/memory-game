export default class Cards {
  constructor () {
    this.cardsIcons = ['dove', 'crow', 'dragon', 'fish', 'frog', 'kiwi-bird']
    this.cardsIcons = [...this.cardsIcons, ...this.cardsIcons]
    this.sortCards()
    this.cardsChecked = []
    this.matched = false
  }
  get icons () {
    return this.cardsIcons
  }
  sortCards () {
    this.cardsIcons.sort(() => {
      return 0.5 - Math.random()
    })
  }
  resetCards (cards) {
    this.cardsChecked = []
    cards.forEach((card) => {
      card.classList.remove('flip')
    })
  }
  checkMatch (icon) {
    if (this.cardsChecked.length > 1) {
      this.cardsChecked = []
    }
    this.cardsChecked.push(icon)
    this.matched = this.cardsChecked.length > 1 && this.cardsChecked.reduce((acc, curr, i, arr) => acc === curr)
    return this.matched
  }
}