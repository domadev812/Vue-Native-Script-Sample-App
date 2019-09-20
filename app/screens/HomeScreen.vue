<template>
  <Page class="page">
    <FlexboxLayout flexDirection="column" class="home-page-container">
      <FlexboxLayout class="savings-container">
        <FlexboxLayout class="savings-labels-wrapper" flexDirection="column">
          <Label class="saving-label" text="Savings" />
          <Label class="saving-label" :text="savingPrice" />
        </FlexboxLayout>
        <FlexboxLayout flexDirection="column" class="savings-button-wrapper">
          <Button
            class="btn-free-energy"
            text="FREE ENERGY"
            height="40"
            @tap="onOpenFreeEnergyModal"
          />
        </FlexboxLayout>
      </FlexboxLayout>
      <ReportChart :data="chatData" />
      <StackLayout
        verticalAlignment="bottom"
        height="30"
        marginTop="20"
        class="shadow-container"
        backgroundColor="white"
        v-shadow="{elevation: 6, shadowOffset: -6, translationZ: -10}"
      />
      <FlexboxLayout
        class="main-container"
        flexDirection="column"
        paddingLeft="20"
        paddingRight="20"
      >
        <FlexboxLayout
          backgroundColor="#f4f4f4"
          class="main-item home-container"
          orientation="horizontal"
          flexDirection="row"
          height="1"
        >
            <Image src="~/assets/home.png" height="40" width="40" stretch="aspectFit" />
          <StackLayout class="main-wrapper">
            <Label class="main-text" text="Home" />
            <Label class="main-description" text="50% of connected" />
          </StackLayout>
          <StackLayout verticalAlignment="center">
            <Switch checked="true" width="100" />
            <Label class="time-of-use" text="TIME OF USE" horizontalAlignment="center" />
          </StackLayout>
        </FlexboxLayout>
        <FlexboxLayout
          class="main-item"
          orientation="horizontal"
          flexDirection="row"
          v-show="!showConnectModal"
          @tap="goToThermostatPage"
          height="1"
        >
          <StackLayout verticalAlignment="center" >
            <Image src="~/assets/thermostat.png" height="40" width="40" stretch="aspectFit" />
          </StackLayout>
          <StackLayout class="main-wrapper">
            <Label class="main-text" text="Thermostat"/>
            <Label class="main-description" text="Nest Thermostat E" />
          </StackLayout>
          <Image src="~/assets/arrow-right.png" height="30" width="30" stretch="aspectFit" />
        </FlexboxLayout>
        <FlexboxLayout
          v-show="!showConnectModal"
          class="main-item"
          orientation="horizontal"
          flexDirection="row"
          @tap="goToRefrigeratorPage"
          height="1"
        >
          <StackLayout verticalAlignment="center" >
            <Image src="~/assets/refrigerator.png" height="40" width="40" stretch="aspectFit" />
          </StackLayout>
          <StackLayout class="main-wrapper">
            <Label class="main-text" text="Refrigerator"/>
            <Label class="main-description" text="Nest Thermostat E" />
          </StackLayout>
          <Image src="~/assets/arrow-right.png" height="30" width="30" stretch="aspectFit" />
        </FlexboxLayout>
        <FlexboxLayout
          height="2"
          v-show="showConnectModal"
          class="connect-modal"
          orientation="horizontal"
          flexDirection="row"
        >
          <StackLayout>
            <Image src="~/assets/voice.png" width="50" height="50" marginBottom="10" />
            <Label text="Voice" horizontalAlignment="center" />
          </StackLayout>
          <StackLayout >
            <Image src="~/assets/thermostat.png" width="50" height="50" marginBottom="10" />
            <Label text="Thermostat" horizontalAlignment="center" />
          </StackLayout>
          <StackLayout >
            <Image src="~/assets/plug.png" width="50" height="50" marginBottom="10" />
            <Label text="Plug" horizontalAlignment="center" />
          </StackLayout>
        </FlexboxLayout>
        <FlexboxLayout
          height="1"
          @tap="onToggleConnectModal"
          class="main-item"
          orientation="horizontal"
          flexDirection="row"
        >
          <FlexboxLayout width="40" height="40" class="add-connection-icon-wrraper">
            <Label class="add-connection-icon" :text="!showConnectModal ? '+' : '⨯'" />
          </FlexboxLayout>
          <Label class="add-connection-text" :text="!showConnectModal ? 'Add Connection' : 'Back'" horizontalAlignment="center" />
        </FlexboxLayout>
      </FlexboxLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import ReportChart from '../components/ReportChart';
  import ThermostatScreen from './ThermostatScreen';
  import RefrigeratorScreen from './RefrigeratorScreen';
  import FreeEnergyModal from './FreeEnergyModal';
  
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
        ],
        showConnectModal: false
      }
    },
    methods: {
      onToggleConnectModal () {
        this.showConnectModal = !this.showConnectModal
      },
      goToThermostatPage () {
        this.$navigateTo(ThermostatScreen);
      },
      goToRefrigeratorPage () {
        this.$navigateTo(RefrigeratorScreen);
      },
      onOpenFreeEnergyModal () {
        this.$showModal(FreeEnergyModal, { fullscreen: true });
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
    padding-top: 80px;
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
            border-radius: 60px;
            background-color: $btn-color-gray;
            color: white;
            font-size: 14px;
            font-weight: bold;
            padding-left: 50px;
            padding-right: 50px
          }
        }
      }
    .main-container {
      flex: 1;
      .connect-modal {
        flex: 2;
        justify-content: space-around;
        align-items: center;
      }
      .main-item {
        &.home-container {
          border-radius: 30px;
        }
        justify-content: space-between;
        align-items: center;
        padding-left: 50px;
        padding-right: 50px;
        flex: 1;
        .main-wrapper {
          margin-left: 70px;
          flex: 1;
          .main-text {
            font-size: 20px;
            line-height: 40px;
            font-weight: bold;
            color: $text-color-gray
          }
        }
        .time-of-use {
          margin-top: 10px;
          font-size: 11px;
          color: #888;
        }
        .main-description {
            margin-top: 10px;
            font-size: 14px;
            color: #888;
          }
        .add-connection-icon-wrraper {
          background-color: $text-color-gray;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          .add-connection-icon {
            font-size: 25px;
            color: white;
          }
        }
        .add-connection-text {
          margin-left: 70px;
          flex: 1;
          font-size: 20px;
          line-height: 40px;
          font-weight: bold;
          color: $text-color-gray;
        }
      }
    }
    .shadow-container {
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }
  }
</style>
