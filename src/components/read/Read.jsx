import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Update() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get('https://62a7715097b6156bff8e8e7d.mockapi.io/Crud')
      .then((getData) => {
        setApiData(getData.data);
      });
  });
  return (
    <div className=" flex justify-center ">
      <table className="w-ful  text-left dark:text-gray-400">
        <thead className=" text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-2 py-3">Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((val) => {
            return (
              <tr
                key={val.id}
                className="text-xl bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-2 py-2">{val.fullname}</td>
                <td>{val.email}</td>
                <td className="px-2">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">
                    <Link to="./update">Update</Link>
                  </button>
                </td>
                <td>
                  <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                    <Link to="./delete">Delete</Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Update;
