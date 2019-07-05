import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import NavWatcher from './scripts/nav-watcher';

Vue.config.productionTip = false

// Декоратор роутера VK
// TODO: скорее всего он тут не будет нужен
window.navWatcher = new NavWatcher({
    callback: objLoc => console.log('Параметры коллбека перехода: ', objLoc),
});

// Создаем блок, в который будет монтироваться приложение
let appElem = document.createElement('div')
appElem.id = 'appVue'

// и добавляем его в конец body
document.body.appendChild(appElem)

window.vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#appVue')