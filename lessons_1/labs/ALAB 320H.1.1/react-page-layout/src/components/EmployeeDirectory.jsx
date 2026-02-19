import "./EmployeeDirectory.css"
import Header from "./Header.jsx"

function EmployeeDirectory({employee}){

    return(
        <div className = "main-div">
            <Header name = "Employee Directory"/>
            <input className="searchBar" type="text"/>
            <div className = "employeeGroupList">
            {employee.map((employees, index)=> <p key={index}>{employees.firstName}</p>)}
            <span className = "employee">{employee[0].firstName}</span>
            <span className = "employee">test</span> 
            </div>
        </div>
    )
}

export default EmployeeDirectory;