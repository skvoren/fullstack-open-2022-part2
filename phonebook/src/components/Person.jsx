import React from "react";

const Person = ({person}) => {
    const {name, phone} = person;
    return (
        <li>{name} {phone}</li>
    )
}

export default Person