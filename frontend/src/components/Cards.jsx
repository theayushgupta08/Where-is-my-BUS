import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { operations } from '../constants';
import { fadeIn } from '../utils/motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ index, id, title, description, link, image }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <motion.div
            // With this variants the image card will come up one by one because each have different index. 
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            onClick={handleClick}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[260px] w-full"> {/* Reduced card width */}
                <div className='relative w-[220px] h-[140px]'> {/* Reduced image width */}
                    <img src={image} alt={title} className='w-full h-full object-cover rounded-2xl ' />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {description.map((point, index) => (
                            <li key={`description-point-${index}`}
                                className="text-white-100 text-[14px] pl-1 tracking-wider" >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Cards = () => {
    return (
        <>
            <div className='mt-24 mr-20 grid grid-cols-1 sm:grid-cols-2 gap-7'>
                {operations.map((title, index) => (
                    <ProjectCard
                        key={`operation-${index}`}
                        index={index}
                        {...title} />
                ))}
            </div>
        </>
    )
}

export default Cards;