import Vue from "nativescript-vue";
import HomeScreen from "./screens/HomeScreen";

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

new Vue({
  template: `
    <Frame>
      <HomeScreen />
    </Frame>`,
  components: {
    HomeScreen
  }
}).$start();
