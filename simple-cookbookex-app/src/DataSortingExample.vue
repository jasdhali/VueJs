<template>
  <div id="damsapp">
    <h3>list of the largest dams</h3>
    <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Country</th>
            <th v-bind:class="order === 1 ? 'descending' : 'ascending' " @click="sort">Electricity</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dam in damsByElectricity">
                <td>{{dam.name}}</td>
                <td>{{dam.country}}</td>
                <td>{{dam.electricity}} MegaWatts</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'damsapp',
  data () {
      return {
        dams: [
{name: 'Nurek Dam', country: 'Tajikistan', electricity: 3200},
{name: 'Three Gorges Dam', country: 'China', electricity: 22500},
{name: 'Tarbela Dam', country: 'Pakistan', electricity: 3500},
{name: 'Guri Dam', country: 'Venezuela', electricity: 10200}
],
order: 1
        }
    },
methods: {
    nonPhysics (list) {
        return list.filter(exp => exp.field !== 'Physics')
    },
    lowCost (list) {
        return list.filter(exp => exp.cost <= 3)
    },
    sort () {
        this.order = this.order * -1
    }
},
computed: {
    damsByElectricity () {
        return this.dams.sort( (d1, d2) => (d2.electricity - d1.electricity) * this.order );
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
    
    #damsapp {
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
</style>