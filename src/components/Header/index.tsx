import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Localizacao">
          <MapPin size={24} />
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}