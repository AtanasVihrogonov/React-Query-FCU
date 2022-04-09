import { useQuery } from 'react-query'
import Person from './Person'

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people')
  return res.json()
}

const People = () => {
  // fetchPlanet function that's going to go out and get that data. Now use query is going to manage
  // all of this fetching under the hood it's going to call this for us initially to grab the data but then
  // later on it's also going to cache the data and refetch the data in the background when it needs to do so
  // it's going to manage that for us we don't need to manually call this later.
  const { data, status } = useQuery('people', fetchPeople)
  console.log(data)

  return (
    <div>
      <h2>People</h2>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  )
}

export default People
