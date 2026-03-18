import { createRoot } from 'react-dom/client'
import { useEffect, useState, useContext, createContext } from 'react';
import Car from './Vehicle.jsx';
import useFetch from './useFetch.js';


// Rendering elements
  const myelement0 = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const myElement1 = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

const myElement2 = <h1>Hello {/*Beautiful*/}</h1>

const myElement4 = <h1 className="myclass">Hello World</h1>;

const myElement3 = <input type="text" />;

// Using props to pass data to a component
function Library(props){

  return (
    <>
    <h1> My Library is {props.name} </h1>
    {/* Component inside another component */}
    <Book title = "The Great Gatsby" author = "F. Scott Fitzgerald"/>
    </>
  )

}

// Using useState to update a string
function FavoriteColor(){
  const [color, setColor] = useState("red");
  return (
    <div style={{ color: color, padding: "20px" }}> 
      <h1> My favorite color is {color}! </h1>
      <button type = "button" onClick = {() => setColor("blue")}> Blue </button>
      <button type = "button" onClick = {() => setColor("green")}> Green </button>
      <button type = "button" onClick = {() => setColor("red")}> Red </button>
      <button type = "button" onClick = {() => setColor("black")}> Black </button>
    </div>
  );
}

// using props to pass data to a component
function Book(props){

  return (
    <>
    <h2> This is the {props.title} book by {props.author} </h2>
    </>
  );
}

// Using useState to update an array
const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/todos.json")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//  }, []);
 const [visible, setVisible] = useState(false);
  const [data] = useFetch("/students.json");

  return (
    <div
      style={{
        color: "Green",
        padding: "20px",
        }}
    >
      
      <button onClick={() => setVisible(!visible)}
        style = {{
          backgroundColor: "lightblue",
          color : "black",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}>
        {visible ? "Hide Students" : "Show Students"}
      </button>

      {visible && data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </div>
  );
};

// Using useState to update an object
function Page (){
  const [page, setPage] = useState({
    Home: "Home", 
    MyLibrary: "My Library",
    Year: "2022",
    color : "red"
  });

  const updateColor = () => {
    setPage(previousState => ({
      ...previousState,
      color: "blue"
    }));
  }

  return (
    <>
    <h1 style={{ color: page.color }}>
      This is the {page.Home} page. </h1>
    <p> Welcome to the {page.Home} page of {page.MyLibrary} in the year {page.Year}. 
    </p>
    <button onClick={updateColor}>Change color</button>
    </>
  );
}

// Using useEffect to update a value after a certain time interval
// function Timer(){
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 1000);
//   }, []);

//   return  <h1> I have rendered {count} times.</h1>
// }

// Using useEffect to clear a timer when the component unmounts
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

// Using useEffect to update a value when another value changes
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  return (
    <>
      <p>Count: {count}</p>
      <button style = {{ backgroundColor: "lightblue", color: "black", border: "none", padding: "10px 20px", cursor: "pointer" }} 
      onClick={() => setCount((c) => c + 1)}>+</button>
      <button style = {{ backgroundColor: "lightblue", color: "black", border: "none", padding: "10px 20px", cursor: "pointer" }} 
      onClick= {() => setCount((c) => c - 1)}> - </button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

// Using useContext to pass data through the component 
// tree without having to pass props down manually at every level

// Create a context
const UserContext = createContext();

// Create a component that uses the context
function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    // Provide the context value to the component tree
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

// Create a component that consumes the context
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}
// Create a component that consumes the context
function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


// Rendering elements to the DOM
createRoot(document.getElementById('root')).render(
  <div>
    {/* Rendering elements */}
    <Page />
    {myElement2}
    {myelement0}
    {myElement}
    {myElement1}
    {myElement3}
    {myElement4}
    <Car/>
    <Book title="The Great 1984" author="George Orwell"/>
    <Library name = "Logan North Library"/>
    <FavoriteColor/>
    <Home />
    <Timer />
    <Counter />
    <Component1 />
    </div>
);
