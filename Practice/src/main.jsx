import { createRoot } from 'react-dom/client'
import Car from './Vehicle.jsx';

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


function Book(props){

  return (
    <>
    <h2> This is the {props.title} book by {props.author} </h2>
    </>
  );
}

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
    </div>
);
