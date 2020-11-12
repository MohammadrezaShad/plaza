import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './loading-bar.styled'
import LoadingContext from '../../../context/loading-context'

const LoadingBar = ({step=5,time=1000}) => {
    const [loading, setLoading] = useState(0)
    const [loadingStep, setLoadingStep] = useState(step)
    const [loadingTime, setLoadingTime] = useState(time)
    const { loaded } = useContext(LoadingContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(loading + loadingStep)
        }, loadingTime);
        if (loaded) {
            setLoading(100)
            clearTimeout(timer)
        }else if (!loaded && loading>=80 && loading<=90){
            clearTimeout(timer)
        } else if (!loaded&&loading===100 ) {
            setLoading(0)
        }
        return () => clearTimeout(timer);
    }, [loading])

    return <StyledWrapper loading={loading} loaded={loaded}></StyledWrapper>
}

LoadingBar.propTypes = {

}



export default LoadingBar
