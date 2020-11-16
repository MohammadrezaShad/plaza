import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './loading-bar.styled'
import LoadingContext from '../../../context/loading-context'

const LoadingBar = ({ step = 5, time = 500 }) => {
    const [loading, setLoading] = useState(0)
    const [loadingStep, setLoadingStep] = useState(step)
    const [loadingTime, setLoadingTime] = useState(time)
    const { loaded, reset } = useContext(LoadingContext)
    useEffect(() => {
        let timer
        if (reset && !loaded && loading < 80) {
             timer = setTimeout(() => {
                setLoading(loading + loadingStep)
            }, loadingTime);
        } else if (reset && !loaded && loading === 100) {
            setLoading(0)
        } else if (!reset && loaded) {
            setLoading(100)
            timer && clearTimeout(timer)
        }
        return () => {
           timer && clearTimeout(timer);
          };

    }, [loading, reset, loaded])

    return <StyledWrapper loading={loading} loaded={loaded} reset={reset}></StyledWrapper>
}
LoadingBar.propTypes = {

}



export default LoadingBar
