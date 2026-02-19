import "./EmployeePage.css";
import Header from "./Header.jsx"
function EmployeeCard({ employee }) {
  return (
    <div className = "div-container">
      <Header name = "Employee" arrow = {true}/>
      <div className="card">
        
        {/* Profile section */}
        <div className="card__profile">
            <img
              className="card__photo"
              src={employee[1].picture}
              alt={employee[1].firstName + " " + employee[1].lastName}
            />
          <div className="personalInfo"> 
            <h2 className="card__name">
              {employee[1].firstName} {employee[1].lastName}
            </h2>
            <p className="card__title">{employee[1].title}</p>
          </div>
        </div>
        {/* Contact details */}
        <p className="card__details">
          <ol className="card__row">
            <span className="card__label">Call Office </span>
            <span className="card__value">{employee[1].officePhone} </span>
            <span className = "rightArrow">{">"}</span>
          </ol>
          <ol className="card__row">
            <span className="card__label">Call Mobile</span>
            <span className="card__value">{employee[1].phone}</span>
            <span className = "rightArrow">{">"}</span>
          </ol>
          <ol className="card__row">
            <span className="card__label">SMS</span>
            <span className="card__value">{employee[1].phone}</span>
            <span className = "rightArrow">{">"}</span>
          </ol>
          <ol className="card__row">
            <span className="card__label">Email</span>
            <span className="card__value">{employee[1].email}</span>
            <span className = "rightArrow">{">"}</span>
          </ol>
        </p>
      </div>
    </div>
  );
}
export default EmployeeCard;