<template>
  <div id="app">
    <div class="wrapper-btn">
      <router-link to="/">HOME</router-link>
      <br />
      <router-link to="/login">LOGIN</router-link>
      <br />
      <router-link to="/a">
        ROTA A
      </router-link>
      <br />
      <router-link to="/b">ROTA B</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  }

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.wrapper-btn {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper-btn a{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  background: rgb(240, 240, 240);
  margin: 10px;
}

.wrapper-btn a:hover {
  background: rgb(209, 209, 209);
}
</style>
