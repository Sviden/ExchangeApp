import styles from "../../styles/about.module.scss";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h3>COMPNAME</h3>
                <h6>
                    Lorem ipsum dolor sit amet, Fusce lobortis dapibus urna non eleifend. Fusce sit amet massa diam. Quisque augue magna, tincidunt eget mattis vitae, rhoncus a nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean et pharetra ipsum. Interdum et malesuada fames
                </h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel risus scelerisque magna tincidunt ultricies sed vitae justo. Integer fringilla sodales lorem eget fermentum. Maecenas scelerisque gravida nisl id vehicula.
                    Cras auctor, felis sit amet tincidunt pretium, quam est mattis leo, at vulputate quam magna vel turpis. Vestibulum ut lacus eu justo efficitur pellentesque at sed lacus. Praesent ultrices venenatis nunc, in faucibus
                    lacus consequat eget. Fusce lobortis dapibus urna non eleifend. Fusce sit amet massa diam. Quisque augue magna, tincidunt eget mattis vitae, rhoncus a nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                    varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean et pharetra ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
                <ul>
                    {" "}
                    <li>
                        <AiFillInstagram /> instanick
                    </li>
                    <li>
                        <BsLinkedin /> linkedIn
                    </li>
                    <li>
                        <BsFacebook /> facebook page
                    </li>
                </ul>
            </div>
        </div>
    );
};
