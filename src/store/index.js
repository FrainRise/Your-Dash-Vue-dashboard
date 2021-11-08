import { createStore } from 'vuex'
import { headerModule } from './headerModule'

export default createStore({
  modules: {
    header: headerModule,
  }
})
