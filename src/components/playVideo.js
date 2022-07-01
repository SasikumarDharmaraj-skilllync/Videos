const PlayVideo = (props) => {
    return (
        <>
            <div className="card dark_card mb-3 txt-white">
                <div className="card-body">
                    <video
                        className="mediaInput_media"
                        height="312px"
                        width="100%"
                        controls
                        src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
                        controlsList="nodownload"
                        autoPlay="autoplay"
                    // onContextMenu="return false;"
                    />
                    <h4 className="mt-2">Full Stack Development</h4>
                    <p>It was a computer science oriented Programme.</p>
                    <small>30-06-2022</small>
                </div>
            </div>
        </>
    )
}

export default PlayVideo;