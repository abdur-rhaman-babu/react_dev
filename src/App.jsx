import Gellary from "./components/Gallery/Gellary";
// import Send from "./components/Send";

// import FilterAbleProductTable from "./Product/FilterAbleProductTable";
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
        <Gellary/>
        {/* <Send/> */}
    </div>
  )
};

export default App;