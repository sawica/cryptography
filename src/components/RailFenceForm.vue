<template>
  <form class="content">
    <div class="in">
      <div class="col">
        <label>Szyfrowane słowo:</label>
        <input type="text" required v-model="word">
      </div>
      <div class="col">
        <label>podaj n:</label>
        <input type="number" required v-model="valueN">
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
  name: 'RailFenceForm',
  data () {
    return {
      word: 'CRYPTOGRAPHY',
      valueN: 3,
      result: ''
    }
  },
  methods: {
    encrypt () {
      const n = this.valueN
      const len = this.word.length
      let temp = ''
      const word = this.word
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < (len / n).toFixed(2); j++) {
          if (i === 0) {
            const index = ((2 * n - 2) * j)
            if (index < len) {
              temp += word[index]
            }
            this.result = temp
          } else if (i === n - 1) {
            const index = ((2 * n - 2) * j) + n - 1
            if (index < len) {
              temp += word[index]
            }
            this.result = temp
          } else {
            const top = ((2 * n - 2) * j)
            let index = top - i
            if (index > 0 && index < len) {
              temp += word[index]
            }
            this.result = temp
            index = top + i
            if (index > 0 && index < len) {
              temp += word[index]
            }
            this.result = temp
          }
        }
      }
      this.result = temp
    },
    decrypt () {
      const n = this.valueN
      const len = this.word.length
      let temp = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      temp = temp.substring(0, len)
      const word = this.word
      let pom
      pom = 0
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < (len / n).toFixed(2); j++) {
          if (i === 0) {
            let index
            // eslint-disable-next-line prefer-const
            index = ((2 * n - 2) * j)
            if (index < len) {
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + word + ' ' + word[index] + '  pom: ' + pom)
              temp = temp.substring(0, index) + word[pom] + temp.substring(index + 1)
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + word + ' ' + word[index] + '  pom: ' + pom)
              pom++
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + word + ' ' + word[index] + '  pom: ' + pom)
            }
          } else if (i === n - 1) {
            let index
            // eslint-disable-next-line prefer-const
            index = ((2 * n - 2) * j) + n - 1
            if (index < len) {
              temp = temp.substring(0, index) + word[pom] + temp.substring(index + 1)
              pom++
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + word + ' ' + word[index] + '  pom: ' + pom)
            }
          } else {
            let top
            // eslint-disable-next-line prefer-const
            top = ((2 * n - 2) * j)
            let index
            index = top - i
            if (index > 0 && index < len) {
              temp = temp.substring(0, index) + word[pom] + temp.substring(index + 1)
              pom++
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + word + ' ' + word[index] + '  pom: ' + pom)
            }
            index = top + i
            if (index > 0 && index < len) {
              temp = temp.substring(0, index) + word[pom] + temp.substring(index + 1)
              pom++
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + word + ' ' + word[index] + '  pom: ' + pom)
            }
          }
        }
      }
      this.result = temp
    }
  }
}
</script>
