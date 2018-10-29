import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MndQuiz from './views/MndQuiz.vue'
import About from './views/About.vue'
// import SidePage from './views/SidePage.vue'
// import SidePage1 from './views/side-page-sub/SidePage1.vue'
// import SidePage2 from './views/side-page-sub/SidePage2.vue'
// import SidePage3 from './views/side-page-sub/SidePage3.vue'
// import SidePage4 from './views/side-page-sub/SidePage4.vue'
import DataPage from './views/DataPage.vue'
import Login from './views/Login.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/home',
            name: 'home',
            component: Home
        }, {
            path: '/mndquiz',
            name: 'mndquiz',
            component: MndQuiz
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }, {
            path: '/datapage',
            name: 'dataPage',
            component: DataPage
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }

        //,
        // {
        //     path: '/sidepage',
        //     name: 'sidePage',
        //     component: SidePage,
        //     children: [
        //         {
        //             path: '/',
        //             component: SidePage1
        //         },
        //         {
        //             path: 'sidepage1',
        //             component: SidePage1
        //         },
        //         {
        //             path: 'sidepage2',
        //             component: SidePage2
        //         },
        //         {
        //             path: 'sidepage3',
        //             component: SidePage3
        //         },
        //         {
        //             path: 'sidepage4',
        //             component: SidePage4
        //         }
        //     ]
        // }
    ]
})
