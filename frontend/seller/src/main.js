import { createApp,provide,h } from 'vue'
import { createPinia } from 'pinia'
import {DefaultApolloClient} from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Notifications from '@kyvg/vue3-notification'

import Main from './components/layouts/MainLayout.vue'
import Empty from './components/layouts/EmptyLayout.vue'
import apolloclient from './apollo.config'
import './index.css'
const app = createApp({
    setup() {
      provide(DefaultApolloClient, apolloclient)
    },
    render: ()=> h(App),
  });
  library.add(fas, far, fab)
dom.watch();



app.component('font-awesome-icon', FontAwesomeIcon)  //
app.component('main-layout',Main)
app.component('empty-layout',Empty)

app.use(createPinia())
app.use(Notifications)             
app.use(router)
app.mount('#app')



