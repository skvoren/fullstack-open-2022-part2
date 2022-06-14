import React from 'react'
import { useState } from 'react'

import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Vlad'}
  ]) 
  const [newName, setNewName] = useState('')

  const newNameHandler = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const addPerson = (event) => {  
    event.preventDefault()
    const personObject = {
      name: newName
    }
    if (persons.find(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={newNameHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Person key={person.name} name={person.name}/>)}
    </div>
  )
}

export default App