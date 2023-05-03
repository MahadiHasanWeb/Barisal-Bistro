import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Recipes from './Recipes';

const RecipesDetails = () => {
    const data = useLoaderData();
    // console.log(data)
    const { chef_name, chef_picture, bio, likes, recipes_number, experience, food } = data;
    // const { id, chef_picture } = useParams();
    return (
        <div >
            <div className="bg-[url(https://i.imgur.com/JZCPM5e.png)] bg-no-repeat bg-center bg-[length:100%_100%] md:bg-[length:500px_150%] mt-10 md:mt-24 mb-5 md:mb-12">
                <h3 className=" md:text-5xl text-[#393E46] text-3xl text-center font-bold">Chef Details</h3>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-6 md:gap-10 bg-[#7E90FE0D] mt-12 p-4 md:p-8'>
                <div className="">
                    <h1 className="md:text-4xl text-3xl font-bold mb-6"> {chef_name}</h1>
                    <p className='text-xl text-[#393E46]'>Years of experience: {experience} Years +</p>
                    <p className="text-xl text-[#393E46]">Numbers of recipes: {recipes_number} items</p>
                    <p className="text-xl text-[#393E46]"> Likes:{likes}</p>
                    <p className=' text-[#393E46]'>{bio}</p>
                </div>
                <div className="">
                    <img src={chef_picture} alt="" className="" />
                </div>
            </div>
            <div className="bg-[url(https://i.imgur.com/JZCPM5e.png)] bg-no-repeat bg-center bg-[length:100%_100%] md:bg-[length:500px_150%] mt-10 md:mt-24 mb-5 md:mb-12">
                <h3 className=" md:text-5xl text-[#393E46] text-3xl text-center font-bold">Chef Recipes</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    food.map(RecipesData => <Recipes
                        key={RecipesData.id}
                        RecipesData={RecipesData}
                    ></Recipes>)
                }
            </div>

            <div className="mt-10 md:mt-24 mb-5 md:mb-12 bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-[url(https://i.imgur.com/EHTyWjY.jpeg)]" >
                <div className="md:w-1/2">
                    <p className="font-bold text-sm uppercase">Services</p>
                    <p className="text-3xl font-bold">Food products</p>
                    <p className="text-2xl mb-10 leading-none">Transform your Experience with Barisal Bistro</p>
                </div>
            </div>
        </div>
    );
};

export default RecipesDetails;