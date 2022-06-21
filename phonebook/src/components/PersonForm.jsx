import React, {useState} from 'react';

const PersonForm = ({createPerson, persons}) => {
    const [person, setPerson] = useState({name: '', phone: ''})

    const newNameHandler = (event) => {
        setPerson({...person, name: event.target.value})
    }

    const newNumberHandler = (event) => {
        setPerson({...person, phone: event.target.value})
    }

    const addNewPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            ...person, id: Date.now()
        }

        if (persons.find(person => person.name === newPerson.name || person.phone === newPerson.phone)) {
            alert("data already exists!")
        } else {
            createPerson(newPerson)
            setPerson({name: '', phone: ''})
        }
    }

    return (
        <form onSubmit={addNewPerson}>
            <div>
                name: <input value={person.name} onChange={newNameHandler}/>
            </div>
            <div>
                number: <input value={person.phone} onChange={newNumberHandler}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;
