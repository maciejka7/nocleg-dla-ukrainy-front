import styled from '@emotion/styled'
import { theme } from '@chakra-ui/react'
import { getBreakpoints } from '../../utils'

export const HeroSectionContainer = styled.div`

    
    width: 100%;
    /* background-color: gray; */
    display: flex;
    
    justify-content: space-evenly;
    flex-direction: column;
    
    text-align: center;
    /* grid-template-areas: 
        "copy"
        "form"
    ; */
    background-color: ${theme.colors.gray[600]};
    background: ${theme.colors.gray[50]};
    /* background: linear-gradient(90deg, ${theme.colors.gray[800]} 0%, ${theme.colors.blue[900]} 100%);        */
    margin-top: 20px;
    

    @media ${getBreakpoints.query.tablet} {}

    @media ${getBreakpoints.query.desktop} {
        
        width: 100%;
        /* grid-template-columns: 1fr 1fr;
        grid-template-areas: 
        "copy form"
    ; */
    }
`

export const ImageBG = styled.div`
    position: fixed;
    height: 38vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    top: 90px;

`


export const CopySection = styled.section`

    /* grid-area: copy; */
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    text-align: center;
    /* padding: ${theme.space[5]}; */

`

export const FormSection = styled.section`
    /* grid-area: form; */
`
