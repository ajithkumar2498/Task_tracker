import React from 'react'
import Table from 'react-bootstrap/Table';
import { isAuthenticated } from '../services/Auth';
import { Navigate } from 'react-router-dom';

function Clients() {
  if (!isAuthenticated()) {
    return <Navigate to='/home'/>
  }
  return <>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  </>
}

export default Clients