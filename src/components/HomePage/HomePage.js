import styles from "./HomePage.module.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.HomePage}>
        <div>
          <img
            alt="Left Hook"
            src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          />
        </div>
        <div>
          <h1>Welcome to the NBRHD!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
