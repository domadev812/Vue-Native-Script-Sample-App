<template>
  <ScrollView orientation="horizontal">
    <StackLayout orientation="horizontal" class="chat-container">
      <StackLayout
        v-for="(item, index) in data"
        :key="index"
        orientation="horizontal"
        class="chat-item"
      >
        <Label text="" width="50" :height="item.price" verticalAlignment="bottom" backgroundColor="#dadada"/>
        <Label text="" width="50" :height="item.profit" verticalAlignment="bottom" backgroundColor="#1fe0db"/>
      </StackLayout>
      <Label text="test" backgroundColor="red"/>
    </StackLayout>
  </ScrollView>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: () => {
          return [{}]
        }
      }
    },
  };

</script>

<style lang="scss">
  // Start custom common variables
  @import '../app-variables';
  // End custom common variables
  .chat-container {
    .chat-item {
      margin-right: 50px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
</style>
