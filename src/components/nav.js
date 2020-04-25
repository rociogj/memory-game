export default class Nav {
  constructor () {
    const nav = document.createElement('nav')
    nav.classList.add('nav')
    const buttonReset = document.createElement('button')
    buttonReset.classList.add('button', 'button--reset')
    const iconReset = document.createElement('i')
    iconReset.classList.add('fa', 'fa-random')
    buttonReset.append(iconReset)
    nav.append(buttonReset)
    return nav
  }
}