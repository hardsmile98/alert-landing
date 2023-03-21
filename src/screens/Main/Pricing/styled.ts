import styled from 'styled-components';
import check from 'assets/icons/check.svg';

const Section = styled.section`
  padding: 100px 0;

  @media (max-width: 600px) {
    padding-top: 20px;
  }
`;

const Text = styled.div`
  text-align: center;

  p {
    margin-top: 10px;
    color: #777;
    
    @media (max-width: 600px) {
      margin-top: 5px;
    }
  }
`;

const Items = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Item = styled.div<{urlImage: string}>`
  background-image: url(${(props) => props.urlImage});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border: 1px solid #e3e3e3;
  border-radius: 24px;
  flex-basis: 50%;
  padding: 30px;
`;

const Head = styled.div`
  p {
    color: #777777;
  }
`;

const Price = styled.div`
  margin: 15px 0;

  span { 
    font-size: 28px;
    font-weight: 500;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  p { 
    margin-top: 5px;
    display: flex;
    ::before {
      margin-right: 8px;
      content: "";
      display: inline-block;
      line-height: inherit;
      width: 20px;
      height: 25px;
      background-image: url(${check?.src});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

const Link = styled.a<{outlined?: boolean}>`
    background-color:  ${(props) => (props.outlined ? 'inherit' : '#1D1D1D')};
    color:  ${(props) => (props.outlined ? '#1D1D1D' : 'white')};
    border: ${(props) => (props.outlined ? '1px solid #1D1D1D' : 'none')};
    width: 100%;
    text-align: center;
    border-radius: 8px;
    display: inline-block;
    padding: 10px 30px;
    :hover {
        color: ${(props) => (props.outlined ? '#1D1D1D' : 'white')};
    }
`;

export {
  Section,
  Link,
  Description,
  Text,
  Items,
  Item,
  Head,
  Price,
};
