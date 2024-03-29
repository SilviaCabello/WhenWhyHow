import "./Home.css";
import { Link } from "react-router-dom";
import NavBarHome from "../NavBar/NavBarHome";

function Home() {
  return (
    <div>
      <NavBarHome />
      <div className="container-background">
        <div className="container">
          <div className="background-homepage">
            <img
              className="picture"
              src="https://res.cloudinary.com/dnefeccae/image/upload/v1623401665/pexels-andrea-piacquadio-3781660_e8ffrj.jpg"
              alt=""
            />
          </div>

          <div className="intro-text">
            <br></br>
            <h1 className="intro-title">
              Welcome to <span className="decor">Smart</span> Account!
            </h1>
            <h4 className="second-intro-title">
              Our banking app just got even better!
            </h4>
            <br></br>

            <p className="text-intropage">
              Do you want to be better at saving? If you’re trying to be better
              with your money, our Smart Account is the perfect app for you.
              Smart account lets you get tailored ‘insights’ into your spendings
              with its newest feature – <span className="decor-text">My Digital Channels</span>. 
              Just click on the login button to sign into your profile and you’re
              good to go.
            </p>
          </div>
          <div className="explore-profile">
            <Link to="/login">
              <button className="profile-btn">Login to your Profile</button>
            </Link>
          </div>

          <div className="home-cards-container">
            <div className="home-card">
              <img
                className="icon-home-card"
                src="https://i.imgur.com/rMdfN43.png"
                alt="Observe your bank behavior better"
              />
              <p className="text-home-card">
                Observe your bank behavior better
              </p>
            </div>

            <div className="home-card">
              <img
                className="icon-home-card"
                src="https://i.imgur.com/1fusPxw.png"
                alt="Identify new trends and patterns"
              />
              <p className="text-home-card">Identify new trends and patterns</p>
            </div>

            <div className="home-card">
              <img
                className="icon-home-card"
                src="https://i.imgur.com/a12fpkL.png"
                alt="Get regular updates when salary comes in"
              />
              <p className="text-home-card">
                Get regular updates when salary comes in
              </p>
            </div>

            <div className="home-card">
              <img
                className="icon-home-card"
                src="https://i.imgur.com/MdbpwET.png"
                alt="Get new ideas for smart investments"
              />
              <p className="text-home-card">
                Get new ideas for smart investments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
