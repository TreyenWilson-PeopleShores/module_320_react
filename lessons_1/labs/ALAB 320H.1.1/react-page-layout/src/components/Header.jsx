import "./Header.css";


function Header(title){
    return(
        <div className = "Header">
            <b>{title.name}</b>
        </div>
    )
}

export default Header;