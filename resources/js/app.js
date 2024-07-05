import './bootstrap';

import VueMultiselect from 'vue-multiselect';
import vueDebounce from 'vue-debounce';
import { createApp } from 'vue';

const app = createApp({});
Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
    app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
});

app.component('VueMultiselect', VueMultiselect);
app.directive('debounce', vueDebounce({ lock: true }));
app.mount('#app');
