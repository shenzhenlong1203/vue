<template>

  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
  </div>


</template>

<script>
  import TWEEN from 'tween'
  export default ({
    name: 'AnimateVue',
    data () {
      return {
        number: 0,
        animatedNumber: 0
      }
    },
    watch: {
      number: function (newValue, oldValue) {
        let vm = this
        function animate () {
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          }
        }

        new TWEEN.Tween({tweenNumber: oldValue})
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({tweenNumber: newValue}, 500)
          .onUpdate(function () {
            vm.animatedNumber = this.tweenNumber.toFixed(0)
          })
          .start()

        animate()
      }
    }
  })
</script>
