import MainLayout from "./components/layouts/main-layout";
import Home from "./pages";
import Signin from "./pages/signin";
import ProductDetail from "./pages/product";
import Paths from "./utils/paths";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Order from "./pages/order";
import ProfileOrders from "./pages/profile/orders";

import ClubLayout from "./components/layouts/club-layout";
import HomeClub from './pages/club'
import HistoryClub from "./pages/club/history";
import ScoreClub from "./pages/club/score";

const routes = [
  {
    path: Paths.signin.getRoute(),
    component: Signin,
  },
  {
    path: Paths.signup.getRoute(),
    component: Signup,
  },
  {
    component: MainLayout,
    routes: [
      {
        path: Paths.home.getRoute(),
        exact: true,
        component: Home,
      },
      {
        path: Paths.product.detail().getRoute(),
        component: ProductDetail,
      },
      {
        path: Paths.profile.home.getRoute(),
        exact: true,
        component: Profile,
      },
      {
        path: Paths.profile.orders.getRoute(),
        component: ProfileOrders,
      },
      {
        path: Paths.order.index.getRoute(),
        component: Order,
      },
      {
        path: Paths.club.home.getRoute(),
        component: ClubLayout,
        routes: [
          {
            path: Paths.club.home.getRoute(),
            exact: true,
            component: HomeClub,
          },
          {
            path: Paths.club.history.getRoute(),
            exact: true,
            component: HistoryClub,
          },
          {
            path: Paths.club.score.getRoute(),
            component: ScoreClub,
          }
        ]
      }
    ]
  }
];

export default routes;
