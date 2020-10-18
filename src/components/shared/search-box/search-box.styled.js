import styled from 'styled-components'


const Wrapper = styled.form`
    max-width:${({mobile})=>mobile ? '100%':'660px'};
    position:relative;
`

export {
    Wrapper
}