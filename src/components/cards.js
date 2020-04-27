export default class Cards {
  constructor () {
    this.cardsIcons = ['dove', 'crow', 'dragon', 'fish', 'frog', 'kiwi-bird']
    this.cardsIcons = [...this.cardsIcons, ...this.cardsIcons]
    this.cardsIcons = this.shuffleCards(this.cardsIcons)
    this.cardsChecked = []
    this.matched = false
  }
  get icons () {
    return this.cardsIcons
  }
  shuffleCards (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
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
    this.matched = this.cardsChecked.length > 1 && this.cardsChecked.reduce((acc, curr) => acc === curr)
    return this.matched
  }
}