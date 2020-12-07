import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
    StyledHead,
    StyledTitle,
    StyledSubTitle,
    StyledSearch,
    StyledBlock,
    StyledContent,
    StyledButton,
    StyledIcon
} from './brands-category.styled'
import Textbox from '../../../../../shared/form/textbox'
import BrandsCategoryItem from './brands-category-item'
import Button from '../../../../../shared/button'
import { buttonColors, buttonSizes, buttonVariants } from '../../../../../../constants/button-configs'
import IconProvider from '../../../../../../providers/icon/icon-provider'

const BrandsCategory = ({
    categories = [{ title: "ماوس", id: 1 }, { title: "کیبورد", id: 2 }, { title: "دسته بازی", id: 3 }, { title: "هدست واقعیت مجازی", id: 4 }]
}) => {

    const { t } = useTranslation()
    const [term, setTerm] = useState('')
    const [categoriesArray, setCategoriesArray] = useState(categories || [])
    const [checkedCategories, setCheckedCategories] = useState([])
    const [showMore, setShowMore] = useState(false)

    const changeHandler = (e) => {
        setTerm(e.target.value);
        let newCategoriesArray = [...categories]

        newCategoriesArray = newCategoriesArray.filter((category) => {
            if (category.title.includes(e.target.value)) {
                return true
            }
        })
        setCategoriesArray([...newCategoriesArray])
    }

    const onChange = (id) => {
        let newCheckedCategories = [...checkedCategories, id]
        if (checkedCategories.find((checkedId) => checkedId === id)) {
            newCheckedCategories = newCheckedCategories.filter((checkedId) => checkedId !== id)
        }
        setCheckedCategories([...newCheckedCategories])
    }

    const expandHandler = () => {
        setShowMore(!showMore)
    }
    return (
        <Fragment>
            <StyledHead>
                <StyledTitle>{t("brandsView.category")}</StyledTitle>
                <StyledSubTitle>{t("brandsView.categoryTip")}</StyledSubTitle>
            </StyledHead>
            <StyledSearch>
                <Textbox
                    placeholder={t("brandsView.enterBrand")}
                    icon="search"
                    onChange={changeHandler}
                    value={term} />
            </StyledSearch>
            <StyledBlock>
                <StyledContent showMore={showMore}>
                    {
                        categoriesArray.map(({ id, title }) => {
                            return <BrandsCategoryItem key={id}
                                id={id} title={title}
                                onChange={onChange} />
                        })
                    }
                </StyledContent>
                <StyledButton>
                    <Button
                        size={buttonSizes.SMALL}
                        color={buttonColors.SECONDARY}
                        variant={buttonVariants.LINK}
                        text={!showMore ? t("brandsView.moreCategories") : t("close")}
                        onClick={expandHandler}
                    >
                        <StyledIcon as={IconProvider} icon={!showMore ? "arrow-down" : "arrow-up"} size="10px" />
                    </Button>
                </StyledButton>
            </StyledBlock>
        </Fragment>
    )
}

BrandsCategory.propTypes = {
    categories: PropTypes.array
}

export default BrandsCategory
