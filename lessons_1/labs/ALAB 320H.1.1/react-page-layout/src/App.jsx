import EmployeeCard from "./components/EmployeePage";
import "./App.css";
import employee from "./information/EmployeeInformation"
// Employee data — just a plain JavaScript object

function App() {
  return (
    <div className="app">
      
      <EmployeeCard employee={employee} />
    </div>
  );
}
export default App;