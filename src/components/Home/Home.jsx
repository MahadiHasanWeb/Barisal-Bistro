import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import ChefData from './ChefData/ChefData';

const Home = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(() => {
        fetch('https://server-mahadihasanweb.vercel.app/')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])

    // console.log(chefData)
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {
                    chefData.map(data => <ChefData
                    key={data.id}
                    data={data}
                    ></ChefData>)
                }
            </div>
        </div>
    );
};

export default Home;