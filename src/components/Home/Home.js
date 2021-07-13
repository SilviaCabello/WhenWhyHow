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
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="explore-profile">
        <Link to="/login">
          <button className="profile-btn">Login to your Profile</button>
        </Link>
      </div>


      <div className="home-cards-container">
        
        <div className="home-card">
          <img className="icon-home-card" src="https://i.imgur.com/rMdfN43.png" alt="Observe your bank behavior better"/>
          <p className="text-home-card">Observe your bank behavior better</p>
        </div>

        <div className="home-card">
          <img className="icon-home-card" src="https://i.imgur.com/1fusPxw.png" alt="Identify new trends and patterns"/>
          <p className="text-home-card">Identify new trends and patterns</p>
        </div>

        <div className="home-card">
          <img className="icon-home-card" src="https://i.imgur.com/a12fpkL.png" alt="Get regular updates when salary comes in"/>
          <p className="text-home-card">Get regular updates when salary comes in</p>
        </div>

        <div className="home-card">
          <img className="icon-home-card" src="https://i.imgur.com/MdbpwET.png" alt="Get new ideas for smart investments"/>
          <p className="text-home-card">Get new ideas for smart investments</p>
        </div>

      </div>
      </div>
    </div>
   </div>
  );
}

export default Home;
