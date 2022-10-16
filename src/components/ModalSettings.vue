<template>
  <div class="content" v-click-outside="close">
    <li @click="editExpenses">Edit</li>
  </div>
</template>

<script>

export default {
  name: 'ModalSettings',
  props: {
    settings: {
      type: Object,
      default: () => ({
        content: 'kek'
      })
    }
  },
  data: () => ({
    showModal: true
  }),
  computed: {
    paymentPage() {
      return this.settings.paymentPage
    },
    paymentIndex() {
      return this.settings.paymentIndex
    }
  },
  methods: {
    close() {
      if (this.showModal !== true) {
        this.$settings.hide()
      }
    },
    editExpenses() {
      this.$modal.show({
        title: 'Edit this payment',
        paymentPage: `${this.paymentPage}`,
        paymentIndex: `${this.paymentIndex}`
      })
    }
  },
  mounted() {
    setTimeout(() => {
      this.showModal = false
    }, 0)
  }
}

</script>

<style scoped>
.content {
  background-color: #FFFFFFFF;
  border: 1px solid #47AD9BFF;
  border-radius: 10px;
  position: absolute;
  width: 150px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  gap: 3px;
}

li:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
