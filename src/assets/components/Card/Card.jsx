import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([])
    useEffect( ()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(res=> res.json())
        .then(data => setData(data.data.tools))
        .then(err => console.log(err))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                data.map(singleData => <SingleData key={singleData.id} singleData={singleData}></SingleData>)
            }
        </div>
    );
};

export default Card;