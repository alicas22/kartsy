import { useHistory } from 'react-router-dom'
import './pageNotFound.css'


const NotFound = () => {
    const history = useHistory()

    const returnHome = (e) => {
        e.preventDefault()
        history.push('/')
    }
   
    return (
        <div className="not-found-container">
            <div className="not-found">
                <h1>Page Not Found!</h1>
            </div>
            <div className='image-not-found'>
                <img className='img-not-found' src='https://www.cloudways.com/blog/wp-content/uploads/wordpress-404-error.jpg'></img>
            </div>
            <div className="not-found2" onClick={(e) => returnHome(e)}>
                <h3>Return Home</h3>
            </div>
        </div>
    )
}

export default NotFound