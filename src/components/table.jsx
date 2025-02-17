import React from "react";
import "./Table.css"; // Import the CSS file

function Table(props) {
  return (
    <div className="table-container">
      <table className="table text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Signup Date</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.fullMoblieNo} </td>
              <td>{user.email}</td>
              <td>{user.signupDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
