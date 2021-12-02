<template>
<div class="div"></div>
</template>

<script lang="">
import Vue from 'vue'
// import moment from 'moment'
import test from '../../store/modules/testModule'
export default Vue.extend({
  name: 'tes',
  mounted () {
    console.log(test.getData())
    test.show('hello')
    console.log(test.getData())
    //   class Product {
    //     constructor (name, speed) {
    //       this.name = name
    //       this.speed = speed
    //     }

    //     get speeds () {
    //       return this.speed
    //     }

    //     getName () {
    //       return this.name
    //     }
    //   }
    //   const tesla = new Product('tesla')
    //   const bmw = new Product('bmw')
    //   console.log(tesla, bmw)
    //   class OtherProduct extends Product {
    //     constructor (name, speed, price) {
    //       super(name, speed)
    //       this.price = price
    //     }

    //     get newName () {
    //       return this.price + 8
    //     }

  //     set newName (ss) {
  //       this.price = ss
  //     }
  //   }
  //   const myCar = new OtherProduct('mazda', 400, 300)
  //   myCar.newName = 'alex'
  //   console.log(myCar.newName)
  //   console.log(myCar)
  }
  // methods: {
  //   test () {
  //     this.text.a.b = `${moment().milliseconds()}nums       ${Math.random()}`
  //   },
  //   test2 () {
  //     this.text2 = `${moment().milliseconds()}nums`
  //   },
  //   test3 () {
  //     this.text3 = `${moment().milliseconds()}nums`
  //   },
  //   test4 (second, first) {
  //     console.log(first, second)
  //   }
  // },
  // watch: {
  //   text: {
  //     handler: function (second, first) { console.log(first, second) }
  //   },
  //   text2: {
  //     handler: function (second, first) { console.log(first, second) }
  //   },
  //   text3: [
  //     {
  //       handler: function (second, first) { console.log(first, second) }
  //     },
  //     'test4',
  //     function handler2 (second, first) {
  //       console.log(first, second)
  //     }
  //   ]
  // }
})
</script>

<style scoped lang="scss">
.div {
  color: red;
  .div2 & {
    color: #fff;
  }
}
</style>
