<template>
  <Page class="refrigerator-page">
    <ActionBar class="action-bar">
      <StackLayout
        orientation="horizontal"
      >
        <Image src="~/assets/refrigerator.png" height="30" width="30" stretch="aspectFit" />
        <Label class="action-bar-title" text="Refrigerator"></Label>
      </StackLayout>
    </ActionBar>
    <StackLayout class="refrigerator-page-container">
      <StackLayout
        class="device-performance-charting"
        orientation="horizontal"
        height="200"
      >
        <Label
          class="performance-charting-label"
          text="Device Performance Charting]"
          verticalAlignment="center"
          horizontalAlignment="center"
        />
      </StackLayout>
      <StackLayout
        class="refrigerator-wrapper"
        height="150"
        orientation="horizontal"
      >
        <Image src="~/assets/refrigerator.png" height="80" width="80" stretch="aspectFit" />
        <Label
          class="refrigerator-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Nest refrigerator E"
        />
      </StackLayout>
      <StackLayout
        class="refrigerator-wrapper"
        height="100"
        orientation="horizontal"
      >
        <Label
          class="refrigerator-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Control 1"
        />
      </StackLayout>
      <StackLayout
        class="refrigerator-wrapper"
        height="100"
        orientation="horizontal"
      >
        <Label
          class="refrigerator-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Control 1"
        />
      </StackLayout>
      <StackLayout
        class="refrigerator-wrapper"
        height="100"
        orientation="horizontal"
      >
        <Label
          class="refrigerator-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Control 1"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
  import ReportChart from '../components/ReportChart';
  export default {
    components: {
      ReportChart
    },     
    data() {
      return {}
    },
    methods: {}
  };

</script>

<style lang="scss">
  // Start custom common variables
  @import '../app-variables';
  // End custom common variables
  .refrigerator-page {
    .action-bar-title {
      margin-left: 40px;
    }
    .refrigerator-page-container {
      padding-left: 60px;
      padding-right: 60px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .device-performance-charting {
        width: 100%;
        .performance-charting-label {
          font-size: 25px;
          color: $text-color-gray;
        }
      }
      .refrigerator-wrapper {
        .refrigerator-label {
          margin-left: 40px;
          font-size: 25px;
          color: $text-color-gray;
        }
      }
    }
  }
</style>
