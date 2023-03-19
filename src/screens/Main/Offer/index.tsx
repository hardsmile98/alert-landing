import Container from '@components/Container';
import React from 'react';
import getEnvs from '@helpers/getEnvs';
import {
  Section,
  Text,
} from './styled';

const { URL_APP } = getEnvs();

function Offer() {
  return (
    <Section id="offer">
      <Container>
        <Text>
          <h1>We alert you when your website goes down</h1>
          <p>Monitoring the availability of your site.</p>
          <p>Get error results immediately by mail, instant messengers</p>
          <a href={`${URL_APP}/register`}>
            Trying free
          </a>
        </Text>
      </Container>
    </Section>
  );
}

export default Offer;
