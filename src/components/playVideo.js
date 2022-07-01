const PlayVideo = (props) => {
    return (
        <>
            <div className="card text-dark mb-3">
                <div className="card-body">
                    <video
                        className="mediaInput_media"
                        height="400px"
                        width="800px"
                        controls
                        src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
                        controlsList="nodownload"
                        autoplay="autoplay"
                    // onContextMenu="return false;"
                    />
                    <h6 className="mt-2">Full Stack Development</h6>
                    <p>It was a computer science oriented Programme.</p>
                    <small>30-06-2022</small>
                </div>
            </div>
        </>
    )
}

export default PlayVideo;