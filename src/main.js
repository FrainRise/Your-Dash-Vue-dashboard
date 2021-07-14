import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faHome, 
    faListUl, 
    faChartBar, 
    faSignal, 
    faInfoCircle, 
    faSignOutAlt,
    faUserAlt,
    faBell,
    faAngleDown,
    faSearch,
    faPen,
    faTrashAlt,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
const iconsArray = [
                    faHome, faListUl, faChartBar, faSignal, faInfoCircle, 
                    faSignOutAlt, faUserAlt, faBell, faAngleDown, faSearch, 
                    faPen, faTrashAlt, faTimes
                ]

iconsArray.forEach((item) => library.add(item))
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')