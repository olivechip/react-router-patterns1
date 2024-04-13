import "./Home.css";

const Home = (props) => {
    const dogs = props.dogs;
    return (
        <>
            <h1>Home Page</h1>
            {dogs.map(dog => (
                <div><h4>{dog.name}</h4><img src={dog.src} alt={dog.name}></img></div>
            ))}
        </>
    )
}

export default Home;