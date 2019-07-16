<template>
    <div id="frog">
    <button @click="kisses++"> Kiss!</button>
    Value of kisses is {{kisses}}
    <transition name="fade">
        <p v-if="kisses < 3" key="frog"> frog</p>
        <p v-if="kisses >= 3" key="princess"> princess</p>
    </transition>
</div>
</template>
<script>
    export default {
  name: 'frog',
  data () {
      return {
        kisses: 0
        }
    }
}
</script>

<style> 
    body {
        background: #20262E;
        padding: 20px;
        font-family: Helvetica;
    }
    
    #frog {
        background: #fff;
        border-radius: 2px;
        padding: 10px;
        transition: all 0.2s;
    }
    
    li {
        margin: 8px 0;
    }
    
    h2 {
        font-weight: bold;
        margin-bottom: 15px;
    }
    
    del {
        color: rgba(0, 0, 0, 0.3);
    }
    .ascending:after {
        content: "25B2"
    }
    .descending:after {
        content: "25BC"
    }
    .fade-enter-active, .fade-leave-active {
transition: opacity .5s
}
.fade-enter, .fade-leave-active {
opacity: 0
}
</style>