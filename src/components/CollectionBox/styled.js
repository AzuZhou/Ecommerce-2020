import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: relative;
  width: ${props => (props.size ? '100%' : '50%')};
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  padding: ${props => (props.size ? '0' : '20px')};
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export const Content = styled(Link)`
  position: absolute;
`
