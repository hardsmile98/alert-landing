import styled from 'styled-components';

const Head = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: auto;

    @media (max-width: 600px) {
      width: 100px;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 10px;
`;

const Menu = styled.ul`
  font-size: 16px;
  display: flex;
  color: #1D1D1D;

  > li:not(:last-of-type) {
    margin-right: 25px;
  }

  @media (max-width: 600px) {
    font-size: 14px;

    > li:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Register = styled.a`
  background-color: #1D1D1D;
  font-size: 14px;
  color: white;
  border-radius: 8px;
  padding: 10px 15px;
  margin-left: 30px;
  :hover {
    color: white;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export {
  Head,
  Logo,
  Wrap,
  Menu,
  Navigation,
  Register,
};
