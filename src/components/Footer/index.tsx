import Image from 'next/image';
import React from 'react';
import logo from 'assets/images/logo.svg';
import Container from '../Container';
import {
  FooterWrap,
  Content,
  Copy,
} from './styled';

function Footer() {
  return (
    <FooterWrap>
      <Container>
        <Content>
          <Image src={logo} alt="robo" />

          <Copy>
            {`© ${new Date().getFullYear()} SiteAlert All Rights Reserved.`}
          </Copy>

          <p>support@alert.site</p>
        </Content>
      </Container>
    </FooterWrap>
  );
}

export default Footer;
