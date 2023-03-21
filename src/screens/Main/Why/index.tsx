import Container from '@components/Container';
import Image from 'next/image';
import React from 'react';
import fastIcon from 'assets/icons/fast.svg';
import interfaceIcon from 'assets/icons/interface.svg';
import reputationIcon from 'assets/icons/reputation.svg';
import {
  Section,
  Text,
  Items,
  Icon,
} from './styled';

function Why() {
  return (
    <Section id="benefits">
      <Container>
        <Text>
          <h3>Why do you need it?</h3>
          <p>SiteAlert - reliable site availability monitoring</p>
        </Text>

        <Items>
          <div>
            <Icon>
              <Image src={fastIcon} alt="fast" />
            </Icon>
            <p>
              Robust site availability monitoring helps reduce
              site downtime and reduce losses due to lack of availability
            </p>
          </div>

          <div>
            <Icon>
              <Image src={interfaceIcon} alt="interface" />
            </Icon>
            <p>
              We offer a simple and user-friendly interface for adding sites and managing them
            </p>
          </div>

          <div>
            <Icon>
              <Image src={reputationIcon} alt="reputation" />
            </Icon>
            <p>
              SiteAlert helps you maintain the reputation of your website and business in general
            </p>
          </div>
        </Items>
      </Container>
    </Section>
  );
}

export default Why;
