import React from "react";
import { useSelector } from "react-redux";

import "./HomePage.css";

function HomePage({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
 
  

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <img
          className="sodapic"
          alt="welcome-gif"
          src="https://media.giphy.com/media/py1QeWtxdRzxK/giphy.gif"
        />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="home">
          <img
            className="sodapic"
            alt="welcome-gif"
            src="https://www.smilecolumbia.com/x/lc-content/uploads/2018/01/In-Coke-the-Fizz-Is-as-Bad-as-the-Sugar.png.webp"
          />
        </div>
      </>
    );
  }
  return <div id="main">{isLoaded && sessionLinks}</div>;
}

export default HomePage;
