import React from 'react';
import { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

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
    if (fullname === '' || email === '') {
      return alert('Form cant be submitted empty');
    } else {
      axios
        .post('https://62a7715097b6156bff8e8e7d.mockapi.io/Crud', {
          fullname,
          email,
        })
        .then((response) => {
          console.log(response);
          navigate('/read');
          setFormData({ fullname: '', email: '' });
        });
    }
  };

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
              {/* <Link to="/read">Submit</Link> */}
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Create;
