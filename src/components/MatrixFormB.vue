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
  name: 'MatrixFormB',
  data () {
    return {
      word: 'HERE IS A SECRET MESSAGE',
      // word: 'HECISSGRAARMSSEEETEE',
      key: 'CONVENIENCE',
      result: '',
      type: 'encrypt'
    }
  },
  methods: {
    arrayGenerator: function () {
      let word = this.word
      word = word.replace(/ /g, '')
      const key = this.key
      const keys = key.split('').sort()
      // eslint-disable-next-line no-array-constructor
      const keysNum = Array()
      console.log(keys, keysNum)
      key.split('').forEach(letter => {
        keysNum.push(keys.findIndex(element => element === letter) + 1)
      })
      for (let i = keysNum.length; i > 0; i--) {
        const count = keysNum.slice(0, i).filter(x => x === keysNum[i]).length
        // eslint-disable-next-line no-unused-expressions
        count > 0 ? keysNum[i] += count : keysNum[i]
      }
      const wordArray = Array((word.length / keysNum.length | 0) + 1).fill(null).map(() => Array(keysNum.length))
      let index = 0
      for (let i = 0; i < (word.length / keysNum.length | 0) + 1; i++) {
        for (let j = 0; j < keysNum.length; j++) {
          if (this.type === 'encrypt') {
            wordArray[i][j] = word[index]
            index++
          } else if (index < word.length) {
            wordArray[i][j] = '#'
            index++
          }
        }
      }
      return { wordArray: wordArray, keysNum: keysNum }
    },
    encrypt: function () {
      this.type = 'encrypt'
      const { wordArray, keysNum } = this.arrayGenerator('encode')
      this.result = ''
      for (let i = 0; i <= keysNum.length; i++) {
        this.result += wordArray.map(x => x[keysNum.findIndex(el => el === i + 1)]).join('')
      }
    },
    decrypt: function () {
      this.type = 'decrypt'
      const { wordArray, keysNum } = this.arrayGenerator('decode')
      let index = 0
      for (let i = 0; i < keysNum.length; i++) {
        for (let j = 0; j < (this.word.length / keysNum.length | 0) + 1; j++) {
          console.log(wordArray[j])
          if (wordArray[j][keysNum.findIndex(el => el === i + 1)] === '#') {
            wordArray[j][keysNum.findIndex(el => el === i + 1)] = this.word[index]
            index++
          }
        }
      }
      this.result = ''
      for (let i = 0; i < (this.word.length / keysNum.length | 0) + 1; i++) {
        for (let j = 0; j < keysNum.length; j++) {
          if (wordArray[i][j] != null) this.result += wordArray[i][j]
        }
      }
    }
  }
}
</script>
