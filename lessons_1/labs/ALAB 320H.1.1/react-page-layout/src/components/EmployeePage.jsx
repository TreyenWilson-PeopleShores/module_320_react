import "./EmployeePage.css";
function EmployeeCard({ employee }) {
  return (
    <div className="card">
      {/* Profile section */}
      <div className="card__profile">
          <img
            className="card__photo"
            src={employee.picture}
            alt={employee.firstName + " " + employee.lastName}
          />
        <div className="personalInfo"> 
          <h2 className="card__name">
            {employee.firstName} {employee.lastName}
          </h2>
          <p className="card__title">{employee.title}</p>
        </div>
      </div>
      {/* Contact details */}
      <ul className="card__details">
        <ol className="card__row">
          <span className="card__label">Call Office</span>
          <span className="card__value">{employee.phone}</span>
        </ol>
        <ol className="card__row">
          <span className="card__label">Call Mobile</span>
          <span className="card__value">{employee.phone}</span>
        </ol>
        <ol className="card__row">
          <span className="card__label">SMS</span>
          <span className="card__value">{employee.email}</span>
        </ol>
        <ol className="card__row">
          <span className="card__label">Email</span>
          <span className="card__value">{employee.email}</span>
        </ol>
      </ul>
    </div>
  );
}
export default EmployeeCard;