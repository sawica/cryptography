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
      word: '',
      valueN: null,
      result: ''
    }
  },
  methods: {
    encrypt () {
      const n = this.valueN
      const len = this.word.length
      let temp = ''
      const text = this.word
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < (len / n).toFixed(2); j++) {
          if (i === 0) {
            let index
            // eslint-disable-next-line prefer-const
            index = ((2 * n - 2) * j)
            if (index < len) {
              temp += text[index]
            }
            this.result = temp
          } else if (i === n - 1) {
            let index
            // eslint-disable-next-line prefer-const
            index = ((2 * n - 2) * j) + n - 1
            if (index < len) {
              temp += text[index]
            }
            this.result = temp
          } else {
            let top
            // eslint-disable-next-line prefer-const
            top = ((2 * n - 2) * j)
            let index
            index = top - i
            if (index > 0 && index < len) {
              temp += text[index]
            }
            this.result = temp
            index = top + i
            if (index > 0 && index < len) {
              temp += text[index]
            }
            this.result = temp
          }
        }
      }
      this.result = temp
    },
    decrypt () {
      // this.result = 'grrrr'
      // for (let i; i < this.valueN; i++) { this.result += ' ' + this.name }
      const n = this.valueN
      const len = this.word.length
      let temp = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      temp = temp.substring(0, len)
      const text = this.word
      let pom
      pom = 0
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < (len / n).toFixed(2); j++) {
          if (i === 0) {
            let index
            // eslint-disable-next-line prefer-const
            index = ((2 * n - 2) * j)

            if (index < len) {
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + text + ' ' + text[index] + '  pom: ' + pom)
              temp = temp.substring(0, index) + text[pom] + temp.substring(index + 1)
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + text + ' ' + text[index] + '  pom: ' + pom)
              pom++
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + text + ' ' + text[index] + '  pom: ' + pom)
            }
          } else if (i === n - 1) {
            let index
            // eslint-disable-next-line prefer-const
            index = ((2 * n - 2) * j) + n - 1
            if (index < len) {
              temp = temp.substring(0, index) + text[pom] + temp.substring(index + 1)
              pom++
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + text + ' ' + text[index] + '  pom: ' + pom)
            }
          } else {
            let top
            // eslint-disable-next-line prefer-const
            top = ((2 * n - 2) * j)
            let index
            index = top - i
            if (index > 0 && index < len) {
              temp = temp.substring(0, index) + text[pom] + temp.substring(index + 1)
              pom++
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + text + ' ' + text[index] + '  pom: ' + pom)
            }
            index = top + i
            if (index > 0 && index < len) {
              temp = temp.substring(0, index) + text[pom] + temp.substring(index + 1)
              pom++
              console.log('temp ' + temp + ' ' + temp[index] + '  text: ' + text + ' ' + text[index] + '  pom: ' + pom)
            }
          }
        }
      }
      this.result = temp
    }
  }
}
</script>

<style scoped>
/*button {*/
/*  !*box-sizing: border-box;*!*/

/*!*position: absolute;*!*/
/*  font-family: JosefinSans-Light;*/
/*  text-transform: uppercase;*/
/*  font-size: 22px;*/
/*  text-align: center;*/
/*  width: 300px;*/
/*  height: 60px;*/
/*  padding-top: 10px;*/
/*!*left: 0px;*!*/
/*!*top: 0px;*!*/

/*background: #A8CCCA;*/
/*      !*position: center;*!*/
/*  margin: auto auto auto auto;*/
/*  border: none;*/
/*}*/
/*input {*/
/*  !*box-sizing: border-box;*!*/

/*!*position: absolute;*!*/
/*!*width: inherit;*!*/
/*height: 60px;*/
/*!*left: 125px;*!*/
/*!*top: 94px;*!*/
/*  width: 300px;*/
/*background: #FFFFFF;*/
/*border: 1px solid #000000;*/
/*  !*margin-right: 20px;*!*/
/*}*/
/*.content {*/
/*  padding: 6em;*/
/*  !*position: center;*!*/
/*  gap: 50px;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  !*border:  1px solid black;*!*/
/*}*/
/*.in {*/
/*    !*position: center;*!*/
/*  display: flex;*/
/*  !*justify-items: center;*!*/
/*  !*column-span: 70 30;*!*/
/*  !*column-count: 2;*!*/
/*  column-gap: 50px ;*/
/*  margin: 0 auto auto 0;*/
/*  float: left;*/
/*  !*width: 600px;*!*/
/*  !*position: fixed;*!*/
/*  flex-direction: row;*/
/*}*/
/*.col {*/
/*  display: flex;*/
/*  justify-items: left;*/
/*  flex-direction: column;*/
/*  !*align-items: center;*!*/
/*  !*width: fit-content;*!*/
/*}*/
</style>
