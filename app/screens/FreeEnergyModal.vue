<template>
  <Page class="free-energy-modal">
    <StackLayout
      class="free-energy-modal-container"
      paddingLeft="20"
      paddingRight="20"
    >
      <Label
        class="btn-close"
        text="⨯"
        @tap="onCloseModal"
      />
      <Image src="~/assets/gift.png" width="200" height="200" marginBottom="10" />
      <Label
        horizontalAlignment="center"
        class="energy-title"
        text="Free Energy"
      />
      <Label
        marginTop="30"
        paddingLeft="30"
        paddingRight="30"
        textWrap="true"
        horizontalAlignment="center"
        class="energy-description"
        text="Invite friends to Ohm. Once they sign up, you'ill both get $20 off your next utility bill."
      />
      <Button
        marginTop="40"
        height="80"
        class="btn-invite-friends"
        text="Invite Friends"
      />
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      onCloseModal() {
        this.$modal.close()
      }
    }
  };

</script>

<style lang="scss">
  .free-energy-modal {
    .free-energy-modal-container {
      .btn-close {
        font-size: 60px;
        color: #414353;
      }
      .energy-title {
        font-size: 25px;
        color: #414353;
        font-weight: bold;
      }
      .energy-description {
        font-size: 18px;
        color: #414353;
        text-align: center;
      }
      .btn-invite-friends {
        font-size: 25px;
        border-radius: 25px;
        background-color: #414353;
        color: white;
        font-weight: bold;
      }
    }
  }
</style>
