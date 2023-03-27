const headerStyle = { color: "green" };
const fonstSizeChange = { fontSize: "20px" };

export function SumNumber({ firstNumber, secondNumber }) {
  // console.log({props})
  return (
    <div>
      <h1 style={headerStyle}>Sum of two number</h1>
      <p style={fonstSizeChange}>first number : 7</p>
      <p style={fonstSizeChange}>second number :9</p>
      <p style={fonstSizeChange}>total :16</p>
    </div>
  );
}
