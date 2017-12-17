<template>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'

  export default ({
    name: 'AutoQuestion',
    data () {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question: function (newQuestion) {
        this.answer = 'Waiting for you to stop typing...' + newQuestion
        this.getAnswer()
      }
    },
    methods: {
      /*  `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
       在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
       AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
       `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
       请参考：https://lodash.com/docs#debounce */
      getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark ?. ;-)'
            return
          }
          this.answer = 'Thinking...'
          let vm = this
          let request = this.question.substring(0, this.question.length - 1)
          axios.get('http://www.tuling123.com/openapi/api?key=ac45d7c766f0470691dc62d14fc6e588&info=' + request)
            .then(function (response) {
              console.log(response)
              vm.answer = _.capitalize(response.data.text)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        // 这是我们为判定用户停止输入等待的毫秒数
        500
      )
    }
  })
</script>
