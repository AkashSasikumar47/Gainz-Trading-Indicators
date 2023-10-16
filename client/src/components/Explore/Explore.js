import React from 'react';
import Card from '../Card/Card';

function Explore() {
    return (
        <div className="w-[1200px] h-[578px] px-16 py-3 flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="self-stretch h-[554px] p-4 bg-zinc-300 rounded-xl flex-col justify-between items-center flex">
                <div className="self-stretch p-3 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-black text-2xl font-medium font-['DM Sans']">Perfect for Beginners</div>
                </div>
                <div className="self-stretch h-[113px] p-3 flex-col justify-start items-start gap-4 flex">
                    <Card
                        title="Easy-Indicators-Beginner"
                        description="For those just starting, this repository offers beginner-friendly technical indicators coded in Pine Script and compatible with TradingView. Dive into the world of trading with confidence."
                    />
                </div>
            </div>

            <div className="self-stretch h-[554px] p-4 bg-zinc-300 rounded-xl flex-col justify-between items-center flex">
                <div className="self-stretch p-3 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-black text-2xl font-medium font-['DM Sans']">Elevate Your Game</div>
                </div>
                <div className="self-stretch h-[113px] p-3 flex-col justify-start items-start gap-4 flex">
                    <Card
                        title="Intermediate-Level-Indicators"
                        description="For traders looking to take it up a notch, these intermediate-level indicators provide insights into market trends, volatility, and potential price movements. Fine-tune your strategies and make more informed decisions."
                    />
                </div>
            </div>

            <div className="self-stretch h-[554px] p-4 bg-zinc-300 rounded-xl flex-col justify-between items-center flex">
                <div className="self-stretch p-3 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-black text-2xl font-medium font-['DM Sans']">For the Experts</div>
                </div>
                <div className="self-stretch h-[113px] p-3 flex-col justify-start items-start gap-4 flex">
                    <Card
                        title="Advanced-Level-Indicators"
                        description="Designed for the experienced, this repository offers a comprehensive collection of advanced technical indicators. Analyze price movements, identify trends, and predict potential market reversals."
                    />
                </div>
            </div>

            <div className="self-stretch h-[554px] p-4 bg-zinc-300 rounded-xl flex-col justify-between items-center flex">
                <div className="self-stretch p-3 justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-black text-2xl font-medium font-['DM Sans']">Customize Your Strategy</div>
                </div>
                <div className="self-stretch h-[113px] p-3 flex-col justify-start items-start gap-4 flex">
                    <Card
                        title="Custom Strategy Indicators v1 & V2"
                        description="Tailor your trading strategies with these custom indicators. Unlock your trading potential, make informed decisions, and succeed in the dynamic world of financial markets."
                    />
                </div>
            </div>
        </div>
    );
}

export default Explore;
