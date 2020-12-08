import MainLayout from "./components/layouts/main-layout";
import Home from "./pages";
import Signin from "./pages/signin";
import ProductDetail from "./pages/product/[id]";
import Paths from "./utils/paths";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Order from "./pages/order";
import ProfileOrders from "./pages/profile/orders";
import Brands from "./pages/brands";
import BrandDetail from './pages/brand/[slug]'

import ClubLayout from "./components/layouts/club-layout";
import HomeClub from "./pages/club";
import HistoryClub from "./pages/club/history";
import ScoreClub from "./pages/club/score";
import CustomerRelationshipClub from "./pages/club/customer-relationship";

import NotFound from "./pages/404";

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
        path: Paths.brand.home.getRoute(),
        component: Brands,
      },
      {
        path: Paths.brand.detail().getRoute(),
        component: BrandDetail,
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
          },
          {
            path: Paths.club.CustomerRelationship.getRoute(),
            component: CustomerRelationshipClub,
          },
          {
            component: NotFound,
          },
        ],
      },
      {
        path: Paths.notFound.getRoute(),
        component: NotFound,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
