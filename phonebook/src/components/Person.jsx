import React from "react";

const Person = (props) => {
    const {name} = props;
    return (
        <li>{name}</li>
    )
}

export default Person