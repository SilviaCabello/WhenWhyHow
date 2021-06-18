import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="background-homepage"></div>
      <img
        className="picture"
        src="https://res.cloudinary.com/dnefeccae/image/upload/v1623401665/pexels-andrea-piacquadio-3781660_e8ffrj.jpg"
        alt=""
      />

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
        <button className="profile-btn">Explore your Profile</button>
      </div>
      <div className="intro-boxcontainer">
        <img
          className="intro-box"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1623398397/Group_11_tslx41.png"
          alt=""
        />
        <img
          className="intro-box"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1623398398/Group_12_ukbnrw.png"
          alt=""
        />
        <img
          className="intro-box"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1623398401/Group_13_dgjud1.png"
          alt=""
        />
        <img
          className="intro-box"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1623398405/Group_14_tywqtu.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
