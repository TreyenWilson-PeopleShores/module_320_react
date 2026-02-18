import "./Header.css";


function Header(props){
    return(
        <div className = "Header">
            <b>{props.name}</b>
        </div>
    )
}

export default Header;