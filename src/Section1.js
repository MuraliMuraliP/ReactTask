import sky from './assert/sky.jpg'
const Section1 = ()=>{
    return(
        <section className="set1">
        <div className="arrow1">
            <div className="point">
                <h1>
                   Murali.P
                </h1>
                <hr/>
                <p>Browsing Html Template </p>
                <a href="#" id='btn' className="btn"><i className="fa fa-download"></i> Download Cv </a>
                <a href="#" id='btn' className="btn"> <i className="fa fa-volume-control-phone"></i> Contact Me </a>
            </div>
        </div>
        <div className="round1">
            <img className="image" src={sky} alt=""/>
        </div>
    </section>
    )
}
export default Section1