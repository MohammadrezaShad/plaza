import MainLayout from './components/layouts/main-layout';
import Home from './pages';
import Signin from './pages/signin';


const routes = [
    {
        path: "/signin",
        component: Signin
    },
    {
        component: MainLayout,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            }
        ]
    }
];

export default routes;