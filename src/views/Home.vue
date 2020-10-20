<template>
  <div class="home">
  <!-- <div class="home" v-bind:style="{ backgroundImage: backgroundValue }"> -->
    <main class="generator">
        <h1>SVG Background generator</h1>
        <h2></h2>
        Paste your svg content in the field below and preview your CSS3 background
        <!-- Example: -->
        <pre>
&#60;svg xmlns='http://www.w3.org/2000/svg' width='15' height='15'&#62; 
    &#60;rect width='50' height='50' fill='#282828'/&#62; &#60;circle cx='3' cy='4.3' r='1.8' fill='#393939'/&#62; 
    &#60;circle cx='3' cy='3' r='1.8' fill='black'/&#62; 
    &#60;circle cx='10.5' cy='12.5' r='1.8' fill='#393939'/&#62; 
    &#60;circle cx='10.5' cy='11.3' r='1.8' fill='black'/&#62; 
&#60;/svg&#62;
        </pre>
        <form>
            <textarea v-model="svgContent" name="" id="svgContent" cols="30" rows="10"></textarea>
        </form>
        <div id="codeDisplay">
            <h2>Here's the background you generated</h2>
            <div id="backgroundCode">
              <span class="generator-placeholder-final" v-if="sanitized === ''"><pre>Background content will appear here....</pre></span>
              <pre v-if="sanitized !== ''">background-image: <span v-text="backgroundValue"></span></pre>
            </div>

        </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      svgContent: '',
      sanitized: null,
      backgroundValue: ''
    }
  },
  watch: {
    svgContent: { 
      
      immediate: true, 
      handler() { 
        this.sanitized = this.svgContent.replace(/>\s{1,}</g, `><`).replace(/\s{2,}/g, ` `).replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)
        this.backgroundValue = `url("data:image/svg+xml,${this.sanitized}")`
        console.log(this.$parent.$el) 
        if (this.backgroundValue !== '') {this.$parent.background = this.backgroundValue}
      }, 
    },
  },
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    height: 100%;
    width: 100%;
    
  }
  
  .generator {
    width: 60%;
    min-width: 500px;
    background: #f8f8f8;
    border: #222 solid 20px;
    padding: 20px 50px;

    pre {
      width: 75%;
      white-space: pre-wrap;
      display: inline-block;
      margin: 0 auto 25px;
      background: #222;
      color: #ddd;
      border-radius: 10px;
      padding: 20px;
    }
    
    textarea{
      width: 75%;
      padding: 20px;
      margin: 30px;
      border: none;
      box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
      border-radius: 10px;
    }
  }

</style>
