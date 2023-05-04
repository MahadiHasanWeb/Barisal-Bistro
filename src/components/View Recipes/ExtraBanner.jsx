import React from 'react';
import LazyLoad from 'react-lazy-load';

const ExtraBanner = () => {
    return (
        <LazyLoad threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
            <div className="mt-10 md:mt-24 mb-5 md:mb-12 bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-[url(https://i.imgur.com/EHTyWjY.jpeg)]" >
                <div className="md:w-1/2">
                    <p className="font-bold text-sm uppercase">Services</p>
                    <p className="text-3xl font-bold">Food products</p>
                    <p className="text-2xl mb-10 leading-none">Transform your Experience with Barisal Bistro</p>
                </div>
            </div>
        </LazyLoad>
    );
};

export default ExtraBanner;