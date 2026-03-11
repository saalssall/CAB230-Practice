import { createRoot } from 'react-dom/client'

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

function Car ()
{
  const brand = "Mercedes-Benz";
  const model = "C-Class";

  return (
    <>
    <h2> This is my {brand} {model} 🚗 car! </h2>
    <p> It is a nice car! </p>
    </>

  )
}

createRoot(document.getElementById('root')).render(
  <div>
    {myElement2}
    {myelement0}
    {myElement}
    {myElement1}
    {myElement3}
    {myElement4}
    <Car />
    </div>
)
