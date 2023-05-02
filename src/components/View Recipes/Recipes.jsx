import React from 'react';

const Recipes = ({ RecipesData }) => {
    console.log(RecipesData);
    const { details, food_name, food_picture } = RecipesData;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='h-[220px]'><img src={food_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Recipes;