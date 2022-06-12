<script>
import Sidebar from '@/components/Sidebar'
import circle1 from '@/assets/CIRCLES/Ellipse1.png'
import circle2 from '@/assets/CIRCLES/Ellipse2.png'
import circle3 from '@/assets/CIRCLES/Ellipse3.png'
import circle4 from '@/assets/CIRCLES/Ellipse4.png'
import circle5 from '@/assets/CIRCLES/Ellipse5.png'
import circle6 from '@/assets/CIRCLES/Ellipse6.png'
export default {
  components: { Sidebar },
  props: {
    msg: String
  },
  setup () {
    return {
      circle1, circle2, circle3, circle4, circle5, circle6
    }
  }
}
</script>
<template>
  <nav>
    <Sidebar/>
  </nav>
  <header>
    <h1 v-if="$route.name !== 'home'">ALGORYTM {{ $route.name }}</h1>
  </header>
<!--  <container class="main2">-->
    <img class="c1" :src="circle1" alt="circle1"/>
    <img class="c2" :src="circle2" alt="circle2"/>
    <img class="c3" :src="circle3" alt="circle3"/>
    <img class="c4" :src="circle4" alt="circle4"/>
    <div class="main">
      <router-view/>
    </div>
    <img class="c5" :src="circle5" alt="circle5"/>
    <img class="c6" :src="circle6" alt="circle6"/>
<!--  </container>-->
</template>

<style>
@font-face {
  font-family: 'JosefinSans-Light';
  src: local("JosefinSans-Light"),
  url(./fonts/JosefinSans-Light.ttf) format("truetype");
}
#app {
  font-family: JosefinSans-Light;
  text-transform: uppercase;
  font-size: 20px;
  /*position: fixed;*/
  /*position: center;*/
  /*width: 1728px;*/
  /*height: 1117px;*/
  width: auto;
  height: auto;
  background: #FFFFFF;

}

nav {
  position: absolute;
  width: 190px;
  height: 238px;
  left: 37px;
  top: 277px;
}
.main {
  position: absolute;
  width: 902px;
  height: 590px;
  /*margin-top: 300px;*/
  /*left: 483px;*/
  top: 277px;
    margin-left: 27%;

  box-shadow: -4px 0 250px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  border-radius: 50px;
}
.main2 {
  position: relative;
  width: auto;
  height: auto;
}
.c1 {
  /*position: relative;*/
  /*width: 427px;*/
  height: 70%;
  /*margin-right: ;*/
  margin-top: 5%;
  margin-left: 65%;
  /*left: 1187px;*/
  /*top: 113px;*/
}
.c2 {
  /*position: absolute;*/
  /*width: 165px;*/
  height: 100%;
  /*left: 1543px;*/
  /*top: 440px;*/
}
.c3 {
  /*position: ;*/
  /*width: 298px;*/
  height: 100%;
  /*left: 1327px;*/
  /*top: 681px;*/
}
.c4 {
  /*position: sticky;*/
  /*width: 142px;*/
  height: 100%;
  margin-top: 15%;
  margin-left: 30%;
  /*left: 1426px;*/
  /*top: 538px;*/
}
.c5 {
position: sticky;
/*width: ;*/
height: 100%;
  margin-left: 70%;
  margin-outside: 100%;
  /*margin-top: 0.7%;*/
/*left: 952px;*/
/*top: 863px;*/
}
.c6 {
  /*position: absolute;*/
/*width: px;*/
height: 200%;
/*left: 450px;*/
/*top: 440px;*/
}
h1 {
  text-align: center;
  font-size: 40px;
  /*margin: auto;*/
  padding: 3rem;
  font-variant-caps: all-petite-caps;
  /*position: absolute;*/
}
h2 {
  text-align: right;
  margin-right: 0;
  padding: 0.3em;
}
.content {
  padding: 6em;
}
header {
  position: fixed;
  margin-left: 27%;
  /*margin-right: 30%;*/
  margin-top: 120px;
  text-align: center;
}
button {
  /*box-sizing: border-box;*/

/*position: absolute;*/
  font-family: JosefinSans-Light;
  text-transform: uppercase;
  font-size: 22px;
  text-align: center;
  width: 300px;
  height: 60px;
  padding-top: 10px;
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
