import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


const Card = () => {
    // hooks for all data
    const [data, setData] = useState([]);
    // hooks for handle showall data and btn
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => setShowAll(true);
    // hooks for get unique id from signle data
    const [uniqueId, setUniqueId] = useState(null);
    // hooks for store single data 
    const [singleData, setSingleData] =useState({})
    // fetch single data by using unique id
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res=> res.json())
        .then(data => setSingleData(data.data))
    },[uniqueId])

    // fetch all data
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            .then(res => res.json())
            .then(data => setData(data.data.tools))
    }, [])


    return (
        <div className='mb-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    data.slice(0, showAll ? 12 : 6).map(singleData => <SingleData key={singleData.id} setUniqueId={setUniqueId} singleData={singleData}></SingleData>)
                }
            </div>
           {
            !showAll && <span onClick={handleShowAll}>
             <Button>Show All</Button>
         </span>
           }
           <Modal singleData={singleData}></Modal>
        </div>

    );
};

export default Card;