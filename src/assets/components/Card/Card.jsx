import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';


const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            .then(res => res.json())
            .then(data => setData(data.data.tools))
            .then(err => console.log(err))
    }, [])
    const handleShowAll = () => setShowAll(true);


    return (
        <div className='mb-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    data.slice(0, showAll ? 12 : 6).map(singleData => <SingleData key={singleData.id} singleData={singleData}></SingleData>)
                }
            </div>
           {
            !showAll && <span onClick={handleShowAll}>
             <Button>Show All</Button>
         </span>
           }
        </div>

    );
};

export default Card;