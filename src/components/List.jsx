import React from 'react';

const List = ({ person }) => {
  return (
    <div className="card-body" key={person.id}>
      <div className="img">
        <img src={person.image} alt="" />
      </div>

      <div className="person-info">
        <h3>Name: {person.name}</h3>
        <p>Age: {person.age}</p>
        <p>Email: {person.email}</p>
      </div>
    </div>
  );
};

export default List;