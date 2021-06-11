import "./Home.css";

function Home() {
  return (
    <div className="container">
      <img
        className="picture"
        src="https://res.cloudinary.com/dnefeccae/image/upload/v1623246641/pexels-andrea-piacquadio-3781524_y1sly8.jpg"
        alt=""
      />
      <div className="explore-profile">
        <button className="profile-btn">Explore your Profile</button>
      </div>
    </div>
  );
}

export default Home;
