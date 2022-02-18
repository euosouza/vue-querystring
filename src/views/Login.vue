<template>
  <div class="home">
    <h1>Login</h1>
    <h2>{{ cpf }}</h2>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';

export default Vue.extend({
  beforeRouteEnter: (to: any, from:any, next:any) => {
    console.log('BEFORE-ROUTER-ENTER NEXT');
    next((vm: any) => {
      if (vm.$route.query.cpf) {
        vm.cpf = vm.$route.query.cpf || ""
        delete vm.$route.query.cpf
        vm.$router.replace({ query: { cpf: undefined } }).catch(() => {})
      }
    })
  },
  // created() {
  //  this.$router.push('/a')
  // },
  // mounted() {
  //   // this.$router.push('/a');
  // },
  data() {
    return {
      cpf: "" as string,
    }
  }
})
</script>
