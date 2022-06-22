import React from "react";

const Person = ({person, removePerson}) => {

    const removePersonHandler = () => {
        if (window.confirm(`really remove ${person.name}?`)) {
            removePerson(person)
        }
    }

    const {name, phone} = person;
    return (
        <li>{name} {phone}<button onClick={removePersonHandler}>delete</button></li>
    )
}

export default Person
