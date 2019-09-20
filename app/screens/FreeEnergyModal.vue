<template>
  <Page class="free-energy-modal">
    <StackLayout class="free-energy-modal-container">
      <Label
        class="btn-close"
        text="⨯"
        @tap="onCloseModal"
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
  @import '../app-variables';
  .free-energy-modal {
    .free-energy-modal-container {
      padding-left: 50px;
      padding-right: 50px;
      .btn-close {
        font-size: 60px;
        color: $text-color-gray;
      }
    }
  }
</style>
