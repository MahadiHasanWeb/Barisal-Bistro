import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipesDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    return (
        <div>
            suiiiiiiiiiiiiiii  {id}
        </div>
    );
};

export default RecipesDetails;