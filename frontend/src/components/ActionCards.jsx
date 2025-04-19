import React from 'react';
import { useNavigate } from 'react-router-dom';
import { actions } from '../constants';

const ActionCards = ({ baseRoute }) => {
  const navigate = useNavigate();

  const handleActionClick = (action) => {
    navigate(`${baseRoute}/${action.link}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[50%] h-[50%] justify-center items-center m-20">
      {actions.map((action) => (
        <div
          key={action.id}
          className="p-4 border rounded-lg cursor-pointer bg-black hover:bg-gray-600 justify-center items-center flex flex-col text-white transition duration-300 ease-in-out"
          onClick={() => handleActionClick(action)}
        >
          <img src={action.image} alt={action.title} className="w-9 h-9 flex items-center justify-center object-cover mb-4" />
          <h3 className="text-xl font-bold">{action.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ActionCards;