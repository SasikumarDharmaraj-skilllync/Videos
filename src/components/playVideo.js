const PlayVideo = (props) => {
    const Data = props.data
    console.log(props.data)
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
                </div>
            </div>
        </>
    )
}

export default PlayVideo;