<template>
 <form class="content">
    <div class="in">
      <div class="col">
        <label>Szyfrowane słowo:</label>
        <input type="text" required v-model="word">
      </div>
      <div class="col">
        <label>Szyfr:</label>
        <input type="text" required v-model="code">
      </div>
    </div>
    <div class="in">
      <button @click="encrypt">
        zaszyfruj
      </button>
      <button @click="decrypt" style="background-color: #FECC61 ">
        odszyfruj
      </button>
    </div>
    <div class="in">
      <p>
        wynik:
        {{ result }}
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'DESForm',
  data () {
    return {
      word: '',
      code: '',
      result: ''
    }
  },
  methods: {
    encrypt () {
      this.result = this.code
    },
    decrypt () {
      this.result = 'grrrr'
    }
  }
}
</script>

<style scoped>

</style>
