import styled from 'styled-components'

export const Wrapper = styled.div<{ align: 'center' | 'right' | 'left' }>`
    background: rgba(0,0,0,.25);
    border-radius: 8px;
    padding: 16%;
    text-align: ${props => props.align};
`

export const Title = styled.h2`
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`