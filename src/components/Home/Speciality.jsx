import React from 'react';

const Speciality = () => {
    return (
        <div>
            <div className="bg-[url(https://i.imgur.com/JZCPM5e.png)] bg-no-repeat bg-center bg-[length:100%_100%] md:bg-[length:500px_150%] mt-10 md:mt-24 mb-5 md:mb-12">
                <h3 className=" md:text-5xl text-[#393E46] text-3xl text-center font-bold">Our Speciality</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                <div className='px-5 py-8 md:p-7 border-solid border rounded-lg bg-[#fffcfc]'>
                    <img src='https://i.imgur.com/u6VEsSS.jpg' alt="" />
                    <p className="text-2xl mt-7 mb-2 font-bold text-[#393E46]">CHICKEN TIKKA</p>
                    <p className='text-xl text-[#393E46]'>We marinate chicken breast in yoghurt and lemons then cook it in our traditional oven Barisal Bistro.</p>
                </div>
                <div className='px-5 py-8 md:p-7 border-solid border rounded-lg bg-[#fffcfc]'>
                    <img src='https://i.imgur.com/cFHQENv.jpg' alt="" />
                    <p className="text-2xl mt-7 mb-2 font-bold text-[#393E46]">GOAT CURRY</p>
                    <p className='text-xl text-[#393E46]'>Goat curry is very special than any usual Bangladeshi curry, as its recipe is full of aromatic spices and rich in taste.</p>
                </div>
                <div className='px-5 py-8 md:p-7 border-solid border rounded-lg bg-[#fffcfc]'>
                    <img src='https://i.imgur.com/D6ItzY1.jpg' alt="" />
                    <p className="text-2xl mt-7 mb-2 font-bold text-[#393E46]">LAMB CHOPS</p>
                    <p className='text-xl text-[#393E46]'>We marinate spring lamb chops with the perfect blend of coriander, cumin, garlic, ginger, and fresh Bangladeshi spices.</p>
                </div>
            </div>
        </div>
    );
};

export default Speciality;