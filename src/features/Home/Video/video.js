import React from 'react'

const video = (props) => {

    return (
        <div
        style={{
          position: "relative",
          paddingTop: 0,
          height: "650px"
        }} >
            <iframe
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                }}
                src="https://www.youtube.com/embed/DX48mJjL7oU"
                frameBorder="0"
                allowTransparency="true"
            />
            {/* <button className="videoPoster" onClick={()=>handleClick()}></button> */}
    
        </div>
    //     <div
    //   className="video"
    //   style={{
    //     position: "relative",
    //     paddingBottom: "56.25%" /* 16:9 */,
    //     paddingTop: 25,
    //     height: 0
    //   }}
    // >
    //   <iframe
    //     style={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       width: "100%",
    //       height: "100%"
    //     }}
    //     src={`https://www.youtube.com/embed/DX48mJjL7oU`}
    //     frameBorder="0"
    //   />
    // </div>
    )
}

export default video

