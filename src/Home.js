import { Link } from 'react-router-dom';
import "./Home.css";

const Home = (props) => {
    const dogs = props.dogs;
    return (
        <>
            <h1>Home Page</h1>
            {dogs.map(dog => (
                <div>
                    <h4>{dog.name}</h4>
                    <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                        <img src={dog.src} alt={dog.name}></img>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Home;