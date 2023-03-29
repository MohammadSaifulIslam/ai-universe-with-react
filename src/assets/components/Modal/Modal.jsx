import React from 'react';

const Modal = ({ singleData }) => {
    const { description, features, image_link, integrations, input_output_examples } = singleData;
    console.log(input_output_examples)
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{description && description}</h2>
                            <div className="flex justify-between">
                                <div className="features">
                                    <h6 className='text-xl font-semibold'>Features</h6>
                                    {
                                        features ? Object.values(features).map((feature, index) => <p>{index + 1}. {feature.feature_name}</p>) : "Not Found"
                                    }
                                </div>
                                <div className="integrations">
                                    <h6 className='text-xl font-semibold'>Integrations</h6>
                                    {
                                        integrations ? integrations.map((int, index) => <p>{index + 1}. {int}</p>) : "Not Found"
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <figure className='w-full '>
                                <img src={image_link[0] && image_link[0]} alt="Album" className='rounded-xl w-full block' />
                            </figure>
                            {input_output_examples && input_output_examples[0] ? <h4  className='text-center text-xl font-semibold'>{input_output_examples[0].input}</h4> : <h4  className=' text-xl font-semibold'>Can you give any example?</h4>}
                            {input_output_examples && input_output_examples[0] ? <h4>{input_output_examples[0].output}</h4> : <h4>No! Not Yet! Take a break!!!</h4>}
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;