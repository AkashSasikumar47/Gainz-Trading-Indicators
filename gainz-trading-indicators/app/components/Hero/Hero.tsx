import React from 'react'

const Hero = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <p className="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">
                    Introducing
                </p>
                <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Revolutionary way to build the web
                </h2>
                <p className="max-w-screen-md text-gray-500 md:text-lg">
                    This is a section of some simple filler text, also known as placeholder
                    text. It shares some characteristics of a real written text but is random
                    or otherwise generated.
                </p>
            </div>
        </div>
    )
}

export default Hero