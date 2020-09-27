import React from 'react';
import { matchPath } from 'react-router-dom';
import Home from './pages/home.jsx';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';

import Signin from './pages/signin'
import EmptyLayout from './components/EmptyLayout'
import SearchPage, { loadData } from './pages/product/searchPage';
import { RenderRoutes } from './utils/routing';
import MainLayout from './components/MainLayout';
import DetailPage, { loadData as detailLoadData, routeKey as detailRouteKey } from './pages/product/detailPage';
import CartPage from './pages/cartPage';
import BrandsPage from './pages/brandsPage';

const ROUTES = [
  {
    path: "/signin",
    key: "SIGNIN",
    exact: true,
    component: Signin,
    layout: EmptyLayout
  },
  {
    path: "/",
    key: "APP",
    component: props => (
        <MainLayout>
          {props.routes && <RenderRoutes {...props}/>}
        </MainLayout>
    ),
    routes :[
      {
        path: "/",
        key: "APP_HOME",
        exact: true,
        component: Home,
      },
      {
        path: "/aboutus",
        key: "APP_ABOUT_US",
        component: AboutUs
      },
      {
        path: "/contactus",
        key: "APP_CONTACT_US",
        component: ContactUs
      },
      {
        path: "/search",
        key: "APP_SEARCH",
        component: SearchPage,
        loadData: loadData
      },
      {
        path: "/product/:id",
        key: detailRouteKey,
        component: DetailPage,
        loadData: detailLoadData
      },
      {
        path: "/cart",
        key: "APP_CART",
        component: CartPage
      },
      {
        path: "/brands",
        key: "APP_BRANDS",
        component: BrandsPage
      }
     ]
  }
  // {
  //   path: "/app",
  //   key: "APP",
  //   component: props => {
  //       if (!localStorage.getItem("user")) {
  //         alert("You need to log in to access app routes");
  //         return <Redirect to={"/"} />;
  //       }
  //       return <RenderRoutes {...props} />;
  //     },
  //   routes: [
  //     {
  //       path: "/app",
  //       key: "APP_ROOT",
  //       exact: true,
  //       component: () => <h1>App Index</h1>,
  //     },
  //     {
  //       path: "/app/page",
  //       key: "APP_PAGE",
  //       exact: true,
  //       component: () => <h1>App Page</h1>,
  //     },
  //   ],
  // },
];

export default ROUTES;


export const findRoute = (url, routes) => {
  let route;

  for(let i = 0, length = routes.length; i < length; i++){
    if (routes[i].routes) {
      route = findRoute(url, routes[i].routes);
    }
  }
  
  if (!route) {
    route = routes.find(route => matchPath(url, route));
  }
  return route;
}

export const findRouteByKey = (key, routes) => {
  let route;

  for(let i = 0, length = routes.length; i < length; i++){
    if (routes[i].routes) {
      route = findRouteByKey(key, routes[i].routes);
    }
  }
  
  if (!route) {
    route = routes.find(route => route.key === key);
  }
  return route;
}