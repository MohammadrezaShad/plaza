import MainLayout from './components/layouts/main-layout';
import Home from './pages';
import Signin from './pages/signin';
import Paths from './utils/paths';



const routes = [
    {
        path: Paths.signin(),
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