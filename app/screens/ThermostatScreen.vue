<template>
  <Page class="thermostat-page">
    <ActionBar class="action-bar" backgroundColor="white" color="#414353">
      <NavigationButton text="" android.systemIcon="ic_menu_back" @tap="goBack"/>
      <StackLayout
        orientation="horizontal"
      >
        <Image src="~/assets/thermostat.png" height="30" width="30" stretch="aspectFit" />
        <Label class="action-bar-title" text="Thermostat"></Label>
      </StackLayout>
    </ActionBar>
    <StackLayout class="thermostat-page-container">
      <StackLayout marginTop="50">
        <ReportChart :data="chatData" />
      </StackLayout>
      <StackLayout
        class="thermostat-wrapper"
        height="130"
        orientation="horizontal"
      >
        <Image src="~/assets/nest-thermostat.jpg" height="100" width="100" stretch="aspectFit" />
        <Label
          class="thermostat-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="Nest Thermostat E"
        />
      </StackLayout>
      <StackLayout
        class="thermostat-wrapper"
        height="80"
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
        height="80"
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
        height="80"
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
      return {
        chatData: [
          {
            price: 150,
            profit: 100,
            date: new Date()
          },
          {
            price: 130,
            profit: 120,
            date: new Date()
          },
          {
            price: 110,
            profit: 80,
            date: new Date()
          },
          {
            price: 140,
            profit: 30,
            date: new Date()
          },
          {
            price: 100,
            profit: 30,
            date: new Date()
          },
          {
            price: 120,
            profit: 105,
            date: new Date()
          }
        ],
      }
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
