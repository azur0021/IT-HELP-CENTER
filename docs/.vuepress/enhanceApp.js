import Vue from 'vue';
import GlobalComponent from './components/GlobalComponent.vue';
import GlobalComponent1 from './components/GlobalComponent1.vue';
import GlobalComponent2 from './components/GlobalComponent2.vue';

export default ({ Vue }) => {
  Vue.component('GlobalComponent', GlobalComponent);
  Vue.component('GlobalComponent1', GlobalComponent1);
  Vue.component('GlobalComponent2', GlobalComponent2);

};



