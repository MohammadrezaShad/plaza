import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './loading-bar.styled'
import LoadingContext from '../../../context/loading-context'

const LoadingBar = ({step=5,time=1000}) => {
    const [loading, setLoading] = useState(0)
    const [loadingStep, setLoadingStep] = useState(step)
    const [loadingTime, setLoadingTime] = useState(time)
    const { loaded,reset } = useContext(LoadingContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(loading + loadingStep)
        }, loadingTime);
        if (loaded&&!reset) {
            setLoading(100)
            clearTimeout(timer)
        }else if (!loaded && loading>=80){
            clearTimeout(timer)
        } else if (!loaded&&loading===100 &&reset) {
            setLoading(0)
        }
        return () => clearTimeout(timer);
    }, [loading,reset,loaded])

    return <StyledWrapper loading={loading} loaded={loaded} reset={reset}></StyledWrapper>
}

LoadingBar.propTypes = {

}



export default LoadingBar
