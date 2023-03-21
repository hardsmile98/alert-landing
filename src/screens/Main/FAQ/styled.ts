import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 0;

  @media (max-width: 600px) {
    padding-top: 20px;
  }
`;

const Text = styled.div`
  p {
    margin-top: 10px;
    color: #777;
    
    @media (max-width: 600px) {
      margin-top: 5px;
    }
  }
`;

const Item = styled.div`
  margin-top: 15px;
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 20px;
  
  p {
    margin-top: 5px;
  }
`;

export {
  Section,
  Text,
  Item,
};
