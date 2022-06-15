import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
  });
  const { fullname, email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const sendDataToAPI = () => {
    axios.put(`https://62a7715097b6156bff8e8e7d.mockapi.io/Crud/${id}`, {
      fullname,
      email,
    });

    navigate('/read');
  };

  useEffect(() => {
    axios
      .get(`https://62a7715097b6156bff8e8e7d.mockapi.io/Crud/${id}`)
      .then((response) => {
        setFormData(response.data);
      });
  }, [id]);

  return (
    <>
      <section className="flex flex-col justify-center items-center py-16">
        <form className="flex flex-col py-2" onSubmit={onSubmit}>
          <div className="pt-3">
            <input
              type="text"
              className="w-[350px] shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="fullname"
              name="fullname"
              value={fullname}
              placeholder="Enter your Full Name"
              onChange={onChange}
            />
          </div>
          <div className="pt-3">
            <input
              type="email"
              className="w-[350px] shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your Email"
              onChange={onChange}
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={sendDataToAPI}
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Create;
