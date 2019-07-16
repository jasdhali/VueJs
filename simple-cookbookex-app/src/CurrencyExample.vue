<template>
<div id="currapp">
<h3>List of the currencies </h3>
<table>
<thead>
<tr>
<th>Item</th>
<th>Price</th>
</tr>
</thead>
<tbody>
<tr v-for="item in inventory">
<td>{{item.name}}</td>
<td class="price">{{item.price}}
</td>
</tr>
</tbody>
</table>
</div>
  </div>
</template>

<script>
export default {
  name: 'currapp',
  data () {
      return {
        inventory: [
            {name: 'tape measure', price: '7'},
            {name: 'stamp', price: '0.01'},
            {name: 'shark tooth', price: '1.5'},
            {name: 'iphone', price: '999'}
                ]
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
    
    #currapp {
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