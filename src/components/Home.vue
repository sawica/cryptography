<template>
 <div class="content">
   <h1>WITAJ W APLIKACJI SZYFRUJĄCEJ</h1>
  <div class="choice-arrow">
    <img :src="left" alt="left">
      <h2>WYBIERZ ALGORYTM</h2>
  </div>
 </div>
</template>

<script>
import left from '@/assets/akar-icons_triangle-left.png'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  setup () {
    return {
      left
    }
  }
}
</script>

<style scoped>
.choice-arrow {
  /*position: fixed;*/
  flex-direction: row;
  display: flex;
  /*justify-items: right;*/
  justify-content: right;
  align-items: center;
  /*align-content: end;*/
  margin-right: 0;
  text-align: right;
}
h1 {
  text-align: center;
  /*margin-top: 50px;*/
  padding: 3rem;
}
h2 {
  text-align: right;
  margin-right: 0;
  padding: 0.3em;
}
.content {
  padding: 6em;
}
</style>
