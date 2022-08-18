import React from 'react'
import styled from 'styled-components/macro'

import { QUERIES } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <header>
      <SuperHeader />
      <SuperHeaderComponent />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side>
          <MobileNav>
            <UnstyledButton>
              <Icon id={'search'} strokeWidth={1} />
              <VisuallyHidden>Search</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id='shopping-bag' strokeWidth={1} />
              <VisuallyHidden>Open cart</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id={'menu'} strokeWidth={1} />
              <VisuallyHidden>Open menu</VisuallyHidden>
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  )
}

const SuperHeaderComponent = styled.div`
  display: none;
  border-bottom: 2px solid var(--color-gray-700);

  @media ${QUERIES.tabletAndLess} {
    display: block;
  }
`

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(0.5rem, 8.5vw - 3.75rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndLess} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndLess} {
    display: flex;
    justify-content: flex-end;
    gap: 35px;
    margin-left: 35px;
  }

  @media ${QUERIES.phoneAndLess} {
    gap: 20px;
    margin-left: 20px;
  }
`

const Side = styled.div`
  flex: 1;
`

export default Header
