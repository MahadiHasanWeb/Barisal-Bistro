import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Recipes = ({ RecipesData }) => {

    const [Favorites, setFavorites] = useState(false);
    const { details, food_name, food_picture, Ingredients } = RecipesData;

    const btnFavorites = () => {
        setFavorites(true);
        toast.success('Successfully Added to Favorites')
    }

    return (
        <div className="card card-compact w-96 shadow-xl bg-[#fffcfc]">
            <figure className='h-[220px]'><img src={food_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#393E46] text-3xl">{food_name}</h2>
                <p className='flex text-[#393E46] items-center gap-2 font-semibold text-[18px]'>Rating: <span className='text-[#393E46] flex gap-1'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span></p>
                <p className='text-[#393E46]'><span className='font-semibold text-[#393E46] text-[18px]'>Ingredients:</span> {Ingredients}</p>
                <p className='text-[#393E46]'><span className='font-semibold text-[#393E46] text-[18px]'>Cooking method:</span> {details}</p>
            </div>
            <button onClick={btnFavorites} disabled={Favorites} className="button button-primary bg-[#00ADB5]">Add To Favorites</button>
        </div>
    );
};

export default Recipes;