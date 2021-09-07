import React from 'react';

// style
import { Wrapper, Content } from './Grid.style';

//Types
type Props = {
  header: string;
};

// Grid Component
const Grid: React.FC<Props> = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;
