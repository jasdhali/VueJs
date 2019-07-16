<template>
    <div id="remoteajax">
        <h2>Advice of the day</h2>
        <p>{{advice}}</p>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'remoteajax',
        data()  { return { advice: 'loading...'} }, 
        created () {
            axios.get('http://localhost:8181/advice').then(
                response => {
                    this.advice = response.data.slip.advice;
                    console.log('>>>>>>>>>>>response. status>>' + response.status    );
                    }
                    );
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
    #remoteajax {
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