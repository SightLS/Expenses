<template>
  <div class="content" v-click-outside="close">
    <li @click="editExpenses">Edit {{ content }}</li>
    <li>Delete</li>
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
    content() {
      return this.settings.content
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
        title: 'Edit this payment'
      })
    },
    deleteExpenses() {
    //  хз пока
    }
  },
  mounted () {
    setTimeout(() => {
      this.showModal = false
    }, 0)
  }
}

</script>

<style scoped>
.content {
  background-color: #32AB9B;
  border: 1px solid black;
  position: absolute;
  width: 180px;
  height: 70px;
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
