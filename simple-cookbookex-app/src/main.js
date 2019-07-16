import Vue from 'vue'
import DataSortingExample from './DataSortingExample.vue'
import FrogKiss from './FrogKiss.vue'
import CompExample from './components/basic/ComponentExample.vue'
import CompEmojiExample from './components/basic/ComponentEmojiAppEx.vue'
import ComponentBlabberEx from './components/datapassing/ComponentBlabberExample.vue'
import AjaxSimple from './ajaxcommunication/RemoteAjaxSimpleCall.vue'
import axios from 'axios'
import RegulatoryPathForm from './components/basic/RegulatoryPathForm.vue'



new Vue({
el: '#regform',
render: h => h(RegulatoryPathForm)
})

new Vue({
el: '#damsapp',
render: h => h(DataSortingExample)
})

import DataFilterExample from './DataFilterExample.vue'

new Vue({
el: '#app',
render: h => h(DataFilterExample)
})



import CurrencyExample from './CurrencyExample.vue'
new Vue({
el: '#currapp',
render: h => h(CurrencyExample)
})

new Vue({
el: '#frog',
render: h => h(FrogKiss)
})

Vue.component('light-bulb', {
functional: true,render (createElement) {
return createElement(
'div',
{ class: 'light-bulb' },
[
createElement('p', ' Eureka!')
]
)
}
})


new Vue(
    {
    el: '#compapp', 
    render: h => h(CompExample)   
    }
)

Vue.component('sound-icon', {
    template: "<span>{{soundEmojis[level]}}</span>",
    props: ['level'],
    data () {
    return {
    soundEmojis: ['One', 'Two', 'Three', 'Four']
    }
    }
})

new Vue({
el: '#emojiapp',
data: {
soundLevel: 0
},
render: h => h(CompEmojiExample)
})

var line = 0;

Vue.component('blabber', {
template: "<p>{{dialogue[currentLine]}}</p>",
data () {
return {
currentLine: 0,
dialogue: [
'hello',
'how are you?',
'fine thanks',
'let go drink!',
'alright, where?',
'to hellos bar',
'hello?']
}
},
mounted () {
setInterval(() => {
this.currentLine = line % this.dialogue.length
line += 1
}, 2000)
}
})

new Vue({
el: '#blabber',
render: h => h(ComponentBlabberEx)
})

new Vue({
el: '#remoteajax',
render: h => h(AjaxSimple)
})


import ValidationExample from './BasicValidationExample.vue'

new Vue({
el: '#validationexample',
render: h => h(ValidationExample)
})