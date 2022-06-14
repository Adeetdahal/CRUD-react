import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
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
    axios.post('https://reqres.in/api/register', {
      fullname,
      email,
    });
  };
  console.log(email);
  console.log(fullname);

  return (
    <>
      <section className="flex flex-col justify-center items-center py-16">
        <div className="flex ">
          <h1 className="text-4xl font-mono font-semibold">
            React CRUD operations
          </h1>
        </div>
        <form className="flex flex-col py-2" onSubmit={onSubmit}>
          <div className="pt-3">
            <input
              type="text"
              className="w-[350px] shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="fullname"
              name="fullname"
              placeholder="Enter your Full Name"
              value={fullname}
              onChange={onChange}
            />
          </div>
          <div className="pt-3">
            <input
              type="email"
              className="w-[350px] shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={sendDataToAPI}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
