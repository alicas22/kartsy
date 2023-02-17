import "./Footer.css"

const Footer = () =>{

    return (
        <div className='main-footer-container'>
            <div className="tech-and-about-container">
                <div className="first-column">
                    <p style = {{textDecoration:"underline", color:"rgb(30, 30, 30)"}}>Technology:</p>
                    <p><a href = "https://www.javascript.com/"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Javascript</a></p>
                    <p><a href = "https://www.python.org/"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Python</a></p>
                    <p><a href = "https://reactjs.org/"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>React</a></p>
                    <p><a href = "https://redux.js.org/"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Redux</a></p>
                </div>
                <div className="second-column">
                    <p><a href = "https://flask.palletsprojects.com/en/2.2.x/"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Flask</a></p>
                    <p><a href = "https://www.sqlalchemy.org/"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>SqlAlchemy</a></p>
                    <p><a href = "https://www.postgresql.org/"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>PostgresSQL</a></p>
                    <p><a href = "https://alembic.sqlalchemy.org/en/latest/"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Alembic</a></p>
                </div>
                <div className="third-column">
                    <p style = {{textDecoration:"underline", color:"rgb(30, 30, 30)"}}>Developers:</p>
                    <p><a href = "https://github.com/Katherin4u"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Katherin Garcia</a></p>
                    <p><a href = "https://github.com/alicas22"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Anthony Licas</a></p>
                    <p><a href = "https://github.com/Ruidan-Zhang"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Ruidan Zhang</a></p>
                    <p><a href = "https://github.com/sophmain"  style={{textDecoration: "none", color:"rgb(30, 30, 30)"}}>Sophie Main</a></p>
                </div>
            </div>
            <p style={{color:"rgb(30, 30, 30)"}}><i class="fa-regular fa-copyright"></i> 2023 Kartsy, Inc. </p>
            <p style={{color:"rgb(30, 30, 30)"}}>Merchant is Kartsy, Inc. (USA), and the currency in which the seller transacts is fake.</p>
            <p style={{color:"rgb(30, 30, 30)", marginBottom: "30px"}}>Kartsy, Inc., USA 117 Fake Street Brooklyn, NY 11201</p>
        </div>
    )
}

export default Footer;
