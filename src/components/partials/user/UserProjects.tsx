import React from "react";
import { AiFillEye } from "react-icons/ai";
function UserProjects() {
  return (
    <div className="rounded-md shadow-sm shadow-gray-300 p-2">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-semibold py-3">Projects</h2>
        <button
          className="bg-gray-400 shadow-sm px-3 py-1.5 rounded-md flex items-center space-x-2 font-medium 
        duration-150 hover:bg-gray-300 hover:text-gray-700
        "
        >
          <span title="View projects">View</span>
          <AiFillEye size={22} />
        </button>
      </div>{" "}
      <span className="block w-full h-[1px] bg-gray-300"></span>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserProjects;
