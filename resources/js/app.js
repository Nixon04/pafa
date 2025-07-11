import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import 'bootstrap/dist/css/bootstrap.css';
import { createPinia } from 'pinia';
import './Pages/assets/style.css';
import './Pages/assets/media.css';

const pinia = createPinia();

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
    return pages[`./Pages/${name}.vue`];
  },
  setup({ el, App, props, plugin }) {
    // ✅ Create the app first
    const app = createApp({ render: () => h(App, props) });

    // ✅ Then assign $h to globalProperties
    app.config.globalProperties.$h = h;

    // ✅ Now use plugins and mount
    app
      .use(plugin)
      .use(pinia)
      .mount(el);
  },
});
