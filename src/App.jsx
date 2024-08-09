import Cards from "./components/Cards";
import Test from "./components/Test";

const App = () => {
  let myobj = {
    username: "Pravesh",
    age: 21,
  };

  let newArr = [1, 2, 3];
  return (
    <div>
      <Test />
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">hello</h1>
      <Cards username="Pravesh" btnText="click me" />
      <Cards username="chaiaurcode" />
    </div>
  );
};

export default App;
