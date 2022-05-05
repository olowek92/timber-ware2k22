import React, { useState } from 'react'
import { 
  NavbarItems,
  MenuIcon,
  NavbarList,
  NavbarListItem,
  NavbarListItemAnchor
} from './Navbar.styles'
import { MenuItems } from './MenuItems'

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <NavbarItems>
      <MenuIcon onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} style={{
          color: '#E1CCB0',
          fontSize: '2rem'
        }}></i>
      </ MenuIcon>
      <NavbarList active={clicked}>
          {MenuItems.map((item, index) => (
            <NavbarListItem key={index}>
              <NavbarListItemAnchor href={item.url}>{item.title}</ NavbarListItemAnchor>
            </ NavbarListItem>
          ))}
      </ NavbarList>
    </ NavbarItems>
  )
}

export default Navbar