import "./EmployeeDirectory.css"
import Header from "./Header.jsx"

function EmployeeDirectory({employee}){
    function checkEmployee(){

        for(let index of employee){
            console.log(index)
        }
    }
    return(
        <div className = "main-div">
            <Header name = "Employee Directory"/>
            <input className="searchBar" type="text"/>
            <div className = "employeeGroupList">
                {checkEmployee()}
                <span className = "employee">{employee[0].firstName}</span>
                <span className = "employee">test</span>
            </div>
        </div>
    )
}

export default EmployeeDirectory;