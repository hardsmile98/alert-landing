import styled from 'styled-components';

const FooterWrap = styled.footer`
  padding: 25px 0;
  border-top: 1px solid #e3e3e3;
`;

const Content = styled.div`
  @media (max-width: 600px) {
    > img {
      width: 100px;
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

const Copy = styled.p`
  @media (max-width: 600px) {
    display: none;
  }
`;

export {
  FooterWrap,
  Content,
  Copy,
};
