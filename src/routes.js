import MainLayout from './components/layouts/main-layout';
import Home from './pages';
import Signin from './pages/signin';
import ProductDetail from './pages/product';
import Paths from './utils/paths';



const routes = [
    {
        path: Paths.signin.getRoute(),
        component: Signin
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
            }
        ]
    }
];

export default routes;