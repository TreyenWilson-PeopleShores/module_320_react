import EmployeeCard from "./components/EmployeePage";
import "./App.css";
// Employee data — just a plain JavaScript object
const employee = {
  firstName: "Julie",
  lastName: "Taylor",
  title: "VP of Marketing",
  officePhone: "781-000-0002",
  phone: "617-000-0002",
  email: "jtaylor@fakeemail.com",
  picture: "https://randomuser.me/api/portraits/women/2.jpg",
};
function App() {
  return (
    <div className="app">
      
      <EmployeeCard employee={employee} />
    </div>
  );
}
export default App;