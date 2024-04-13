import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ dogNames }) => {
    return (
        <nav>
            {dogNames.map(name => (
                (<Link to={`/dogs/${name.toLowerCase()}`}>{name}</Link>)
            ))}
        </nav>
    )
}

export default Nav;