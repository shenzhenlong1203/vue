<template>
  <div class="hello">
    <h1>{{title | uppercase}}</h1>
    <ul>
      <li>
        {{content | lowercase}}
      </li>
      <li v-for="item in items" v-on:click="toggle(item)">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        title: 'Welcome to Your Vue.js App',
        content: 'Welcome to shen zhen long\'s vue',
        items: [
          {text: 'one', done: true},
          {text: 'two', done: false}
        ]
      }
    },
    filters: {
      uppercase: function (value) {
        if (!value) {
          return ''
        }
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      lowercase: function (value) {
        if (!value) {
          return ''
        }
        value = value.toString()
        return value.charAt(0).toLowerCase() + value.slice(1)
      }
    },

    methods: {
      toggle: function (item) {
        item.done = !item.done
        console.log(item.done)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
