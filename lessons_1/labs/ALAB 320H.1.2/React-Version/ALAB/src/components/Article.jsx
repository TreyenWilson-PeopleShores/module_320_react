    
    
function Article(prop){
    return(

        <article> 
            <time datetime="2020-11-11">11/11/20</time>
            <h2 className="title">{prop.title}</h2>
            <img src={prop.imageLink} alt={prop.imageAlt}/>
            <p>{prop.text}</p>
            <aside>
                <a className="continue" href ="#">Continues ...</a>
            </aside>
        </article>

    )
}


export default Article