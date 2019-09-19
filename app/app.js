import Vue from "nativescript-vue";
import HomeScreen from "./screens/HomeScreen";
import NSVueShadow from 'nativescript-vue-shadow'
Vue.use(NSVueShadow)

new Vue({
  template: `
    <Frame>
      <HomeScreen />
    </Frame>`,
  components: {
    HomeScreen
  }
}).$start();
