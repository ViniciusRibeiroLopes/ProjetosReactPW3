function Javascript() {
  const name = "Vinícius";
  let age = 17;

  const soma = (a, b) => a + b;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{soma(2, 3)}</h1>
      <h1>{soma(5, 10)}</h1>
    </div>
  );
}
export default Javascript;
