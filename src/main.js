// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// // import { setupGlobDirectives } from './directives';

// const app = createApp(App)
//     // createApp(App).mount('#app')


// // setupGlobDirectives(app);

// app.use(router)
// app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupGlobDirectives } from './directives';
import { setupGlobComponents } from './components';

const app = createApp(App)

setupGlobDirectives(app);
setupGlobComponents(app);

app.use(router)

app.mount('#app')