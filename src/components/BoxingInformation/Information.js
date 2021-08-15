import ReactPlayer from "react-player/youtube";
import { LinkContainer } from "react-router-bootstrap";
import PageButton from "../UI/PageButton";
import styles from "./Information.module.css";

const Information = () => {
  return (
    <div className={styles.InformationPage}>
      <div className={styles.Title}>
        <h1>Learn To Box!</h1>
        <LinkContainer to="/Home">
          <PageButton>Build My Workout!</PageButton>
        </LinkContainer>
        <div className={styles.PunchNumbers}>
          <h3>Punch Numbers</h3>
          <p>
            Orthodox: Left Hand Forward (Odd #'s Left Hand, Even #'s Right Hand)
          </p>
          <p>
            SouthPaw: Right Hand Forward (Odd #'s Right Hand, Even #'s Left
            Hand)
          </p>
          <ul>
            <li>1: Jab (Lead Hand Straight)</li>
            <li>2: Cross (Rear Hand Straight)</li>
            <li>3: Lead Hook </li>
            <li>4: Rear Hook </li>
            <li>5: Lead Uppercut</li>
            <li>6: Rear Uppercut</li>
            <li>7: Lead Body Hook</li>
            <li>8: Rear Body Hook</li>
          </ul>
        </div>
      </div>

      <div className={styles.Library}>
        <h2>The Library:</h2>

        <div>
          <div md={6}>
            <h3>The Jab: #1</h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=LpmcS_ixyKE" />
          </div>
          <div md={6}>
            <h3>The Cross: #2</h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=sK-6Ujp3KYY" />
          </div>
        </div>

        <div></div>
        <div>
          <h3>The Lead Hook: #3</h3>
          <ReactPlayer url="https://www.youtube.com/watch?v=vmAFFvdGc_o" />
        </div>
        <div>
          <h3>The Rear Hook: #4</h3>
          <ReactPlayer url="https://www.youtube.com/watch?v=GgDyIBjMY-I" />
        </div>
        <div>
          <h3>Uppercuts: #'s 5 and 6</h3>
          <ReactPlayer url="https://www.youtube.com/watch?v=8uwaPQFraqg" />
        </div>
        <div>
          <h3>The Liver Shot (Only From Orthodox): #7</h3>
          <ReactPlayer url="https://www.youtube.com/watch?v=JhSgZSxy7Y0" />
        </div>
        <div>
          <h3>How To Slip</h3>
          <ReactPlayer url="https://www.youtube.com/watch?v=x21X13f_0Bs" />
        </div>
      </div>
    </div>
  );
};

export default Information;
