import React from 'react';
import './IndicatorList.css';

const IndicatorList = () => {
    const indicatorData = [
        {
            title: 'Trading Volume',
            description: 'A basic indicator that tracks the number of shares or contracts traded for a given stock or asset within a specific time frame.',
            image: '/Assets/indicators/Trading Volume.png',
            githubLink: 'https://github.com/AkashSasikumar47/Easy-Indicators-Beginner.git',
        },
        {
            title: 'Simple Moving Averages (SMA)',
            description: 'An elementary trend-following indicator that smoothens price data to identify and confirm trends over a defined period.',
            image: '/Assets/indicators/Simple Moving Averages (SMA).png',
            githubLink: 'https://github.com/AkashSasikumar47/Easy-Indicators-Beginner.git',
        },
        {
            title: 'Exponential Moving Average (EMA)',
            description: 'A variation of the SMA, the EMA places more weight on recent price data, making it more responsive to recent price changes.',
            image: '/Assets/indicators/Exponential Moving Average (EMA).png',
            githubLink: 'https://github.com/AkashSasikumar47/Easy-Indicators-Beginner.git',
        },
        {
            title: 'Relative Strength Index (RSI)',
            description: 'A momentum oscillator that measures the speed and change of price movements, helping traders identify overbought and oversold conditions.',
            image: '/Assets/indicators/Relative Strength Index (RSI).png',
            githubLink: 'https://github.com/AkashSasikumar47/Easy-Indicators-Beginner.git',
        },
        {
            title: 'Stochastic Oscillator',
            description: 'A momentum indicator that compares a security\'s closing price to its price range over a specific period, helping traders determine potential trend reversals.',
            image: '/Assets/indicators/Stochastic Oscillator.png',
            githubLink: 'https://github.com/AkashSasikumar47/Easy-Indicators-Beginner.git',
        },
        {
            title: 'Bollinger Bands',
            description: 'A volatility indicator that consists of a middle band with two outer bands that react to price volatility, providing insights into potential price reversals.',
            image: '/Assets/indicators/Bollinger Bands.png',
            githubLink: 'https://github.com/AkashSasikumar47/Intermediate-Level-Indicators.git',
        },
        {
            title: 'Moving Average Convergence Divergence (MACD)',
            description: 'A trend-following momentum indicator that shows the relationship between two moving averages of an asset\'s price.',
            image: '/Assets/indicators/Moving Average Convergence Divergence (MACD).png',
            githubLink: 'https://github.com/AkashSasikumar47/Intermediate-Level-Indicators.git',
        },
        {
            title: 'Average True Range (ATR)',
            description: 'A market volatility indicator that helps traders identify the average range between high and low prices over a specific period.',
            image: '/Assets/indicators/Average True Range (ATR).png',
            githubLink: 'https://github.com/AkashSasikumar47/Intermediate-Level-Indicators.git',
        },
        {
            title: 'Commodity Channel Index (CCI)',
            description: 'A momentum-based oscillator that helps traders identify overbought and oversold conditions and potential trend reversals.',
            image: '/Assets/indicators/Commodity Channel Index (CCI).png',
            githubLink: 'https://github.com/AkashSasikumar47/Intermediate-Level-Indicators.git',
        },
        {
            title: 'Ichimoku Cloud',
            description: 'A comprehensive indicator that provides information about support and resistance levels, trend direction, and momentum in one chart.',
            image: '/Assets/indicators/Ichimoku Cloud.png',
            githubLink: 'https://github.com/AkashSasikumar47/Advanced-Level-Indicators.git',
        },
        {
            title: 'Fibonacci Retracement',
            description: 'A technical analysis tool that helps traders identify potential support and resistance levels based on Fibonacci ratios.',
            image: '/Assets/indicators/Fibonacci Retracement.png',
            githubLink: 'https://github.com/AkashSasikumar47/Advanced-Level-Indicators.git',
        },
        {
            title: 'Parabolic SAR (Stop and Reverse)',
            description: 'An indicator that provides potential entry and exit points for traders, helping them lock in profits and limit losses.',
            image: '/Assets/indicators/Parabolic SAR (Stop and Reverse).png',
            githubLink: 'https://github.com/AkashSasikumar47/Advanced-Level-Indicators.git',
        },
        {
            title: 'Aroon Oscillator',
            description: 'A trend-following indicator that helps traders identify when a new trend is beginning and how strong it is.',
            image: '/Assets/indicators/Aroon Oscillator.png',
            githubLink: 'https://github.com/AkashSasikumar47/Advanced-Level-Indicators.git',
        },
        {
            title: 'On-Balance Volume (OBV)',
            description: 'A momentum indicator that helps traders identify potential changes in price direction based on volume changes.',
            image: '/Assets/indicators/On-Balance Volume (OBV).png',
            githubLink: 'https://github.com/AkashSasikumar47/Advanced-Level-Indicators.git',
        },
        {
            title: 'Relative Momentum Index (RMI)',
            description: 'An indicator that helps traders identify potential changes in momentum and potential trend reversals.',
            image: '/Assets/indicators/Relative Momentum Index (RMI).png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v1.git',
        },
        {
            title: 'Adaptive Moving Average (AMA)',
            description: 'An indicator that adjusts its sensitivity based on market conditions, helping traders adapt to changing trends.',
            image: '/Assets/indicators/Adaptive Moving Average (AMA).png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v1.git',
        },
        {
            title: 'Supertrend Indicator',
            description: 'A trend-following indicator that helps traders identify potential entry and exit points based on market trends.',
            image: '/Assets/indicators/Supertrend Indicator.png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v1.git',
        },
        {
            title: 'Chandelier Exit',
            description: 'An indicator that helps traders identify potential stop-loss levels and potential exit points for trades.',
            image: '/Assets/indicators/Chandelier Exit.png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v1.git',
        },
        {
            title: 'Trend Strength Index (TSI)',
            description: 'A momentum-based indicator that helps traders identify the strength and direction of a trend.',
            image: '/Assets/indicators/Trend Strength Index (TSI).png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v1.git',
        },
        {
            title: 'Awesome Oscillator',
            description: 'An indicator that helps traders identify potential reversals and changes in market momentum.',
            image: '/Assets/indicators/Awesome Oscillator.png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v2.git',
        },
        {
            title: 'Cumulative Volume Index',
            description: 'A market momentum indicator that helps traders identify potential trend reversals based on volume.',
            image: '/Assets/indicators/Cumulative Volume Index.png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v2.git',
        },
        {
            title: 'Hull Moving Average',
            description: 'A variation of the simple moving average that aims to reduce lag and provide a smoother representation of price movements.',
            image: '/Assets/indicators/Hull Moving Average.png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v2.git',
        },
        {
            title: 'Moon Phases',
            description: 'An indicator that provides information on moon phases and their potential influence on market sentiment and trends.',
            image: '/Assets/indicators/Moon Phases.png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v2.git',
        },
        {
            title: 'Visible Average Price',
            description: 'An indicator that calculates the average price of a trading asset over a specified period, helping traders identify potential price levels.',
            image: '/Assets/indicators/Visible Average Price.png',
            githubLink: 'https://github.com/AkashSasikumar47/Custom-Strategy-Indicators-v2.git',
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
                        <a
                            href={indicator.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="visit-link"
                        >
                            Visit 🚀
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IndicatorList;
