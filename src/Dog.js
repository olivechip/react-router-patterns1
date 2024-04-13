import { useParams } from 'react-router-dom';

const Dog = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name);
    console.log(dog)

    return (
        <>
            <div>
                <h4>{dog.name}</h4>
                <img src={dog.src} alt={dog.name}></img>
                <div>
                    <p>I am {dog.age} years old!</p>
                    {dog.facts.map(fact => (
                        <p>{fact}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dog;