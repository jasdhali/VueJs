<template>
  <div id="app">
    <h3>List of expensive experiments</h3>
    <ul>
        <li v-for="exp in experiments">
        {{exp.name}} ({{exp.cost}}m )
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
      return {
        experiments: [
{name: 'RHIC Ion Collider', cost: 650, field: 'Physics'},
{name: 'Neptune Undersea Observatory', cost: 100, field: 'Biology'},
{name: 'Violinist in the Metro', cost: 3, field: 'Psychology'},
{name: 'Large Hadron Collider', cost: 7700, field: 'Physics'},
{name: 'DIY Particle Detector', cost: 0, field: 'Physics'}
]
        }
    },
    methods: {
nonPhysics (list) {
return list.filter(exp => exp.field !== 'Physics')
},
lowCost (list) {
return list.filter(exp => exp.cost <= 3)
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
    
    #app {
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
</style>