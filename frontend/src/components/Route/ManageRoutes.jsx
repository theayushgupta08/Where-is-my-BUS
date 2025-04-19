import React from 'react';
import ActionCards from '../ActionCards';

const ManageRoutes = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center m-60">
      <h1 className="text-3xl font-bold mb-4 text-orange-700">Manage Routes</h1>
      <ActionCards baseRoute="/manage-route" />
    </div>
  );
};

export default ManageRoutes;