import React from 'react';

const ChefData = ({ data }) => {
    console.log(data)
    const { chef_name, chef_picture, experience, likes, recipes_number } = data;
    return (
        <div className='px-5 py-10 md:p-10 border-solid border rounded-lg'>
            <img src={chef_picture} alt="" />
            <p className="text-2xl mt-7 mb-2 font-bold text-[#393E46]">{chef_name}</p>
            <p className='text-xl text-[#393E46]'>Years of experience: {experience}</p>
            <div className="flex gap-4 my-4">
                <p className="textColor text-[#393E46]"> Likes:{likes}</p>
                <p className="textColor text-[#393E46]">Numbers of recipes: {recipes_number}</p>
            </div>
            <button className='button button-primary'>View Recipes</button>
        </div>
    );
};

export default ChefData;