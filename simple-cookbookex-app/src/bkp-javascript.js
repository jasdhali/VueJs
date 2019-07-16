import ComponentExample from './ComponentExample.vue'

Vue.component('light-bulb', {
template: `
<div class='light-bulb'>
<p> Eureka!</p>
</div>
`
})

new Vue({
el: '#compapp'
})