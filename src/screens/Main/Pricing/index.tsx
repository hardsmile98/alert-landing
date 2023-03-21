/* eslint-disable camelcase */
/* eslint-disable react/no-unescaped-entities */
import Container from '@components/Container';
import React from 'react';
import bg_free from 'assets/images/bg_free.png';
import bg_pro from 'assets/images/bg_pro.png';
import getEnvs from '@helpers/getEnvs';

import {
  Section,
  Link,
  Description,
  Text,
  Items,
  Item,
  Head,
  Price,
} from './styled';

const { URL_APP } = getEnvs();

function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <Text>
          <h3>
            Affordable prices for everyone
          </h3>
          <p>Pause or cancel anytime</p>
        </Text>

        <Items>
          <Item urlImage={bg_free.src}>
            <Head>
              <h5>FREE PLAN</h5>
              <p>Good for hobby projects. No credit card required!</p>
            </Head>

            <Price>
              <span>$0</span>
              /month
            </Price>

            <Link
              outlined
              href={`${URL_APP}/register`}
            >
              Trying free
            </Link>

            <Description>
              <h6>What's included</h6>

              <p>Monitor 1 website</p>
              <p>20 min. monitoring interval</p>
              <p>HTTP, ping monitor</p>
              <p>Only email alert channel</p>
            </Description>
          </Item>

          <Item urlImage={bg_pro.src}>
            <Head>
              <h5>PRO PLAN</h5>
              <p>For those who just need more.</p>
            </Head>

            <Price>
              <span>$15</span>
              /month
            </Price>

            <Link href={`${URL_APP}/register?plan=pro`}>
              Get started
            </Link>

            <Description>
              <h6>What's included</h6>

              <p>Unlimited monitors websites</p>
              <p>3 min. monitoring interval</p>
              <p>HTTP, port & ping monitor, SSL</p>
              <p>All alert channel</p>
              <p>Priority support</p>
            </Description>
          </Item>
        </Items>
      </Container>
    </Section>
  );
}

export default Pricing;
