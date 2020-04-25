import _ from 'lodash'
import './assets/scss/main.scss'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCat, faHippo, faFrog, faKiwiBird, faFish, faDragon, faEgg, faGrinHearts, faRandom } from '@fortawesome/free-solid-svg-icons/'

library.add({ faCat, faHippo, faFrog, faKiwiBird, faFish, faDragon, faEgg, faGrinHearts, faRandom })
dom.watch()

import Game from './components/game'
new Game()
