import "./Header.css";


function Header(props){
    if (props.arrow===true){
        return(
            <div className = "Header">
                <span className="leftArrow">{"<"}</span> <b>{props.name}</b>
            </div>
        )
    }
    else{
        return(
            <div className = "Header">
                <b>{props.name}</b>
            </div>
        )
    }

}

export default Header;