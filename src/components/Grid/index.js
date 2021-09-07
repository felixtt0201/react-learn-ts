import React from 'react';

// style
import { Wrapper, Content } from './Grid.style';

// Grid Component
const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;
