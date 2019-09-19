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
      <FlexboxLayout>
        <ReportChat :data="chatData" />
      </FlexboxLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import ReportChat from '../components/ReportChat'
  export default {
    components: {
      ReportChat
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
            // padding: auto 20px;
            border-radius: 60px;
            background-color: $btn-color-gray;
            color: white;
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
  }
</style>
