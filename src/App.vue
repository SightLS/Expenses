<template>
  <div id="app">
    <header>
      <div class="header conatiner">
        <nav>
          <router-link to="/main">main</router-link>
          <router-link to="/about">about</router-link>
          <router-link to="/404">404</router-link>
        </nav>
      </div>
    </header>
    <main class="conatiner">
      <router-view></router-view>
    </main>
    <transition name="fade">
      <ModalWindowAddPayment v-if="showModal" :settings="modalSetting"/>
    </transition>
  </div>
</template>

<script>
import ModalWindowAddPayment from '@/components/ModalWindowAddPayment'

export default {
  name: 'App',
  components: {
    ModalWindowAddPayment
  },
  data: () => ({
    showModal: false,
    modalSetting: {}
  }),
  methods: {
    modalOpen (settings) {
      this.modalSetting = settings
      this.showModal = true
    },
    modalClose () {
      this.showModal = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  box-sizing: border-box;
}
header {
  height: 60px;
  background-color: #32AB9B;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  nav {
    display: flex;
    justify-content: space-around;
    gap: 40px;
  }
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.conatiner {
  width: 1000px;
  margin: 0 auto;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
