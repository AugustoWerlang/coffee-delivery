import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  padding: 2rem 0;
  height: 6.5rem;
  z-index: 9999;
  background: ${(props) => props.theme['background']};
  top: 0px;
  width: 100%;
`

export const HeaderContent = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0;
  padding: 0 2rem;
`

export const HeaderActions = styled.nav`
  display: flex;
  gap: 0.75rem;
`

export const Location = styled.button`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple']};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  cursor: pointer;
`

export const Cart = styled(NavLink)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow']};
  padding: 0.5rem;
  border-radius: 6px;
`