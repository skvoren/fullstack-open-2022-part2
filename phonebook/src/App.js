import React from 'react'
import { useState } from 'react'

import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Vlad', phone: "8-800-805-00-00"},
    {name: 'Vika', phone: "8-800-805-00-00"},
    {name: 'Sveta', phone: "8-800-805-00-00"},
    {name: 'Roma', phone: "8-800-805-00-00"}
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [applyFilter, setApplyFilter] = useState(false)

  const newNameHandler = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const newNumberHandler = (event) => {
    event.preventDefault()
    setNewPhone(event.target.value)
  }

  const filterHandler = (event) => {
    event.preventDefault()
    setApplyFilter(true)
    setFilter(event.target.value)
    if (!event.target.value) {
      setApplyFilter(false)
    }
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

  const personsToShow = !applyFilter
                        ? persons 
                        : persons.filter(person => person.name.includes(filter) || person.phone.includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
       filter shown with: <input value={filter} onChange={filterHandler}/>
      </div>
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
      {personsToShow.map(person => 
        <Person key={person.name} person={person}/>)}
    </div>
  )
}

export default App