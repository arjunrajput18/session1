import "./styles.css";
import { SumNumber } from "./SumNumber";
import { AirConditioner } from "./AirConditioner";
import { productDetails } from "./productDetails";
export default function App() {
  return (
    <div className="App">
      <AirConditioner data={productDetails} />
      <SumNumber firstNumber={4} secondNumber={5} />
    </div>
  );
}
