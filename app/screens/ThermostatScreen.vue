<template>
  <Page class="thermostat-page">
    <ActionBar class="action-bar">
      <StackLayout
        orientation="horizontal"
      >
        <Image src="~/assets/thermostat.png" height="30" width="30" stretch="aspectFit" />
        <Label class="action-bar-title" text="Thermostat"></Label>
      </StackLayout>
    </ActionBar>
    <StackLayout class="thermostat-page-container">
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
        class="thermostat-wrapper"
        height="150"
        orientation="horizontal"
      >
        <Image src="~/assets/thermostat.png" height="80" width="80" stretch="aspectFit" />
        <Label
          class="thermostat-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Nest Thermostat E"
        />
      </StackLayout>
      <StackLayout
        class="thermostat-wrapper"
        height="100"
        orientation="horizontal"
      >
        <Label
          class="thermostat-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Control 1"
        />
      </StackLayout>
      <StackLayout
        class="thermostat-wrapper"
        height="100"
        orientation="horizontal"
      >
        <Label
          class="thermostat-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Control 1"
        />
      </StackLayout>
      <StackLayout
        class="thermostat-wrapper"
        height="100"
        orientation="horizontal"
      >
        <Label
          class="thermostat-label"
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
  .thermostat-page {
    .action-bar-title {
      margin-left: 40px;
    }
    .thermostat-page-container {
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
      .thermostat-wrapper {
        .thermostat-label {
          margin-left: 40px;
          font-size: 25px;
          color: $text-color-gray;
        }
      }
    }
  }
</style>
