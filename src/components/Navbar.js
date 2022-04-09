const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button className="btn" onClick={() => setPage('planets')}>Planets</button>
      <button className="btn" onClick={() => setPage('people')}>People</button>
    </nav>
  )
}

export default Navbar
