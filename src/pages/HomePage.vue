<template>
<div>hello</div>
  <button @click="handleClick">Call Api</button>
</template>

<script>
import ApiFactory from "@/config/apiFactory";

export default {
  name: "HomePage",
  data(){
    return {
      list: ''
    }
  },
  methods:{
    handleClick(){
      ApiFactory
          .callApi('https://book-trading-platform.herokuapp.com/api/Book/all', {}, {})
          .then((res) => {
            console.log(res)
          })
          .catch(() => {
          });
    }
  }
}
</script>

<style scoped>

</style>