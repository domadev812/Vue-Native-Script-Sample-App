<template>
  <ScrollView orientation="horizontal">
    <StackLayout orientation="horizontal" class="chart-container">
      <StackLayout
        v-for="(item, index) in data"
        :key="index"
        class="chart-item"
        verticalAlignment="bottom"
      >
        <StackLayout
          orientation="horizontal"
        >
          <Label text="" width="50" :height="item.price" verticalAlignment="bottom" backgroundColor="#dadada"/>
          <Label text="" width="50" :height="item.profit" verticalAlignment="bottom" backgroundColor="#1fe0db"/>
        </StackLayout>
        <StackLayout orientation="horizontal" horizontalAlignment="center">
          <Image width="20" height="20" src="~/assets/chart.png" stretch="aspectFill" />
          <Label
            class="total-text"
            verticalAlignment="center"
            horizontalAlignment="center"
            :text="item.price + item.profit"
            height="30"
          />
        </StackLayout>
        <Label
          class="date-text"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Sept 19 2019"
          height="20"
        />
      </StackLayout>
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
  .chart-container {
    .chart-item {
      margin-right: 50px;
      &:last-child {
        margin-right: 0px;
      }
      .total-text {
        font-size: 18px;
        color: #1fe0db;
        margin-left: 10px;
      }
      .date-text {
        font-size: 12px;
      }
    }
  }
</style>
