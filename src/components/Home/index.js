import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-page-container">
      <div className="home-context">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shopnow-button">
          Shop Now
        </button>
      </div>
      <img
        alt="clothes that get you noticed"
        className="home-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      />
    </div>
  </div>
)

export default Home
