<template>
<div id="condwarn">
    <textarea
        v-model="memeText"
        :class="{ warn: longText }"
        :maxlength="limit">
    </textarea>
    {{memeText.length}}
</div>
</template>

<script>
export default {
  name: 'condwarn',
  data () {
      return {
          memeText: 'What if I told you ' + 'CSS can do that',
          limit: 50
        }
    },
    computed: {
    longText () {
        if (this.limit - this.memeText.length <= 10) {
            return true
        } else {
            return false
        }
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
    .warn {
    background-color: mistyrose
    }
    #condwarn {
        background: #fff;
        border-radius: 2px;
        padding: 10px;
        transition: all 0.2s;
    }
    .price {
        text-align: right
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
</style>