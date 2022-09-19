
function Copyright() {
    return (
        <p>
            {"Copyright © Dingo "}
            {new Date().getFullYear()}
        </p>
    )
}

function Github(){
    return (
        <p>
            <a href="https://github.com/anthonymarkreynolds/Dingo-Drum" target="blank">Github</a>
            {/* <img src="./public/GitHub-Mark.png" alt="github icon" /> */}
        </p>
        
    )
}


const Footer = (props) => {
  return (
    <footer>
        <Copyright />
        <Github />
    </footer>

  );
};

export default Footer;
