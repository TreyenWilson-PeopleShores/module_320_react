import EmployeeCard from "./components/EmployeePage";
import "./App.css";
import employee from "./information/EmployeeInformation"
import EmployeeDirectory from "./components/EmployeeDirectory";
// Employee data — just a plain JavaScript object

function App() {
  return (
    <div className="app">
      <div className="employeeDirectory">
        <EmployeeDirectory></EmployeeDirectory>
      </div>
      <div className="employeeCard">
        <EmployeeCard employee={employee} />
      </div>
      
      
    </div>
  );
}
export default App;