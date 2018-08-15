import React from "react";

class SlideVideo extends React.Component {
  render() {
    return (
      <div className="slick-slide">
        <iframe
          frameBorder="0"
          allowFullScreen="1"
          allow="autoplay; encrypted-media"
          title="YouTube video player"
          width="640"
          height="360"
          src={
            this.props.video.source +
            "?loop=0&amp;modestbranding=1&amp;widget_referrer=https%3A%2F%2Fstores.maxmuscle.com%2Fca-stockton-523&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fstores.maxmuscle.com&amp;showinfo=0&amp;rel=0&amp;widgetid=" +
            this.props.video.id
          }
          id={"widget" + this.props.video.id}
          className="slick-video"
        />
      </div>
    );
  }
}

export default SlideVideo;
