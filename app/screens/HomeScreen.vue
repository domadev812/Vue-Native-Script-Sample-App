<template>
  <Page class="page">
    <FlexboxLayout flexDirection="column" class="home-page-container">
      <FlexboxLayout class="savings-container">
        <FlexboxLayout class="savings-labels-wrapper" flexDirection="column">
          <Label class="saving-label" text="Savings" />
          <Label class="saving-label" :text="savingPrice" />
        </FlexboxLayout>
        <FlexboxLayout flexDirection="column" class="savings-button-wrapper">
          <Button class="btn-free-energy" text="FREE ENERGY"></Button>
        </FlexboxLayout>
      </FlexboxLayout>
      <ReportChart :data="chatData" />
      <FlexboxLayout class="main-container" flexDirection="column">
        <FlexboxLayout
          class="main-item"
          orientation="horizontal"
          flexDirection="row"
        >
          <StackLayout verticalAlignment="center" >
            <Image src="~/assets/home.png" height="50" width="50" stretch="aspectFit" />
          </StackLayout>
          <StackLayout verticalAlignment="center">
            <Label class="main-text" text="Home" horizontalAlignment="center"/>
            <Label class="main-description" text="50% of connected" horizontalAlignment="center" />
          </StackLayout>
          <StackLayout verticalAlignment="center">
            <Switch checked="true" width="100" />
            <Label class="main-description" text="TIME OF USE" horizontalAlignment="center" />
          </StackLayout>
        </FlexboxLayout>
        <FlexboxLayout
          class="main-item"
          orientation="horizontal"
          flexDirection="row"
        >
          <StackLayout verticalAlignment="center" >
            <Image src="~/assets/thermostat.png" height="40" width="40" stretch="aspectFit" />
          </StackLayout>
          <StackLayout verticalAlignment="center">
            <Label class="main-text" text="Thermostat" horizontalAlignment="center"/>
            <Label class="main-description" text="Nest Thermostat E" horizontalAlignment="center" />
          </StackLayout>
          <Image src="~/assets/arrow-right.png" height="30" width="30" stretch="aspectFit" />
        </FlexboxLayout>
        <FlexboxLayout
          class="main-item"
          orientation="horizontal"
          flexDirection="row"
        >
          <StackLayout verticalAlignment="center" >
            <Image src="~/assets/refrigerator.png" height="40" width="40" stretch="aspectFit" />
          </StackLayout>
          <StackLayout verticalAlignment="center">
            <Label class="main-text" text="Refrigerator" horizontalAlignment="center"/>
            <Label class="main-description" text="Nest Thermostat E" horizontalAlignment="center" />
          </StackLayout>
          <Image src="~/assets/arrow-right.png" height="30" width="30" stretch="aspectFit" />
        </FlexboxLayout>
        <FlexboxLayout
          class="main-item"
          orientation="horizontal"
          flexDirection="row"
        >
          <Label width="40" height="40" class="add-connection-icon" text="+" />
          <Label class="add-connection-text" text="Add Connection" horizontalAlignment="center" />
        </FlexboxLayout>
      </FlexboxLayout>
    </FlexboxLayout>
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
        savingPrice: "$40.23",
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
        ]
      }
    },
    computed: {
      message() {
        return "app";
      }
    },
  };

</script>

<style lang="scss">
  // Start custom common variables
  @import '../app-variables';
  // End custom common variables
  .home-page-container {
    padding: 40px;
    .savings-container {
        margin-bottom: 50px;
        .savings-labels-wrapper {
          flex: 1;
          align-items: center;
          .saving-label {
            font-size: 24px;
            font-weight: bold;
            margin: 10px 0;
            color: $text-color-gray;
          }
        }
        .savings-button-wrapper {
          flex: 1;
          align-items: center;
          .btn-free-energy {
            height: 120px;
            width: 450px;
            border-radius: 60px;
            background-color: $btn-color-gray;
            color: white;
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    .main-container {
      flex: 1;
      margin-top: 30px;
      padding: 30px;
      background-color: red;
      border-top-left-radius: 70px;
      border-top-right-radius: 70px;
      .main-item {
        justify-content: space-between;
        align-items: center;
        padding-left: 50px;
        padding-right: 50px;
        flex: 1;
        .main-text {
          margin-bottom: 20px;
          font-size: 20px;
          line-height: 40px;
          font-weight: bold;
          color: $text-color-gray
        }
        .main-description {
          margin-top: 20px;
          font-size: 14px;
          color: #888;
        }
        .add-connection-icon {
          font-size: 40px;
          padding: 30px;
          border-radius: 50%;
          background-color: $btn-color-gray;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .add-connection-text {
          flex: 1;
          font-size: 20px;
          line-height: 40px;
          font-weight: bold;
        }
      }
    }
  }
</style>
