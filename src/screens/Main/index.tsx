import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import FAQ from './FAQ';
import Offer from './Offer';
import Pricing from './Pricing';
import Why from './Why';

function Main() {
  return (
    <>
      <Header />
      <Offer />
      <Why />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default Main;
