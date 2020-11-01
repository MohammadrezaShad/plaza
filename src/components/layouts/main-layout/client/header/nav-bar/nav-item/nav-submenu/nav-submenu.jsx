import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    StyledWrapper,
    StyledNav,
    StyledItem,
    StyledButton,
    StyledContent
} from './nav-submenu.styled'
import NavSubmenuItem from './nav-submenu-item/nav-submenu-item'

const NavSubmenu = ({list}) => {
    list = [
        {
            selected:true,
            title:"کالای دیجیتال",
            items: [
                {
                    items:[
                        {
                            title:'لوازم جانبی موبایل و تبلت',
                            url:'/search/category-accessories',
                            items:[
                                {
                                    title:'پاور بانک',
                                    url:'/search/category-power-bank'
                                },
                                {
                                    title:'کیف و کاور',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'کابل و مبدل',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'شارژر',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'محافظ صفحه نمایش',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'نگهدارنده موبایل',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'باتری',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'هندزفری',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'قاب و شاسی موبایل',
                                    url:'/search/category-cover'
                                }
                            ]
                        }
                    ]
                },
                {
                    items:[
                        {
                            title:'لوازم جانبی کامپیوتر و لپ تاپ',
                            items:[
                                {
                                    title:'کیبورد',
                                    url:'/'
                                },
                                {
                                    title:'موس',
                                    url:'کابل و مبدل کامپیوتر'
                                },
                                {
                                    title:'کابل و مبدل کامپیوتر',
                                    url:'/'
                                },
                                {
                                    title:'هاب USB',
                                    url:'/'
                                },
                                {
                                    title:'اسپیکر رومیزی',
                                    url:'/'
                                },
                                {
                                    title:'ماوس پد',
                                    url:'/'
                                },
                                {
                                    title:'پایه خنک کننده لپ تاپ',
                                    url:'/'
                                }
                            ]
                        },
                    ]
                },
                {
                    items:[
                        {
                            title:'صوتی و تصویری و لوازم جانبی',
                            url:'/',
                            items:[
                                {
                                    title:'هدفون و هدست',
                                    url:'/'
                                },
                                {
                                    title:'هندزفری',
                                    url:'/'
                                },
                                {
                                    title:'اسپیکر',
                                    url:'/'
                                },
                                {
                                    title:'کابل و مبدل صوتی  و تصویری',
                                    url:'/'
                                },
                                {
                                    title:'محافظ برق چند راهی',
                                    url:'/'
                                }
                            ]
                        }
                    ]
                },
                {
                    items:[
                        {
                            title:'ذخیره سازی اطلاعات',
                            url:'/search/category-accessories',
                            items:[
                                {
                                    title:'فلش مموری',
                                    url:'/search/category-power-bank'
                                },
                                {
                                    title:'کیف و کاورهارد دیسک اکسترنال',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'کارت حافظه',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'کارت خوان',
                                    url:'/search/category-cover'
                                }
                            ]
                        },
                        {
                            title:'بازی و سرگرمی و لوازم جانبی',
                            url:'/search/category-accessories',
                            items:[
                                {
                                    title:'دسته بازی',
                                    url:'/search/category-power-bank'
                                },
                                {
                                    title:'ماوس گیمینگ',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'کنسول بازی',
                                    url:'/search/category-cover'
                                },
                                {
                                    title:'هدست گیمینگ',
                                    url:'/search/category-cover'
                                }
                            ]
                        }
                    ]
                },
                {
                    items:[
                        {
                            title:'گجت دیجیتال',
                            items: [
                                {
                                    title:'هدست واقعیت مجازی',
                                    url:'/',
                                },
                                {
                                    title:'مچ بند هوشمند',
                                    url:'/'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title:"لوازم و تجهیزات",
            items:[
                {
                    items:[
                        {
                            title:'لوازم جانبی کامپیوتر و لپ تاپ',
                            items:[
                                {
                                    title:'کیبورد',
                                    url:'/'
                                },
                                {
                                    title:'موس',
                                    url:'کابل و مبدل کامپیوتر'
                                },
                                {
                                    title:'کابل و مبدل کامپیوتر',
                                    url:'/'
                                },
                                {
                                    title:'هاب USB',
                                    url:'/'
                                },
                                {
                                    title:'اسپیکر رومیزی',
                                    url:'/'
                                },
                                {
                                    title:'ماوس پد',
                                    url:'/'
                                },
                                {
                                    title:'پایه خنک کننده لپ تاپ',
                                    url:'/'
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            title: "هنر، فیلم و موسیقی"
        },
        {
            title: "وسایل نقلیه"
        },
        {
            title: "کودک و نوزاد"
        },
        {
            title: "آرایشی و بهداشتی"
        },
        {
            title: "کتاب و نرم افزار"
        },
        {
            title: "مد و پوشاک"
        },
        {
            title: "خانه و آشپزخانه"
        },
        {
            title: "بازی و سرگرمی"
        },
        // {
        //     title: "لوازم پزشکی و سلامت"
        // },
    ]

    const [finalList, setFinalList] = useState(list)
    

    const mouseenterHandler = (index) => {
        let list = [...finalList];
        list.forEach(element => {
            element.selected = false;
        });
        
        list[index].selected = true;

        setFinalList(list);
    }

    return (
        <StyledWrapper>
            <StyledNav>
            {
                finalList.map((data,index) => (
                <StyledItem key={index} onMouseEnter={() => mouseenterHandler(index)} selected={!!data.selected}>
                    <StyledButton>{data.title}</StyledButton>
                </StyledItem>
                ))
            }
            </StyledNav>
            {
                finalList.map((data,index) => (
                <StyledContent key={index} selected={!!data.selected}>
                    <NavSubmenuItem list={data.items || []} />
                </StyledContent>
                ))
            }
                
        </StyledWrapper>
    )
}

NavSubmenu.propTypes = {
    list: PropTypes.array
}

export default NavSubmenu
