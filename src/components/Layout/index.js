import React from "react";
import Footer from "../Footer";
import Header from "../Header";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
