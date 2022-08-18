/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { QUERIES } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label='Menu'>
        <UnstyledButton>
          <Icon onClick={onDismiss} id={'close'} strokeWidth={2}>
            Dismiss menu
          </Icon>
        </UnstyledButton>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  padding: 32px 22px;
  display: flex;
  width: 300px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-white);
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
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

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;

  &:hover {
    color: var(--color-gray-900);
  }
`

export default MobileMenu
