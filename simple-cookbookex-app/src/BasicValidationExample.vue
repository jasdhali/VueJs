<template>
    <div id="validationexample">
        <form @submit.prevent="vueSubmit">
            <div>
                <label>Name</label>
                <input type="text" required>
            </div>
            <div>
                <label>Email</label>
                <input type="email" required>
            </div>
            <div>
                <label>Submit</label>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'validationexample',
  methods: {
    vueSubmit () {
        console.info('fake AJAX request')
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
    
    #validationexample {
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
    .ascending:after {
        content: "25B2"
    }
    .descending:after {
        content: "25BC"
    }
</style>