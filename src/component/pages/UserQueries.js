
import React, { useState, useEffect } from 'react';

function UserQueries() {
  
  const [userQueries, setUserQueries] = useState([]);

  
  useEffect(() => {
    const storedQueries = JSON.parse(localStorage.getItem('userQueries')) || [];
    setUserQueries(storedQueries);
  }, []);

  return (
    <div className="user-queries">
      <h2>User Queries</h2>
      <ul>
        {userQueries.map((query, index) => (
          <li key={index}>{query}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserQueries;
