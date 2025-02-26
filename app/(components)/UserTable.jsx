"use client"
import { useState } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin', created: '22.06.2024', pin: '******', access: 'Full Access', status: 'Active' },
    { id: 2, name: 'Pos', created: '22.06.2024', pin: '******', access: 'Limited Access', status: 'Active' },
    { id: 3, name: 'Kitchen', created: '22.06.2024', pin: '******', access: 'Limited Access', status: 'Inactive' }
  ]);

  return (
    <div className="p-4">
      <div className="border-b border-gray-200 flex flex-col sm:flex-row items-center justify-between px-6 py-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <h2 className="text-lg font-medium text-gray-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Users
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <div className="relative">
            <input type="text" placeholder="Search" className="py-1 pl-8 pr-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-2.5 top-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="flex items-center text-sm text-orange-500 font-medium">
            <span className="mr-1">Add</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Access</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.created}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.access}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                    user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
