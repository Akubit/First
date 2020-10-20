<template>
  <div id="app" v-bind:style="{ backgroundImage: background }">
      <div class="background">
          <Navigation/>
          <router-view/>
          <footer>Made with 💜 by Élise Brodin</footer>
      </div>
  </div>
</template>

<script>
    import Navigation from '@/assets/components/Navigation'

    export default {
        name: "App.vue",
        components: {
            Navigation
        },
        data () {
          return {
            background: ''
          }
        }
    }
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #999;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz4gCjxyZWN0IHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyBmaWxsPScjZThmN2ZmJy8+CjxjaXJjbGUgY3g9JzEwJyBjeT0nMTAnIHI9JzEwJyBmaWxsPScjMDRhZmI4Jy8+IAo8Y2lyY2xlIGN4PSc2MCcgY3k9JzYwJyByPScxMCcgZmlsbD0nIzA0YWZiOCcvPiAKPC9zdmc+Cg==");

}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;


  .background {
    min-height: 100vh;
    background: linear-gradient(transparent, transparent);
    transition: background 200ms ease-in-out 300ms;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  footer {
    padding: 20px;
  }
}

#nav {
  padding: 30px;
  justify-self: flex-start;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
