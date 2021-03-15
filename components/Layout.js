import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import VirtualTourDialog from "./VirtualTourDialog";

import navButtons from "../configs/navButtons";
import tourButton from "../configs/tourButton";

function Layout(props) {
  return (
    <div className="Layout">
      <VirtualTourDialog tourButton={tourButton} />
      <Header />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .Layout {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        .Content {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-family: Arial;
        }
      `}</style>
    </div>
  );
}

export default Layout;
