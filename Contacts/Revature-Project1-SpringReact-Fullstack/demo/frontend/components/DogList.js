
import DogItem from "./DogItem";

//Fetches and displays the list of dogs


/*

const DogList = ({ role}) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/dogs")
          .then((response) => response.json())
          .then((data) => setDogs(data));     
        }, []);
    

return (
<div>
   <h2>Dog List</h2>
   
   {dogs.map((dog) => (
    // <li key={dog.id} />
    <DogItem key={dog.id} dog={dog}  role={role} />
    
))}
/div>

   );
);




*/