import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import Home from "./home";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Read() {
  const [APIData, setAPIData] = useState([]);

  
  useEffect(() => {
    getData();
  }, []);
  const setData = (data) => {
    let { id, name,age ,gender } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Gender', gender);



}

  const getData = () => {
    axios
      .get(`https://64b9142879b7c9def6c08b49.mockapi.io/users`)
      .then((response) => {
        setAPIData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://64b9142879b7c9def6c08b49.mockapi.io/users/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <>
      <Home />
      <div className="input">
        <Table singleLine>
          <Table.Header>
            <Table.Row > 
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {APIData.map((data) => (
              <Table.Row key={data.id}>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.age}</Table.Cell>
                <Table.Cell>{data.gender}</Table.Cell>
                <Table.Cell>
                  <button onClick={() => onDelete(data.id)}>Delete</button>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/update`}>
                    <button onClick={() => setData(data)} >Update</button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Read;

