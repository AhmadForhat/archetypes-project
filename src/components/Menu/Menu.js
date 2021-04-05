import { useState } from 'react'
import { Link } from 'react-router-dom'

import { 
  Container,
  MenuIcon,
  ImageContainer,
  MenuContainer,
  LateralMenu,
  ExitContainer,
  ExitIcon,
  List
} from './styles'

const arrayMenu = [
  {
    title: 'Home',
    to: '/'
  }
]

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <Container>
        <ImageContainer />
        <MenuContainer onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon />
        </MenuContainer>
      </Container>
      <LateralMenu openMenu={openMenu}>
        <ExitContainer onClick={() => setOpenMenu(!openMenu)}>
          <ExitIcon />
        </ExitContainer>
          <ul>
            {arrayMenu.map(item => (
              <List>
                <Link 
                  to={item.to}
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  {item.title}
                </Link>
              </List>
            ))}
          </ul>
      </LateralMenu>
    </>
  )
}

export default Menu
