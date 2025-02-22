import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Container from './container';
import companylogo from './company-logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderTitle>
          <Link to="/">
            <img src={companylogo} alt="logo" width="80" />
          </Link>
        </HeaderTitle>
        <HeaderNavList>
          <HeaderNavListItem>
            <Link to="/about">About</Link>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <Link to="/ourvision">Our Vision</Link>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <Link to="/ourteam">Our Team</Link>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <Link to="/contact">Contact</Link>
          </HeaderNavListItem>
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

const HeaderNavList = ({ children }) => {
  return (
    <StyledNav>
      <StyledNavList>{children}</StyledNavList>
    </StyledNav>
  );
};

const HeaderNavListItem = ({ children }) => {
  return <StyledNavListItem>{children}</StyledNavListItem>;
};

const StyledHeader = styled.header`
  padding-top: var(--size-300);
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: var(--size-400);
    color: inherit;
  }
`;

const StyledNav = styled.nav`
  position: static;
  padding: 0;
  background: transparent;
  backdrop-filter: unset;
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
`;

const StyledNavListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
  @media screen and (max-width: 700px) {
    &:not(:last-of-type) {
      margin-right: .5rem;
    }
  }
  & a {
    color: inherit;
    text-transform: uppercase;
    font-size: var(--size-300);
    text-decoration: none;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 700px) {
    & a {
      font-size: 0.7rem;
    }
  }
`;
