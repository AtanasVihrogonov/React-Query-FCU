import { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = async (page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
  return res.json()
}

const Planets = () => {
  const [page, setPage] = useState(1)
  // fetchPlanet function that's going to go out and get that data. Now use query is going to manage
  // all of this fetching under the hood it's going to call this for us initially to grab the data but then
  // later on it's also going to cache the data and refetch the data in the background when it needs to do so
  // it's going to manage that for us we don't need to manually call this later.
  const { data, status } = useQuery(['planets', page], () => fetchPlanets(page))

  return (
    <div>
      <h2>Planets</h2>
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button>

      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Planets
