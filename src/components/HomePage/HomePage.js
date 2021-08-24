import HomeIMG from "../../Assets/HomeIMG.jpg";
import styles from "./HomePage.module.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.homeIMG}>
        <img src={HomeIMG} alt="Home" />
      </div>
    </div>
  );
};

export default Home;
