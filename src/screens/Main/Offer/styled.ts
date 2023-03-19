import styled from 'styled-components';
import bg from 'assets/images/bg_main.png';

const Section = styled.section`
  background-image: url(${bg?.src});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: auto;
  height: 660px;

  @media (max-width: 600px) {
    height: auto;
    background-position: center;
  }
`;

const Text = styled.div`
  padding: 160px 0 100px 0;
  text-align: center;
  color: #1D1D1D;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding-bottom: 200px;
  }

  h1 {
    margin-bottom: 20px;
  }

  p {
    color: #777777;
  }
   
  a {
    margin-top: 20px;
    background-color: #1D1D1D;
    color: white;
    border-radius: 8px;
    display: inline-block;
    padding: 10px 30px;
    :hover {
        color: white;
    }
  }
`;

export {
  Section,
  Text,
};
