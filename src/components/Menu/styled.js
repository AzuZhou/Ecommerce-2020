import styled from 'styled-components'

/* Utils */
import { MEDIA_SIZES } from 'utils/constants'

export const Container = styled.div`
  width: 100%;
  max-width: ${MEDIA_SIZES.laptop};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  img {
    width: 200px;
    object-fit: contain;
  }
`

export const MenuLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Cart = styled.button`
  margin-left: 60px;
  background: transparent;
  border: none;
  outline: none;

  svg {
    height: 30px;
    width: auto;
  }
`
