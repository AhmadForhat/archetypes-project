import styled from 'styled-components'
import { Menu, X } from 'react-feather'

import themes from '../themes'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background-color: ${themes.colors.primary};
`

export const MenuContainer = styled.button`
  outline: ${themes.colors.secundary};

  @media(min-width: 800px) {
    display: none;
  }
`

export const MenuIcon = styled(Menu)`
  color: ${themes.colors.white};
`

export const ImageContainer = styled.div`
  background-color: ${themes.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 100px;
`

export const LateralMenu = styled.div`
  z-index: 2000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: ${themes.colors.white};
  display: ${({openMenu}) => openMenu ? 'flex' : 'none'} ;
  flex-direction: column;
  align-items: center;
  
  @media(min-width: 800px) {
    display: none;
  }
`

export const ExitContainer = styled.button`
  align-self: flex-end;
  padding: 12px 20px;
`

export const ExitIcon = styled(X)`
  color: ${themes.colors.grey};
`

export const List = styled.li`
  list-style-type: none;
` 