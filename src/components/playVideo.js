const PlayVideo = () => {
    return (
        <>
            <div class="card text-dark mb-3">
                <div class="card-body">
                    <video
                        className="mediaInput_media"
                        height="400px"
                        width="800px"
                        controls
                        src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
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