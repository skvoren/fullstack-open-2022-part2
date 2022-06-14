import React from 'react'
import { useState } from 'react'

import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Vlad', phone: "8-925-806-64-53"}
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const newNameHandler = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const newNumberHandler = (event) => {
    event.preventDefault()
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {  
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone
    }
    if (persons.find(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else if (persons.find(e => e.phone === newPhone)) {
      alert(`${newPhone} is already added to phonebook`)
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
          number: <input value={newPhone} onChange={newNumberHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Person key={person.name} person={person}/>)}
    </div>
  )
}

export default App