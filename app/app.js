import Vue from "nativescript-vue";

import HomeScreen from "./screens/HomeScreen";

new Vue({
  template: `
    <Frame>
      <HomeScreen />
    </Frame>`,
  components: {
    HomeScreen
  }
}).$start();
