import "./App.css";
type UsersType = {
  id: number;
  name: string;
};
function App() {
  console.log("hi");
  const names: string[] = ["Dymych", "Sveta", "Katya", "Victor", "Ignat"];
  const users: UsersType[] = [
    { id: 1241, name: "Dymych" },
    { id: 5135, name: "Sveta" },
    { id: 8235789, name: "Katya" },
    { id: 358315789, name: "Victor" },
    { id: 6542, name: "Ignat" },
  ];
  const liElements = names.map((n, index) => (
    <li key={index}>
      {n}
      {index}
    </li>
  ));
  const liUsersElements = users.map((n, index) => (
    <li key={index}>{n.name}</li>
  ));
  return (
    <>
      <h1>hi</h1>
      <ul>{liElements}</ul>
      <ul>{liUsersElements}</ul>
    </>
  );
}

export default App;
