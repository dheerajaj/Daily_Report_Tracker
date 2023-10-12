import React, { useState } from 'react';
import './ReportSubmissionForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'; // Import Axios
import Navbar from '../Navbar';


const ReportSubmissionForm = () => {
  const [data, setdata] = useState({
    date: new Date(),
    name: '',
    project: '',
    time: '',
    discription: '',
  });
 
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const handleDateChange = (date) => {
    setdata({
      ...data,
      date,
    });
  };
   // HTTP headers for the axios request
  const headers = {
    'Content-Type': 'application/json',
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!data.date) {
      validationErrors.date = 'Date is required.';
    }
    if (!data.name) {
      validationErrors.name = 'Name is required.';
    }
    if (!data.project) {
      validationErrors.projecte = 'Project Name is required.';
   }
    if (!data.time) {
      validationErrors.time = 'Hours Worked is required.';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {

        const response = await axios.post('http://192.168.68.41:8000/api/v1/add', data,{headers});       
        console.log('Form submitted:', response.data);
        alert(response.data.message);      
        setdata({
          date: new Date(),
          name: '',
          project: '',
          time: '',
          discription: '',
        });
      } catch (error) {   

        console.error('Error submitting form:', error);     

      }
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="report-submission">
        <h2 className="h1">Report Submission</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Date</label>
            <DatePicker
              selected={data.date}
              onChange={handleDateChange}
              dateFormat="MM-dd-yyyy"
            />
            {errors.date && <div className="error">{errors.date}</div>}
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label>Project Name</label>
            <input
              type="text"
              name="project"
              value={data.project}
              onChange={handleInputChange}
            />
            {errors.project && (
              <div className="error">{errors.project}</div>
            )}
          </div>
          <div className="form-group">
            <label>Hours Worked</label>
            <input
              type="text"
              name="time"
              value={data.time}
              onChange={handleInputChange}
            />
            {errors.time && (
              <div className="error">{errors.time}</div>
            )}
          </div>
          <div className="form-group">
            <label>Discription</label>
            <textarea
            type="text"
              name="discription"
              value={data.discription}
              onChange={handleInputChange}
            />
          </div>
          <button id="btn" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ReportSubmissionForm;