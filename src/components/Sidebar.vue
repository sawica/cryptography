<template>
 <div class="sidebar">
   <router-link class="link" style="font-size: 28px; color: #FFB61D" to="/">HOME</router-link>
   <router-link class="link" to="/rail-fence">RAIL FENCE</router-link>
   <router-link class="link" to="/przestawienia-macierzowe-A">PRZESTAWIENIA MACIERZOWE A</router-link>
   <router-link class="link" to="/przestawienia-macierzowe-B">PRZESTAWIENIA MACIERZOWE B</router-link>
   <router-link class="link" to="/generator">GENERATOR</router-link>
   <router-link class="link" to="/des">DES</router-link>
   <router-link class="link" to="/rsa">RSA</router-link>
 </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
    float: left;
  /*float: right;*/
  /*position: fixed;*/
  z-index: 1;
  top: 150px;
  /*right: 0;*/
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
.link {

  cursor: pointer;
  position: relative;
  font-family: "JosefinSans-Light";
  font-size: 24px;
  text-decoration: none;
  color: black;
  text-align: left;
  user-select: none;

  margin: 0.4em 0;
  padding: 0.3em;
  border-radius: 0.25em;
  /*height: 2em;*/
  width: 200px;
}
.link:hover {
  color: #FFB61D;
}
.link:active {
  color: #FFB61D;
}
</style>
