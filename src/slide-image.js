import React from "react";

class SlideImage extends React.Component {
  render() {
    return (
      <div className="slick-slide">
        <img
          className="slick-image"
          src={this.props.image.source}
          alt={this.props.image.alt}
        />
      </div>
    );
  }
}

export default SlideImage;
