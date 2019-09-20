<template>
  <Page class="refrigerator-page">
    <ActionBar class="action-bar" backgroundColor="white" color="#414353">
      <NavigationButton text="" android.systemIcon="ic_menu_back" @tap="goBack" />
      <StackLayout
        orientation="horizontal"
      >
        <Image src="~/assets/refrigerator.png" height="30" width="30" stretch="aspectFit" />
        <Label class="action-bar-title" text="Refrigerator"></Label>
      </StackLayout>
    </ActionBar>
    <StackLayout class="refrigerator-page-container">
      <StackLayout marginTop="50">
        <ReportChart :data="chatData" />
      </StackLayout>
      <StackLayout
        class="refrigerator-wrapper"
        height="130"
        orientation="horizontal"
      >
        <Image src="~/assets/tp-link-hs110.jpg" height="80" width="80" stretch="aspectFit" />
        <Label
          class="refrigerator-label"
          verticalAlignment="center"
          horizontalAlignment="center"
          text="TP-Link HS110"
        />
      </StackLayout>
      <StackLayout
        class="refrigerator-wrapper"
        height="80"
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
        height="80"
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
        height="80"
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
