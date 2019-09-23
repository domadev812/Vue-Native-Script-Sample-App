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
      <ReportChart :data="chatData" marginBottom="10" marginTop="20" />
      <card-view class="main-container" elevation="80" radius="25" ios:shadowRadius="10" backgroundColor="white">
        <GridLayout columns="*" rows="auto, auto, auto, auto" padding="20">
          <GridLayout row="0" col="0" rows="80" columns="80, *, auto" backgroundColor="#f4f4f4" class="main-item home-container">
            <StackLayout col="0" row="0" verticalAlignment="center" >
              <Image src="~/assets/home.png" height="40" width="40" stretch="aspectFit" />
            </StackLayout>
            <StackLayout row="0" col="1" class="main-wrapper" verticalAlignment="center">
              <Label class="main-text" text="Home" />
              <Label class="main-description" text="50% of connected" />
            </StackLayout>
            <StackLayout row="0" col="2" verticalAlignment="center">
              <Switch checked="true" width="100" />
              <Label class="time-of-use" text="TIME OF USE" horizontalAlignment="center" />
            </StackLayout>
          </GridLayout>
          <GridLayout
            class="main-item"
            row="1"
            col="0"
            rows="80"
            columns="80, *, auto"
            v-show="!showConnectModal"
            @tap="goToThermostatPage"
          >
            <StackLayout col="0" row="0" verticalAlignment="center" >
              <Image src="~/assets/thermostat.png" height="40" width="40" stretch="aspectFit" />
            </StackLayout>
            <StackLayout col="1" row="0" class="main-wrapper"  verticalAlignment="center">
              <Label class="main-text" text="Thermostat"/>
              <Label class="main-description" text="Nest Thermostat E" />
            </StackLayout>
            <Image col="2" row="0" src="~/assets/arrow-right.png" height="30" width="30" stretch="aspectFit" />
          </GridLayout>
          <GridLayout
            class="main-item"
            row="2"
            col="0"
            rows="80"
            columns="80, *, auto"
            v-show="!showConnectModal"
            @tap="goToRefrigeratorPage"
          >
            <StackLayout col="0" row="0" verticalAlignment="center" >
              <Image src="~/assets/refrigerator.png" height="40" width="40" stretch="aspectFit" />
            </StackLayout>
            <StackLayout col="1" row="0" class="main-wrapper"  verticalAlignment="center">
              <Label class="main-text" text="Refrigerator"/>
            <Label class="main-description" text="TP-Link HS110" />
            </StackLayout>
            <Image col="2" row="0" src="~/assets/arrow-right.png" height="30" width="30" stretch="aspectFit" />
          </GridLayout>
          <GridLayout
            v-show="showConnectModal"
            col="0"
            row="1"
            rowSpan="2"
            columns="*, *, *"
            rows="160"
          >
            <StackLayout col="0" row="0" verticalAlignment="center">
              <Image src="~/assets/voice.png" width="50" height="50" marginBottom="10" />
              <Label text="Voice" horizontalAlignment="center" />
            </StackLayout>
            <StackLayout col="1" row="0" verticalAlignment="center">
              <Image src="~/assets/thermostat.png" width="50" height="50" marginBottom="10" />
              <Label text="Thermostat" horizontalAlignment="center" />
            </StackLayout>
            <StackLayout col="2" row="0" verticalAlignment="center">
              <Image src="~/assets/plug.png" width="50" height="50" marginBottom="10" />
              <Label text="Plug" horizontalAlignment="center" />
            </StackLayout>
          </GridLayout>
          <GridLayout
            row="3"
            col="0"
            columns="80, *"
            rows="80"
            class="main-item"
            @tap="onToggleConnectModal"
          >
            <StackLayout col="0" row="0" width="40" height="40" class="add-connection-icon-wrraper">
              <Label class="add-connection-icon" marginTop="1.5" :text="!showConnectModal ? '+' : '⨯'" horizontalAlignment="center" verticalAlignment="center" />
            </StackLayout>
            <Label col="1" row="0" class="add-connection-text" :text="!showConnectModal ? 'Add Connection' : 'Back'" verticalAlignment="center" />
          </GridLayout>
        </GridLayout>
      </card-view>
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
            price: 88,
            profit: 80,
            date: new Date()
          },
          {
            price: 84,
            profit: 22,
            date: new Date()
          },
          {
            price: 95,
            profit: 11,
            date: new Date()
          },
          {
            price: 33,
            profit: 40,
            date: new Date()
          },
          {
            price: 70,
            profit: 30,
            date: new Date()
          },
          {
            price: 80,
            profit: 33,
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
            color: #414353;
          }
        }
        .savings-button-wrapper {
          flex: 1;
          align-items: center;
          .btn-free-energy {
            border-radius: 60px;
            background-color: #a0a1a9;
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
      border-radius: 20px;
      .connect-modal {
        flex: 2;
        justify-content: space-around;
        align-items: center;
      }
      .main-item {
        flex: 1;
        &.home-container {
          border-radius: 30px;
          padding-right: 10px;
        }
        .main-wrapper {
          flex: 1;
          .main-text {
            font-size: 20px;
            line-height: 40px;
            font-weight: bold;
            color: #414353
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
          background-color: #414353;
          border-radius: 50%;
          .add-connection-icon {
            margin-top: 5px;
            font-size: 25px;
            color: white;
          }
        }
        .add-connection-text {
          flex: 1;
          font-size: 20px;
          line-height: 40px;
          font-weight: bold;
          color: #414353;
        }
      }
    }
  }
</style>
