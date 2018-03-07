import fadmin from 'fadmin'
import App from './App.fadmin'

new fadmin({
  el: '#app',
  render: h => h(App)
})
