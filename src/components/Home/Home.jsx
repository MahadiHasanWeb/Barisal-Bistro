import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import ChefData from './ChefData/ChefData';
import Speciality from './SPECIALITY';
import Catering from './Catering';

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
            <Speciality></Speciality>
            <div className="bg-[url(https://i.imgur.com/JZCPM5e.png)] bg-no-repeat bg-center bg-[length:100%_100%] md:bg-[length:500px_100%] mt-10 md:mt-24">
                <h3 className=" md:text-5xl text-[#393E46] text-3xl text-center font-bold">Our Chefs</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-5 md:mt-10">
                {
                    chefData.map(data => <ChefData
                        key={data.id}
                        data={data}
                    ></ChefData>)
                }
            </div>
            <Catering></Catering>
        </div>
    );
};

export default Home;