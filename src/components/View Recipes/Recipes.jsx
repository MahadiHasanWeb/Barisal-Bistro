import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Recipes = ({ RecipesData }) => {

    const [Favorites, setFavorites] = useState(false);



    const { details, food_name, food_picture, Ingredients } = RecipesData;
    console.log(RecipesData)

    const btnFavorites = () => {
        setFavorites(true);
        toast.success('Successfully Added to Favorites')
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure className='h-[220px]'><img src={food_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                <p className='flex items-center gap-2 font-semibold text-[16px]'>rating: <span className='text-[#393E46] flex gap-1'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span></p>
                <p><span className='font-semibold text-[16px]'>Ingredients:</span> {Ingredients}</p>
                <p><span className='font-semibold text-[16px]'>Cooking method:</span> {details}</p>
            </div>
            <button onClick={btnFavorites} disabled={Favorites} className="button button-primary bg-[#00ADB5]">Add To Favorites</button>
        </div>
    );
};

export default Recipes;