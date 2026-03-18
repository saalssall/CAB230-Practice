import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import Car from './Vehicle.jsx';
import useFetch from './useFetch.js';

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

function Library(props){

  return (
    <>
    <h1> My Library is {props.name} </h1>
    {/* Component inside another component */}
    <Book title = "The Great Gatsby" author = "F. Scott Fitzgerald"/>
    </>
  )

}

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

function Book(props){

  return (
    <>
    <h2> This is the {props.title} book by {props.author} </h2>
    </>
  );
}

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


createRoot(document.getElementById('root')).render(
  <div>
    {/* Rendering elements */}
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
    </div>
);
