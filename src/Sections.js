const Sections = (props)=>{
    return(
        <section className="set5">
        <h3>Pricing</h3>
        <hr/>
        <div className="boxes">
            <div className="box">
            <i className="fa fa-money" ></i>
                <h1>22$</h1>
                <p>Web Development <br/>
                    Advertising
                </p>
                <a href="#" className="btn">$ Buy</a>
            </div>
            <div className="box">
                <i className="fa fa-dollar" ></i>
                <h1>35$</h1>
                <p>Web Development <br/>
                    Advertising <br/>
                    Game Development
                </p>
                <a href="#" className="btn">$ Buy</a>
            </div>
            <div className="box">
                <i className="fa fa-diamond"></i>
                <h1>50$</h1>
                <p>Web Development <br/>
                    Advertising <br/>
                    Game Development <br/>
                    Music Writing <br/>
                    Photography
                </p>
                <a href="#" className="btn">$ Buy</a>
            </div>
        </div>
     
    </section>
   
    )
}
export default Sections