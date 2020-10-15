import MainLayout from './components/layouts/main-layout';
import Home from './pages';
import Signin from './pages/signin';
import ProductDetail from './pages/product';
import Paths from './utils/paths';
import Signup from './pages/signup';
import Profile from './pages/profile'
import ProfileOrders from './pages/profile/orders'


const routes = [
    {
        path: Paths.signin.getRoute(),
        component: Signin
    },
    {
        path: Paths.signup.getRoute(),
        component: Signup
    },
    {
        component: MainLayout,
        routes: [
            {
                path: Paths.home.getRoute(),
                exact: true,
                component: Home
            },
            {
                path: Paths.product.detail().getRoute(),
                component: ProductDetail
            },
            {
                path: Paths.profile.home.getRoute(),
                exact: true,
                component: Profile
            },
            {
                path: Paths.profile.orders.getRoute(),
                component: ProfileOrders
            }
        ]
    }
];

export default routes;