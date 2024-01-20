import React from 'react';
import { useState } from 'react';
import '../style/Home.css';
import imagedoctor from '../assets/imagedoctor.jpg';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [area, setArea] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [specialty, setSpecialty] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/search', {specialty, area });
      setDoctors(response.data);
    } catch (error) {
      console.error('Error searching for doctors:', error);
    }
  };

  return (
    <div>
      <div className='left_side'>
        <div className='left1'>
          <span>Find And Search Your</span>
          <p>Suitable Doctor's</p>
        </div>

        <div className='left2'>
          <p>
            Join us and take care of yourself and your family with health services that will make you feel confident and safe in your daily life
          </p>
        </div>

        <div className='search'>
          <form onSubmit={handleSearch}>
            
            <div className='search-field'>

            <input
                type='text'
                value={specialty}
                placeholder='Enter Specialty'
                onChange={(e) => setSpecialty(e.target.value)}
                required
                className='searchtext'
              />
              
            

            {/* <div className='search-field'> */}
              <input
                type='text'
                value={area}
                placeholder='Enter Area'
                onChange={(e) => setArea(e.target.value)}
                required
                className='searchtext'
              />
            {/* </div> */}

            <button className='small-search-btn' type='submit'>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>

            </div>

           
          </form>
        </div>

        <div className='rightside'>
          <img src={imagedoctor} alt='' className='img' />
        </div>
      </div>

      <div className='results'>
        {doctors.length > 0 ? (
         
          doctors.map((doctor, index) => (
            <div key={index} className='result-item'>
              <p>Doctor Name: {doctor.name}</p>
              <p>Specialty: {doctor.specialty}</p>
              {/* <p>Area: {doctor.area}</p> */}
              <p>Exp: {doctor.Exp}</p>
            </div>
          ))
        ) : (
          <p>No doctors found in the specified area.</p>
        )}
      </div>
    </div>
  );
};

export default Home;


