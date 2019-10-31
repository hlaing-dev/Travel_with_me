import React from 'react'
const YouTubeVideo = () => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 0,
        height: 0
      }}
    >
      <iframe title="i1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/DX48mJjL7oU`}
        frameBorder="0"
      />
    </div>
  );
};
export default YouTubeVideo