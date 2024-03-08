import { createApp } from 'vue'
import pinia from './store'
import router from './router'
import Antd from './plugins/ant-design-vue'
import App from './App.vue'
import '@/assets/style/index.scss'

const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .use(Antd)
  .mount('#app')

app.config.errorHandler = (err) => {
  console.log(err)
}