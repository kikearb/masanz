import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from '../theme/rem';

const options = ['Inicio', 'Series TV', 'Películas', 'Más recientes', 'Mi lista'];

export const Menu = () => (
  <Wrapper>
    {options.map((option, index) => (
      <Option active={index === 0} href="#" key={index}>
        {option}
      </Option>
    ))}
  </Wrapper>
);

const Wrapper = styled.nav`
  font-size: ${rem(14)}rem;
`;

const Option = styled.a`
  color: #e5e5e5;
  margin-left: ${rem(12)}rem;
  margin-right: ${rem(12)}rem;

  ${p => p.active && css`
      color: white;
      font-weight: bold;
  `};

  &:hover {
    cursor: pointer;
    color: white;
  }
`;