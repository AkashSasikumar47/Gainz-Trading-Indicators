"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>GAINZ | Your Ultimate Trading Indicator Resource</title>
        <meta name="description" content="Gainz Trading Indicators is your ultimate resource for a collection of technical indicators to enhance your trading strategies. Whether you're a beginner or an experienced trader, Gainz offers a range of indicators to help you make informed decisions." />
        <meta name="keywords" content="trading indicators, technical analysis, stock market, trading strategies, beginner trader, experienced trader" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;