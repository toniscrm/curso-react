import { Outlet, Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/alumnos">Alumnos</Link>
                <Link to="/main">Main</Link>
                <Link to="/protegida">PROHIBIDO</Link>
                <Link to="/rickmorty">Rick</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Dashboard
