<template>
  <App msg="ALGORYTM RAIL FENCE"/>
  <form v-on:submit.prevent="encrypt">
  <div class="content">
<!--    <h1 style="margin-bottom: 0">ALGORYTM RAIL FENCE</h1>-->
    <div class="in">
      <div class="col">
        <p>SZYFROWANE SŁOWO:</p>
        <input v-model="form.name" type="text">
<!--/*        <input name="word" style="width: 400px">*/-->
      </div>
      <div class="col">
        <p>N:</p>
        <input v-model="form.valueN" type="number">
<!--        <input type="number" name="valueN" style="width: 100px">-->
      </div>
    </div>
    <div class="in">
<!--      <input type="button" @click="encrypt" value="ZASZYFRUJ">-->
<!--      ZASZYFRUJ-->
      <button >ZASZYFRUJ</button>
      <button style="background-color: #FECC61 ">ODSZYFRUJ</button>
    </div>
    <div class="in">
      <div class="col">
        <p>WYNIK:</p>
        <h2>{{ form.result }}</h2>
        <!--        <input name="result" style="width: 400px">-->
      </div>
    </div>
  </div>
  </form>
</template>

<script>
export default {
  word: 'RailFence',
  data: function () {
    return {
      form: {
        name: '',
        valueN: Number,
        result: ''
      }
    }
  },
  methods: {
    encrypt () {
      // eslint-disable-next-line no-undef
      data.form.result = data.form.name
      // const name = document.getElementById('name').value
      // const valueN = document.getElementById('valueN').value
      // let result = document.getElementById('result')
      // eslint-disable-next-line no-return-assign
      // return document.getElementById('result').target = name.target
    }
  }
}

</script>

<style scoped>
button {
  /*box-sizing: border-box;*/

/*position: absolute;*/
  font-family: JosefinSans-Light;
width: 255px;
height: 60px;
/*left: 0px;*/
/*top: 0px;*/

background: #A8CCCA;
      /*position: center;*/
  margin: auto auto auto auto;
  border: none;
}
input {
  /*box-sizing: border-box;*/

/*position: absolute;*/
/*width: inherit;*/
height: 60px;
/*left: 125px;*/
/*top: 94px;*/
  width: 300px;
background: #FFFFFF;
border: 1px solid #000000;
  /*margin-right: 20px;*/
}
.content {
  padding: 6em;
  /*position: center;*/
  gap: 50px;
  display: flex;
  flex-direction: column;
  /*border:  1px solid black;*/
}
.in {
    /*position: center;*/
  display: flex;
  /*justify-items: center;*/
  /*column-span: 70 30;*/
  /*column-count: 2;*/
  column-gap: 50px ;
  margin: 0 auto auto 0;
  float: left;
  /*width: 600px;*/
  /*position: fixed;*/
  flex-direction: row;
}
.col {
  display: flex;
  justify-items: left;
  flex-direction: column;
  /*align-items: center;*/
  /*width: fit-content;*/
}
</style>
