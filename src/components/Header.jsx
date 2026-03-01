import {Link} from "react-router-dom"

export default function Header() {

  return (
    <header style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", fontFamily: "Arial, sans-serif", fontSize: "14px", marginTop: "-10px", textAlign: "center", padding: "10px" }}>
      <nav>
        <ul style={{ display: "flex", justifyContent: "center", padding: "20px", margin: 0, gap: "80px", listStyle: "none" }}>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
          </li>
          <li>
            <Link to="/pot" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Pot</Link>
          </li>
          <li>
            <Link to="/roll" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Dice</Link>
          </li>
        </ul>
      </nav>
      <h1 className="header-title">It does what it do</h1>
    </header>
  )
}
