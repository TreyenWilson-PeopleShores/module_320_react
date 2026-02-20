function Score(props){
    return(
        <>
            <ul className="container">
                <li>Date: <ul><li className="result">{props.date}</li></ul></li>
                <li>Score: <ul><li className="result">{props.score}</li></ul></li>
            </ul> 
        </>
    )

}


export default Score;