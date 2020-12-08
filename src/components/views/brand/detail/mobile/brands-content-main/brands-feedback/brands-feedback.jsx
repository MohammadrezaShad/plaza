import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


import { StyledFeedbackWrap } from './brands-feedback.styled'
import FeedbackItem from '../../../../../../shared/feedback-item'

const BrandsFeedback = (
    {
        items = [{ name: "پرهام گیلانی", title: "پایه شارژ دسته بازی DualShock 4 مدل Dual Charging", date: "‏14 تیر 1399، 20:00", recommendetion: true, id: 1 }, { name: "پرهام گیلانی", title: "پایه شارژ دسته بازی DualShock 4 مدل Dual Charging", date: "‏14 تیر 1399، 20:00", recommendetion: false, id: 2 }]
    }
) => {
    return (
        <Fragment>
            {
                items.map(({ id, name, date, recommendetion, title }) => {
                    return (
                        <StyledFeedbackWrap key={id}>
                            <FeedbackItem
                                name={name}
                                title={title}
                                date={date}
                                recommendetion={recommendetion}
                                mobile={true}
                            />
                        </StyledFeedbackWrap>
                    )
                })
            }
        </Fragment>
    )
}

BrandsFeedback.propTypes = {
    items: PropTypes.array
}

export default BrandsFeedback
