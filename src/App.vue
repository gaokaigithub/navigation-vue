<template>
  <div id="app">
    <SearchForm id="search-form"></SearchForm>
    <SiteList id="site-list"></SiteList>
    <transition name="bounce">
      <AddForm id="add-form" v-if="eventBus.addFormOpen"></AddForm>
    </transition>
  </div>
</template>

<script>
  import SearchForm from "./components/SearchForm"
  import SiteList from "./components/SiteList"
  import AddForm from "./components/AddForm"
  import Vue from 'vue'

  export default {
    name: 'App',
    components: {
      SearchForm,
      SiteList,
      AddForm
    },
    data() {
      return {
        eventBus: new Vue({
          data() {
            return {
              addFormOpen: false
            }
          }
        })
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/Reset";
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  html, body {
    height: 100vh;
    overflow: hidden;
  }
  body {
    background-image: url("../static/images/wallpaper-1.png");
    background-repeat: no-repeat;
  }
  #app {
    #search-form {
      margin-top: 150px;
      @media (min-width: 993px) {
        margin-top: 40vh;
      }
    }
    #site-list {
      margin-top: 50px;
    }
    #add-form {
    }
  }

</style>
