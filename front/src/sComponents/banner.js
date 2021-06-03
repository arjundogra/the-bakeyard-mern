import React from "react";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.array = ["bg1", "bg2", "bg3"];
    this.state = {
      banner: 0,
      update: false,
    };
    this.changeBanner = this.changeBanner.bind(this);
  }

  changeBanner = () => {
    this.setState({ update: true });
    let pos = this.state.banner;
    console.log("Run");
    if (pos == this.array.length - 1) {
      this.setState({ banner: 0 });
    } else {
      this.setState({ banner: this.state.banner + 1 });
    }
    setTimeout(() => this.setState({ update: false }), 2000);
  };

  componentDidMount() {
    setTimeout(() => this.setState({ update: false }), 2000);
    setInterval(this.changeBanner, 5000);
  }
  render() {
    // let ;
    console.log(this.state.banner);
    return (
      <div className="banner">
        <div className={`img ${this.state.update ? "fadeIn" : ""}`}>
          <img src={this.array[this.state.banner] + ".jpg"} />
        </div>
      </div>
    );
  }
}

export default Banner;
