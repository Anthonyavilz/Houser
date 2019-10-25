import React from 'react';

export default function House(props) {
    let {id, name, address, city, state, zipcode} = props.house;
    return (
        <div>
            <h1>Property Name: {name}</h1>
            <h1>Address: {address}</h1>
            <h1>City: {city}</h1>
            <h1>State: {state}</h1>
            <h1>Zip Code: {zipcode}</h1>
            <button onClick={() => props.deleteHouse(id)}>Delete</button>
        </div>
    )
}