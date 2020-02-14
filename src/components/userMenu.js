import React from 'react'
import styled from 'styled-components'
import profile from '../assets/images/profile.png';

export const UserMenu = () => (
  <Wrapper>
  <ImageWrapper>
    <img src={profile} alt="Profile menu" />
  </ImageWrapper>
  <Arrow />
  </Wrapper>
)

const Wrapper = styled.div`
display: flex;
align-items: center;
`;

const ImageWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

const Arrow = styled.div`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #fff transparent transparent transparent;
`