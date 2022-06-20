<template>
  <form class="content">
    <div class="in">
      <div class="col">
        <label>Szyfrowane słowo:</label>
        <input type="text" required v-model="word">
      </div>
      <div class="col">
        <label>podaj klucz:</label>
        <input type="text" required v-model="key">
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
  name: 'MatrixFormA',
  data () {
    return {
      // word: 'CRYPTOGRAPHY',
      word: 'YPCTRRAOPGHY',
      key: '3-4-1-5-2',
      result: ''
    }
  },
  methods: {
    encrypt: function () {
      this.result = ''
      const word = this.word.replaceAll(' ', '')
      const sortKeys = this.key.replace(/-/g, '').split('').map(x => Number(x))
      sortKeys.sort((a, b) => a - b)
      const wordLength = this.word.length
      const maxKeyValue = sortKeys.at(-1)
      const temp = Array(maxKeyValue).fill(null).map(() => Array(maxKeyValue))
      let n = 0
      for (let i = 0; i < maxKeyValue; i++) {
        for (let j = 0; j < maxKeyValue; j++) {
          if (n < wordLength) {
            temp[i][j] = word[n]
            n++
          }
        }
      }
      const keys = this.key.replace(/-/g, '').split('').map(x => Number(x))
      for (let i = 0; i < maxKeyValue; i++) {
        for (let j = 0; j < maxKeyValue; j++) {
          if (temp[i][keys[j] - 1] != null) this.result += temp[i][keys[j] - 1]
        }
      }
      this.result.replaceAll(' ', '')
    },
    decrypt: function () {
      this.result = ''
      const word = this.word.replaceAll(' ', '')
      const sortKeys = this.key.replace(/-/g, '').split('').map(x => Number(x))
      sortKeys.sort((a, b) => a - b)
      const maxKeyValue = sortKeys.at(-1)
      const temp = Array(maxKeyValue).fill(null).map(() => Array(maxKeyValue))
      this.result = ''
      const keys = this.key.replace(/-/g, '').split('').map(x => Number(x))
      for (let i = 0; i < maxKeyValue; i++) {
        for (let j = 0; j < maxKeyValue; j++) {
          const keyNum = keys[j]
          const letterNum = i * maxKeyValue + j
          temp[i][keyNum] = word[letterNum]
        }
      }
      for (let row = 0; row < maxKeyValue; row++) {
        for (let col = 0; col <= maxKeyValue; col++) {
          if (temp[row][col] != null) this.result += temp[row][col]
        }
      }
      this.result.replaceAll(' ', '')
    }
  }
}
</script>
