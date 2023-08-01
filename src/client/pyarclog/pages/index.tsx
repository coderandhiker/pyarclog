import React, {useEffect, useState} from 'react'

function index() {

  const [message, setMessage] = useState("Loading...");
  const [appRoles, setAppRoles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
          setMessage(data.message);
        });
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/api/roles")
      .then((response) => response.json())
      .then((data) => {        
        setAppRoles(data.app_roles);
      })
  }, []);

  return (
    <div>
      <div>{message}</div>
      <div>App Roles:</div>
      {appRoles.map((role, index) => (
        <div key={index}>{role}</div>
      ))}
        
    </div>
  );
}

export default index