import "./EmployeeDirectory.css"
import Header from "./Header.jsx"

function test(person){
    return (
        <div className="card_profile">
            <img
              className="card_photo"
              src={person.picture}
              alt={person.firstName + " " + person.lastName}
            />
          <div className="personalInfo"> 
            <h2 className="card__name">
              {person.firstName} {person.lastName}
            </h2>
            <p className="card__title">{person.title}</p>
          </div>
        </div>
    )
}
function EmployeeDirectory({employee}){

    return(
        <div className = "main-div">
            <Header name = "Employee Directory"/>
            <input className="searchBar" type="text"/>
            <div className = "employeeGroupList">


                {employee.map((employees, index)=>  <span class="employee" key={index}>{test(employees)}</span>)}

            </div>
        </div>
    )
}

export default EmployeeDirectory;