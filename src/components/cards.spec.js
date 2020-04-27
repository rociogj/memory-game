import Cards from './cards.js'

const cards = new Cards()

describe('Check if cards match cases', () => {
  test('checkMatch function with equal strings', () => {
    const arr = ['equal', 'equal']
    let result
    for (let i in arr) {
      result = cards.checkMatch(arr[i])
    }
    expect(result).toBeTruthy()
  })
  test('checkMatch function with different strings', () => {
    const arr = ['equal', 'different']
    let result
    for (let i in arr) {
      result = cards.checkMatch(arr[i])
    }
    expect(result).not.toBeTruthy()
  })
  test('checkMatch function with an undefined value', () => {
    const arr = ['equal', undefined]
    let result
    for (let i in arr) {
      result = cards.checkMatch(arr[i])
    }
    expect(result).not.toBeTruthy()
  })
})

describe('Shuffle cards returns cases', () => {
  test('shuffleCards function returns an array which length === 12', () => {
    let arr = ['dove', 'crow', 'dragon', 'fish', 'frog', 'kiwi-bird']
    arr = [...arr, ...arr]
    const result = cards.shuffleCards(arr)
    expect(result).toHaveLength(12)
  })
  test('shuffleCards function returns an array of strings', () => {
    let arr = ['dove', 'crow', 'dragon', 'fish', 'frog', 'kiwi-bird']
    arr = [...arr, ...arr]
    const result = cards.shuffleCards(arr).every(e => typeof e === 'string')
    expect(result).toBeTruthy()
  })
})


