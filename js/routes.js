import homepage from './cmps/homepage.cmp.js'
import about from './cmps/about.cmp.js'
import bookApp from './cmps/book-app.cmp.js'
import bookDetails from './cmps/book-details.cmp.js'

const myRoutes = [
    {
        path: '/',
        component: homepage
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;