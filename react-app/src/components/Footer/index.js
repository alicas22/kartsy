import "./Footer.css"

const Footer = () =>{

    return (
        <div className='cart-footer'>
        <div className="footer-top">
        <div className='footer-tech'>
            <p style = {{textDecoration:"underline"}}>Technology:</p>
            <p><a href = "https://www.javascript.com/"  style={{textDecoration: "none", color:"black"}}>Javascript</a></p>
            <p><a href = "https://www.python.org/"  style={{textDecoration: "none", color:"black"}}>Python</a></p>
            <p><a href = "https://reactjs.org/"  style={{textDecoration: "none", color:"black"}}>React</a></p>
            <p><a href = "https://redux.js.org/"  style={{textDecoration: "none", color:"black"}}>Redux</a></p>
            <p><a href = "https://flask.palletsprojects.com/en/2.2.x/"  style={{textDecoration: "none", color:"black"}}>Flask</a></p>
            <p><a href = "https://www.sqlalchemy.org/"  style={{textDecoration: "none", color:"black"}}>SqlAlchemy</a></p>
            <p><a href = "https://www.postgresql.org/"  style={{textDecoration: "none", color:"black"}}>PostgresSQL</a></p>
            <p><a href = "https://alembic.sqlalchemy.org/en/latest/"  style={{textDecoration: "none", color:"black"}}>Alembic</a></p>
        </div>
        <div>
        <p style = {{textDecoration:"underline"}}>About:</p>
        <p><a href = "https://github.com/Katherin4u"  style={{textDecoration: "none", color:"black"}}>Katherin</a></p>
        <p><a href = "https://github.com/alicas22"  style={{textDecoration: "none", color:"black"}}>Anthony</a></p>
        <p><a href = "https://github.com/Ruidan-Zhang"  style={{textDecoration: "none", color:"black"}}>Ruidan</a></p>
        <p><a href = "https://github.com/sophmain"  style={{textDecoration: "none", color:"black"}}>Sophie</a></p>
        </div>
        </div>
        <p><i class="fa-regular fa-copyright"></i> 2023 Kartsy, Inc. </p>
        <p>Merchant is Kartsy, Inc. (USA), and the currency in which the seller transacts is fake.</p>
        <p>Kartsy, Inc., USA 117 Fake Street Brooklyn, NY 11201</p>
    </div>
    )
}

export default Footer;
