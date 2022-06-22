import React, {useState} from 'react';

const PersonForm = ({createPerson, updatePerson, persons}) => {
    const [person, setPerson] = useState({name: '', phone: ''})

    const newNameHandler = (event) => {
        setPerson({...person, name: event.target.value})
    }

    const newNumberHandler = (event) => {
        setPerson({...person, phone: event.target.value})
    }

    const addNewPerson = (event) => {
        event.preventDefault()
        const personData = {
            ...person, id: Date.now()
        }

        if (isPersonExists(personData)) {
            if (window.confirm("That person already added in phonebook! Do you wanna replace person with a new one?")){
                updatePerson(getPersonId(personData), personData)
                setPerson({name: '', phone: ''})
            }
        } else {
            createPerson(personData)
            setPerson({name: '', phone: ''})
        }
    }

    const isPersonExists = (personData) => {
       return persons.find(p => p.name === personData.name || p.phone === personData.phone)
    }

    const getPersonId = (personData) => {
        const personUnique = persons.filter(p => p.name === personData.name || p.phone === personData.phone)
        return personUnique[0].id
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
