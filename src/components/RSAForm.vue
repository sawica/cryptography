<template>
 <form class="content">
    <div class="in">
      <div class="col">
        <label>Szyfrowane słowo:</label>
        <input type="text" required v-model="word">
      </div>
      <div class="col">
        <label>Szyfr:</label>
        <input type="number" required v-model="code">
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
  name: 'RSAForm',
  data () {
    const p = 191n
    const q = 223n
    const n = p * q
    const phi = (p - 1n) * (q - 1n)
    const e = this.generateEncryptionExponent(phi)
    const d = this.computeDecryptionExponent(e, phi)
    // eslint-disable-next-line no-unused-vars
    const publicKey = { e, n }
    // eslint-disable-next-line no-unused-vars
    const secretKey = { d, n }
    return {
      publicKey: { e, n },
      secretKey: { d, n },
      word: '',
      code: null,
      result: ''
    }
  },
  methods: {
    encrypt () {
      // eslint-disable-next-line no-undef
      console.log('pub: ' + this.publicKey + ' sec: ' + this.secretKey)
      const m = this.textToNumber(this.word)
      // eslint-disable-next-line no-undef
      const { e, n } = this.publicKey

      if (m < 0n || m >= n) {
        throw new Error(`Condition 0 <= m < n not met. m = ${m}`)
      }

      if (this.gcd(m, n) !== 1n) {
        throw new Error('Condition gcd(m, n) = 1 not met.')
      }

      const c = m ** e % n

      // eslint-disable-next-line no-return-assign
      return this.result = c
    },
    decrypt () {
      console.log('pub: ' + this.publicKey + ' sec: ' + this.secretKey)
      let c
      // eslint-disable-next-line prefer-const
      c = this.code
      // eslint-disable-next-line no-undef
      const { d, n } = this.secretKey

      const m = c ** d % n

      // eslint-disable-next-line no-return-assign
      return this.result = this.numberToText(m)
    },
    textToNumber (word) {
      const asciiStr = encodeURIComponent(word)
      const chars = asciiStr.split('')

      const hexChars = chars.map((ch) =>
        ch.codePointAt(0).toString(16).padStart(2, '0')
      )

      const hexNumber = hexChars.join('')
      return BigInt(`0x${hexNumber}`)
    },
    numberToText (m) {
      let hexNumber = m.toString(16)

      if (hexNumber.length % 2 === 1) {
        hexNumber = '0' + hexNumber
      }

      let hexChars
      // eslint-disable-next-line prefer-const
      hexChars = hexNumber.match(/\w{2}/g)

      const chars = hexChars.map((hex) =>
        String.fromCodePoint(parseInt(hex, 16))
      )

      const asciiStr = chars.join('')
      return decodeURIComponent(asciiStr)
    },
    // eslint-disable-next-line no-unused-vars
    gcd (num1, num2) {
      let a = Math.abs(num1)
      let b = Math.abs(num2)
      while (a && b && a !== b) {
        if (a > b) {
          // eslint-disable-next-line no-self-assign
          [a, b] = [a - b, b]
        } else {
          // eslint-disable-next-line no-self-assign
          [a, b] = [a, b - a]
        }
      }
      return a || b
    },
    extendedGcd (a, b,
      x, y) {
      if (a === 0) {
        y = 1
        return b
      }
      const gcd = this.extendedGcd(b % a,
        a, x, y)
      x = y - (b / a) * x
      y = x

      return gcd
    },
    // eslint-disable-next-line no-unused-vars
    generateEncryptionExponent (phi) {
      let e = 47n

      while (this.gcd(e, phi) !== 1n) {
        e += 2n
      }

      return e
    },
    // eslint-disable-next-line no-unused-vars
    computeDecryptionExponent (e, phi) {
      let d = this.extendedGcd(e, phi).s

      while (d < 1n) {
        d += phi
      }

      return d
    }
  }
}
</script>

<style scoped>

</style>
