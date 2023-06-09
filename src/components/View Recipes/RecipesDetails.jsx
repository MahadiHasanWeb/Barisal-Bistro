import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Recipes from './Recipes';
import ExtraBanner from './ExtraBanner';
import { FaRegThumbsUp } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';

const RecipesDetails = () => {
    const data = useLoaderData();
    const { chef_name, chef_picture, bio, likes, recipes_number, experience, food } = data;

    return (
        <div>
            <div className="bg-[url(https://i.imgur.com/JZCPM5e.png)] bg-no-repeat bg-center bg-[length:100%_100%] md:bg-[length:500px_150%] mt-10 md:mt-24 mb-5 md:mb-12">
                <h3 className=" md:text-5xl text-[#393E46] text-3xl text-center font-bold">Chef Details</h3>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-6 md:gap-10 bg-[#EEEEEE] mt-12 p-4 md:p-8'>
                <div className="">
                    <h1 className="md:text-4xl text-3xl font-bold text-[#393E46] mb-6">Chef {chef_name}</h1>
                    <p className="text-xl text-[#393E46] flex items-center gap-3"> <FaRegThumbsUp /> {likes}</p>
                    <p className="text-xl text-[#393E46]">Numbers of recipes: {recipes_number} items</p>
                    <p className='text-xl text-[#393E46]'>Years of experience: {experience} Years +</p>
                    <p className=' text-[#393E46]'>{bio}</p>
                </div>
                <div >
                    <LazyLoad threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                        <img src={chef_picture} alt="" className="" />
                    </LazyLoad>
                </div>
            </div>
            <div className="bg-[url(https://i.imgur.com/JZCPM5e.png)] bg-no-repeat bg-center bg-[length:100%_100%] md:bg-[length:500px_150%] mt-10 md:mt-24 mb-5 md:mb-12">
                <h3 className=" md:text-5xl text-[#393E46] text-3xl text-center font-bold">Chef Recipes</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ms-[9px] md:ms-0">
                {
                    food.map(RecipesData => <Recipes
                        key={RecipesData.id}
                        RecipesData={RecipesData}
                    ></Recipes>)
                }
            </div>
            <ExtraBanner></ExtraBanner>
        </div>
    );
};

export default RecipesDetails;