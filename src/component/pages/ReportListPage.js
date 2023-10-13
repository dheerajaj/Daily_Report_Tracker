// import React, { useState, useEffect } from 'react';
// import './ReportListPage.css';
// import Navbar from '../Navbar';
// import axios from 'axios';

// const ReportListPage = () => {
//   const [reports, setReportsData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/v1/allreports')
//       .then(response => {
//         console.log('API response:', response.data);
//         setReportsData(response.data);
//       })
//       .catch(error => {
//         console.error('Failed to fetch report data:', error);
//       });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="report-list">
//         <h2>Report List</h2>
//         <input
//           type="text"
//           placeholder="Search by Date or Project Name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <table>
//           <thead>
//             <tr>
//             <th>ID</th>
//               <th>Date</th>
//               <th>Name</th>
//               <th>Project Name</th>
//               <th>Hours Worked</th>
//               <th>Comments</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report, index) => (
//               <tr key={report.id || index}>
//               <td>{report._id}</td>
//                 <td>{report.date}</td>
//                 <td>{report.name}</td>
//                 <td>{report.project}</td>
//                 <td>{report.time}</td>
//                 <td>{report.discription}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ReportListPage;


import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ReportListPage() {
  const [emp, setEmp] = useState([]);

  const apiurl = 'https://dummy.restapiexample.com/api/v1/employees';

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setEmp(data.data))
      .catch((error) => console.error(error));
  }, []); // Make sure to provide an empty dependency array to run this effect only once
console.log(emp);
  return (
    <div>
      <h1>Employee Chart</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={emp}>
       
          <XAxis dataKey="employee_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="employee_age" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}



export default ReportListPage
