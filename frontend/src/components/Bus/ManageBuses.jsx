import React from 'react';
import ActionCards from '../ActionCards';
import Breadcrumb from '../Breadcrumb';

const ManageBuses = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center m-60">
      <div className="w-full max-w-7xl mb-4">
        <Breadcrumb />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-orange-700">Manage Buses</h1>
      <ActionCards baseRoute="/manage-bus" />
    </div>
  );
};

export default ManageBuses;