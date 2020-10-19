import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { StyledWrapper, StyledTitle } from "./drawer-menu-products.styled";
import ProductList from "./product-list";

const toppingOptions = [
  {
    name: "کالای دیجیتال",
    id: "1",
    subOptions: [
      {
        name: "بازی و سرگرمی و لوازم جانبی",
        id: "3",
        subOptions: [
          {
            name: "کنسول بازی",
            id: "4",
            subOptions: [],
          },
          {
            name: "هدست گیمینگ",
            id: "5",
            subOptions: [],
          },
        ],
      },
      {
        name: "گجت دیجیتال",
        id: "regular-id",
        subOptions: [],
      },
    ],
  },
  {
    name: "ابزار لوازم و تجهیزات",
    id: "2",
    subOptions: [
      {
        name: "تلوزیون",
        id: "9",
        subOptions: [],
      },
      {
        name: "باکس",
        id: "10",
        subOptions: [],
      },
    ],
  },
];

const DrawerMenuProducts = () => {
  const { t } = useTranslation();
  const cloneProducts=[...toppingOptions]
  const addDepth=(arr, depth = 0)=>{
    arr.forEach(obj => {
      obj.depth = depth
      addDepth(obj.subOptions, depth + 1)
    })
  }
  addDepth(cloneProducts)
  
  return (
    <StyledWrapper>
      <StyledTitle>{t("products")}</StyledTitle>
      <ProductList options={cloneProducts} root={true}  />
    </StyledWrapper>
  );
};

DrawerMenuProducts.propTypes = {};

export default React.memo(DrawerMenuProducts);
