import Image from 'next/image';
import React from 'react';
import logo from 'assets/images/logo.svg';
import getEnvs from '@helpers/getEnvs';
import Container from '../Container';
import {
  Head,
  Logo,
  Wrap,
  Menu,
  Navigation,
  Register,
} from './styled';

const { URL_APP } = getEnvs();

function Header() {
  return (
    <Head>
      <Container>
        <Wrap>
          <Logo>
            <Image src={logo} alt="robo" />
          </Logo>

          <Navigation>
            <Menu>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </Menu>

            <Register href={`${URL_APP}/register`}>
              Register for FREE
            </Register>
          </Navigation>
        </Wrap>
      </Container>
    </Head>
  );
}

export default Header;
