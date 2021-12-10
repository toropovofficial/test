<template>
  <div class="Create">
    <mainHeader></mainHeader>
    <h1>create task</h1>
    <mainForm  ></mainForm>
  </div>
</template>

<script >
import Vue from 'vue'
import mainHeader from '../components/header.vue'
import mainForm from '../components/main-form.vue'
import moment from 'moment'
import 'moment-duration-format'
export default Vue.extend({
  components: {
    mainForm,
    mainHeader
  }

})
</script>
