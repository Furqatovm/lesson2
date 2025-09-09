import Client from "./client";
import Discount from "./discount";
import Header from "./header";
import Hero from "./hero";
import Question from "./question";
import Second from "./second";

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Second />
      <Client />
      <Discount />
      <Question />
    </div>
  );
}

export default App;
