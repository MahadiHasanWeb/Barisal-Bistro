import React from 'react';

const Header = () => {
    return (
        <div className='grid md:grid-cols-2 items-center mt-12 bg-[url(https://www.tandoorclarksville.com/wp-content/uploads/2022/03/main-banner-bg.jpg)] bg-cover bg-full p-4'>
            <div className="">
                <h1 className="md:text-6xl text-4xl font-bold mb-6 flex flex-wrap gap-3 md:gap-6 text-[#EEEEEE]">Transform your<br /><span>Experience with</span><br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#05d8e3]'>Barisal Bistro</span></h1>
                <p className='mb-8 text-[#EEEEEE]'>Welcome to Barisal Bistro, the online hub for all things culinary! Our website is dedicated to sharing the art and science of cooking with food enthusiasts, both novice and professional alike.</p>
            </div>
            <div className="">
                
            </div>
        </div>
    );
};

export default Header;