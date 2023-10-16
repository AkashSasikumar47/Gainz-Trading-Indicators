import React from 'react';

function Card({ title, description }) {
    return (
        <div className="self-stretch h-[554px] p-4 bg-zinc-300 rounded-xl flex-col justify-between items-center flex">
            <div className="self-stretch p-3 justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-black text-2xl font-medium font-['DM Sans']">{title}</div>
            </div>
            <div className="self-stretch h-[113px] p-3 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-black text-2xl font-medium font-['DM Sans'] underline">{title}</div>
                <div className="self-stretch text-black text-base font-normal font-['DM Sans']">{description}</div>
            </div>
        </div>
    );
}

export default Card;
