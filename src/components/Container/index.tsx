import React from 'react';
import styled from 'styled-components';

interface IContainer {
  children: React.ReactNode
}

const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

function Container({
  children,
}: IContainer) {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
}

export default Container;
