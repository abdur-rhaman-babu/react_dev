// import Send from "./components/Send";

import List from "./components/List";

// import Form from "./components/Form";
// import TrafficLight from "./components/TrafficLight";

// import FilterAbleProductTable from "./Product/FilterAbleProductTable";
// import Toolbar from './components/Toolbar';
const App = () => {
  // const PRODUCTS = [
  //   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  //   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  //   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  //   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  //   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  //   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  // ];
  return (
    <div>
        {/* <FilterAbleProductTable products = {PRODUCTS}/> */}
      {/* <Send/> */}
      {/* <Toolbar
        onPlayMovie = {()=> alert('Playing....')}
        onUploadImage = {()=> alert('Uploading...!')}
      /> */}
      {/* <TrafficLight/> */}
      {/* <Form/> */}
      <List/>
    </div>
  )
};

export default App;