import React from 'react';
import styled from 'styled-components';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderContainer>
        <h1 aria-level="1">Carousel Test</h1>
      </HeaderContainer>
    );
  }
}

export default Header;

const HeaderContainer = styled.div`
background-color: #E9EEE6;
h1{
  font-size: 2rem;
  padding: 2rem;
  margin: 0;
}
`;
