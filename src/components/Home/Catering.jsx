import React from 'react';
import LazyLoad from 'react-lazy-load';

const Catering = () => {
    return (
        <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
            <div className='bg-[url(https://i.imgur.com/Y0XjGAP.jpg)] bg-auto bg-no-repeat p-4 md:p-8 md:mt-24 mb-5 md:mb-12'>
                <div className="bg-[url(https://i.imgur.com/JZCPM5e.png)] bg-no-repeat bg-center bg-[length:100%_100%] md:bg-[length:500px_150%] mt-10 md:mt-24 mb-5 md:mb-12">
                    <h3 className=" md:text-5xl text-3xl text-[#393E46] text-center font-bold">Catering</h3>
                </div>
                <p className='mb-8 text-[#EEEEEE] font-semibold'>Barisal Bistro offers a variety of catering options for events of all sizes. No matter what kind of event you are having, whether it’s a birthday, sweet sixteen, office party, or anything else, Barisal Bistro Clarksville is your best choice. Catering orders are handled with the utmost care to ensure the food at your event has the same high quality standards we uphold in the restaurant. Think of us for your next event!</p>
            </div>
        </LazyLoad>
    );
};

export default Catering;