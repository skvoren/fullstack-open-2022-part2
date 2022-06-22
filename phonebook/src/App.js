import React, {useEffect, useState} from 'react'

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/personService";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
      personService
          .getAll()
          .then(response => {
              setPersons(response.data)
          })
  }, [])

  const createPerson = (newPerson) => {
    personService
        .create(newPerson)
        .then(response => {
            setPersons([...persons, response.data])
            setMessage(`added ${newPerson.name}`)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        })
  }

  const updatePerson = (personId, updatedPerson) => {
      personService
          .update(personId, updatedPerson)
          .then(response => {
              setPersons(persons.map(person => person.id !== personId ? updatedPerson : response.data))
              setMessage(`updated ${updatedPerson.name}`)
              setTimeout(() => {
                  setMessage(null)
              }, 5000)
          })
  }

  const removePerson = (person) => {
      personService
          .remove(person.id)
          .then(_response => {
              setPersons(persons.filter(p => p.id !== person.id))
          }).catch(_response => {
              setMessage(`Information of ${person.name} already deleted from a server`)
              setTimeout(() => {
                  setMessage(null)
              }, 5000)
          setPersons(persons.filter(p => p.id !== person.id))
      }

      )
  }

  const personsToShow = !filter.length > 0
                        ? persons
                        : persons.filter(person => person.name.includes(filter) || person.phone.includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Create a new</h3>
      <PersonForm createPerson={createPerson} updatePerson={updatePerson} persons={persons}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App
