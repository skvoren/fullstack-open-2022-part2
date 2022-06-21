import React, {useEffect} from 'react'
import { useState } from 'react'

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
      axios
          .get('http://localhost:3001/persons')
          .then(response => {
              setPersons(response.data)
          })
  }, persons)

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
