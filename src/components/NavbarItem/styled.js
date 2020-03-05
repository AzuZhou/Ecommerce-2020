import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { COLORS, FONT_SIZES } from 'utils/constants'

export const Container = styled(Link)`
  text-align: center;
  color: ${COLORS.black};
  font-size: ${FONT_SIZES.fontSize5};
  text-transform: uppercase;
  color: ${COLORS.black};
`
