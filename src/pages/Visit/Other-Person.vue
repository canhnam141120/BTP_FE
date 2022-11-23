<template>
<Layout>
  <main style="flex-grow: 1">
    <div class="body">
      <div class="container">

      </div>
    </div>
  </main>
</Layout>
</template>

<script>
import Layout from "../../components/Layout";
export default {
  name: "Other-Person",
  components: {Layout}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  background: #EFECE3;
}

.body {
  background: #EFECE3;
}

.body .container {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
}

</style>