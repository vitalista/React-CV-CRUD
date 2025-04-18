import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="animate-pulse">
  <table className="min-w-full table-fixed">
    <thead className="block mb-[50px]">
      <tr className="flex">
        <th className="h-8 bg-gray-200 flex-1"></th>
        <th className="h-8 bg-gray-200 flex-1"></th>
        <th className="h-8 bg-gray-200 flex-1"></th>
        <th className="h-8 bg-gray-200 flex-1"></th>
      </tr>
    </thead>
    <tbody className="block space-y-[50px]">
      <tr className="flex">
        <td className="h-8 bg-gray-300 flex-1"></td>
        <td className="h-8 bg-gray-300 flex-1"></td>
        <td className="h-8 bg-gray-300 flex-1"></td>
        <td className="h-8 bg-gray-300 flex-1"></td>
      </tr>
      <tr className="flex">
        <td className="h-8 bg-gray-300 flex-1"></td>
        <td className="h-8 bg-gray-300 flex-1"></td>
        <td className="h-8 bg-gray-300 flex-1"></td>
        <td className="h-8 bg-gray-300 flex-1"></td>
      </tr>
    </tbody>
  </table>
</div>

    );
};

export default SkeletonLoader;
