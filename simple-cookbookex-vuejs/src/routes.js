import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Student from './components/Student.vue';
import Redirect from './components/Redirect.vue';

const routes = [
    {path: '/' , component: Home, name: 'home'}
    ,{path: '/register' , component: Register, name: 'register'}
    ,{path: '/login' , component: Login, name: 'login'}
    ,{path: '/student/:id', component: Student, name: 'student' }
    ,{path: '/redirect', component: Redirect, name: 'redirect' }
];

export default  routes;