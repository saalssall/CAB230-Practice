import './App.css'

// function sumAll(...args) { // args is the name for the array
//   let sum = 0;

//   for (let arg of args) {
//      sum += arg;
//   }

//   return sum;
// }

// alert( sumAll(1) ); // 1
// alert( sumAll(1, 2) ); // 3
// alert( sumAll(1, 2, 3) ); // 6
// function AnimalComponent({name, number, eats}) {

//  return (
//    <div>
//      <h1>{name}</h1>
//      <p>{number}</p>
//    </div>
//  );}

const AnimalComponent = ({ name, number, eats }) => (
   <div>
     <h1>{name}</h1>
     <p>{number}</p>
   </div>
);

// function AnimalComponent(props) {
//  let {name, number, eats} = props

//  return (
//    <div>
//      <h1>{name}</h1>
//      <p>{number}</p>
//    </div>
//  );}
function App() {
//   const animals = [
//  "Lion",
//  "Tiger",
//  "Giraffe",
//  "Elephant",
//  "Monkey",
//  "Lemur",
//  "Rhinoceros"
// ];

const animals = [
 {
   name: "Lion",
   number: 3,
   eats: ["zebra", "antelope", "buffalo", "hippopotamus"]
 },
 {
   name: "Tiger",
   number: 5,
   eats: ["moose", "deer", "buffalo"]
 },
 {
   name: "Giraffe",
   number: 6,
   eats: ["leaves", "twigs"]
 },
 {
   name: "Elephant",
   number: 4,
   eats: ["grass", "leaves", "flowers", "fruit"]
 },
 {
   name: "Monkey",
   number: 10,
   eats: ["fruit", "leaves", "vegetables", "insects"]
 },
 {
   name: "Lemur",
   number: 15,
   eats: ["fruit", "leaves", "insects"]
 },
 {
   name: "Rhinoceros",
   number: 2,
   eats: ["grass", "shoots", "leaves", "berries"]
 }
];

  return (
    <>
      <h1>Hello CAB230!</h1>
      <p>Lion</p>

      {/* {animals.map(animal => (
      <p>{animal}</p>
    ))} */}

     {/* {animals.map(animal => (
    <div>
     <h1>{animal.name}</h1>
     <p>{animal.number}</p>
    </div>
   ))} */}

     {animals.map(animal => (
       <AnimalComponent name={animal.name} number={animal.number}/>
     ))}
    </>
  )
}

export default App