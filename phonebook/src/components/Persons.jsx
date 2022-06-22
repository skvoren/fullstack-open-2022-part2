import React from 'react';
import Person from "./Person";

const Persons = ({personsToShow, removePerson}) => {
    return (
        <div>
            {personsToShow.map(person =>
                <Person key={person.id} person={person} removePerson={removePerson}/>)}
        </div>
    );
};

export default Persons;
