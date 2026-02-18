function Fruits(){
    const fruits = ["Apple", "Banana", "Cherry"]
    const emptyList = fruits.length === 0 && <p>No Fruits Availble</p>

    return(
        <div>
            <h1>Fruits</h1>
            {fruits.length === 0 ? <p>No Fruits Availble</p> : null}
            {emptyList}
            <ul>
                {fruits.map((fruit, index)=> <li key ={index}>{fruit}</li>)}
            </ul>
        </div>
    )


}

export default Fruits

