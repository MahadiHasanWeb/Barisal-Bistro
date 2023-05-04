import React from 'react';
import { Link } from 'react-router-dom';

const ChefData = ({ data }) => {
    // console.log(data)
    const { chef_name, chef_picture, experience, likes, recipes_number, id } = data;
    return (
        <div className='px-5 py-10 md:p-10 border-solid border bg-[#EEEEEE] rounded-lg'>
            <img className='' src={chef_picture} alt="" />
            <p className="text-4xl mt-7 font-bold text-[#393E46] mb-5">{chef_name}</p>
            <p className="textColor text-[#393E46] font-semibold text-xl"> Likes: {likes}</p>
            <p className="textColor text-[#393E46] font-semibold text-xl my-3">Numbers of recipes: {recipes_number} items</p>
            <p className='text-xl text-[#393E46] font-semibold '>Years of experience: {experience} Years +</p>
            <Link to={id}><button className='button button-primary mt-8'>View Recipes</button></Link>
        </div>
    );
};

export default ChefData;