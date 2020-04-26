import Cards from './cards.js'

const cards = new Cards

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

