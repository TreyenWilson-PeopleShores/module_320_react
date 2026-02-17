import EmployeeCard from "./components/EmployeeCard";
import "./App.css";
// Employee data — just a plain JavaScript object
const employee = {
  firstName: "Julie",
  lastName: "Taylor",
  title: "VP of Marketing 2",
  phone: "781-000-0002",
  email: "jtaylor@fakeemail.com",
  picture: "https://randomuser.me/api/portraits/women/2.jpg",
};
function App() {
  return (
    <div className="app">
      <h1>My First React Component</h1>
      <EmployeeCard employee={employee} />
    </div>
  );
}
export default App;