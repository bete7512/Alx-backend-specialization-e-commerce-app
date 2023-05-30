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
import Main from './components/layouts/Main.vue'
import Empty from './components/layouts/Empty.vue'
import apolloclient from './apollo.config'
import './index.css'
library.add(fas, far, fab)
dom.watch();
const app = createApp({
    setup() {
      provide(DefaultApolloClient, apolloclient)
    },
    render: ()=> h(App),
  });

app.component('main-layout',Main)
app.component('empty-layout',Empty)
app.component('font-awesome-icon', FontAwesomeIcon)  // <font-awesome-icon icon="coffee" />
app.use(Notifications)
app.use(createPinia())
app.use(router)
app.mount('#app')
