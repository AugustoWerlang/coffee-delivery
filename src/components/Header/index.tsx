import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContent, HeaderContainer, HeaderActions, Location, Cart } from './styles'


export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={logo} alt="" />
        </NavLink>
        <HeaderActions>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <Cart to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  )
}