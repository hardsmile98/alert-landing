/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import React from 'react';
import logo from 'assets/images/logo.svg';

function Header() {
  return (
    <header>
      <div>
        <Image src={logo} alt="robo" />
      </div>

      <div>
        <ul>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

        <a href="#">
          Register for FREE
        </a>
      </div>
    </header>
  );
}

export default Header;
