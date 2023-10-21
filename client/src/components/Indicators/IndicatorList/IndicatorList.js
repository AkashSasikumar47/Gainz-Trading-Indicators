// IndicatorList.js
import React from 'react';
import './IndicatorList.css';

const IndicatorList = () => {
    const indicatorData = [
        {
            title: 'Trading Volume',
            description: 'A basic indicator that tracks the number of shares or contracts traded for a given stock or asset within a specific time frame.',
            image: '/Assets/sample_images/img-1.jpg', // Replace with the path to your image
        },
        {
            title: 'Relative Strength Index (RSI)',
            description: 'A momentum oscillator that measures the speed and change of price movements, helping traders identify overbought and oversold conditions.',
            image: '/Assets/sample_images/img-2.jpg', // Replace with the path to your image
        },
        {
            title: 'Simple Moving Averages (SMA)',
            description: 'An elementary trend-following indicator that smoothens price data to identify and confirm trends over a defined period.',
            image: '/Assets/sample_images/img-3.jpg', // Replace with the path to your image
        },
        {
            title: 'Stochastic Oscillator',
            description: 'A momentum indicator that compares a security\'s closing price to its price range over a specific period, helping traders determine potential trend reversals.',
            image: '/Assets/sample_images/img-2.jpg', // Replace with the path to your image
        },
        {
            title: 'Exponential Moving Average (EMA)',
            description: 'A variation of the SMA, the EMA places more weight on recent price data, making it more responsive to recent price changes.',
            image: '/Assets/sample_images/img-3.jpg', // Replace with the path to your image
        },
        {
            title: 'Bollinger Bands',
            description: 'A volatility indicator that consists of a middle band with two outer bands that react to price volatility, providing insights into potential price reversals.',
            image: '/Assets/sample_images/img-1.jpg', // Replace with the path to your image
        },
    ];

    return (
        <div className="indicator-list-container">
            {indicatorData.map((indicator, index) => (
                <div key={index} className="indicator-card">
                    <img src={indicator.image} alt={indicator.title} className="indicator-image" />
                    <div>
                        <div className="indicator-title">{indicator.title}</div>
                        <div className="indicator-description">{indicator.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IndicatorList;
