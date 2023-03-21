import styled from 'styled-components';
import bg from 'assets/images/bg_why.png';

const Section = styled.section`
  background-image: url(${bg?.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
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
  margin-top: 40px;
  display: flex;
  text-align: center;
  column-gap: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 30px;
  }
`;

const Icon = styled.div`
  margin-bottom: 10px;
  background-color: #1D1D1D;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export {
  Section,
  Text,
  Items,
  Icon,
};
