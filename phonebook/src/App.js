import React from 'react'
import { useState } from 'react'

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Vlad', phone: "8-800-805-00-00", id: 1},
    {name: 'Vika', phone: "8-800-805-00-00", id: 2},
    {name: 'Sveta', phone: "8-800-805-00-00", id: 3},
    {name: 'Roma', phone: "8-800-805-00-00", id: 4}
  ])
  const [filter, setFilter] = useState('')

  const createPerson = (newPerson) => {
    setPersons([...persons, newPerson])
  }



  const personsToShow = !filter.length > 0
                        ? persons
                        : persons.filter(person => person.name.includes(filter) || person.phone.includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Create a new</h3>
      <PersonForm createPerson={createPerson} persons={persons}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App
