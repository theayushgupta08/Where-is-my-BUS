import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map route segments to display names
  const getDisplayName = (segment) => {
    const nameMap = {
      'dashboard': 'Dashboard',
      'manage-bus': 'Manage Buses',
      'manage-driver': 'Manage Drivers',
      'manage-route': 'Manage Routes',
      'manage-stops': 'Manage Stops',
      'view': 'View',
      'add': 'Add',
      'update': 'Update',
      'delete': 'Delete',
    };
    return nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  // Build breadcrumb items
  const breadcrumbItems = [];
  let currentPath = '';

  pathnames.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathnames.length - 1;
    
    breadcrumbItems.push({
      name: getDisplayName(segment),
      path: currentPath,
      isLast: isLast,
    });
  });

  // Don't show breadcrumb on dashboard or main manage pages
  if (pathnames.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm mb-4 px-4 py-2 bg-gray-800/50 rounded-lg">
      <Link 
        to="/dashboard" 
        className="text-orange-400 hover:text-orange-500 transition-colors"
      >
        Dashboard
      </Link>
      <span className="text-gray-500">/</span>
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.isLast ? (
            <span className="text-white font-semibold">{item.name}</span>
          ) : (
            <>
              <Link 
                to={item.path} 
                className="text-orange-400 hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
              <span className="text-gray-500">/</span>
            </>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
