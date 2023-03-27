export function AirConditioner({ data }) {
  const { name, price, specification, warranty } = data;
  return (
    <>
      <h1>{name}</h1>
      <p>price INR {price}</p>
      <p>Specification :{specification}</p>
      <p>Warrenty : {warranty}</p>
    </>
  );
}
