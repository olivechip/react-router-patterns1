import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    const names = props.dogNames;
    return (
        <nav>
            {names.map(name => (
                (<Link to={`/${name}`}>{name}</Link>)
            ))}
        </nav>
    )
}

export default Nav;