import Link from 'next/link';
import VideoThumbnail from 'react-video-thumbnail';
const Card = () => {
    return (
        <>
            <div class="card text-dark col-8 mb-3">
                <div class="card-body">
                    <div className="row">
                        <div className="col-6">
                            <Link href="/videoPlay">
                                {/* <video
                                    className="mediaInput_media"
                                    height="200px"
                                    width=""
                                    controls
                                    src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
                                    controlsList="nodownload"
                                // onContextMenu="return false;"
                                /> */}
                                {/* <img src='https://www.w3schools.com/images/w3schools_green.jpg' /> */}
                                <VideoThumbnail
                                    videoUrl="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
                                    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                                    width={120}
                                    height={80}
                                />
                            </Link>
                        </div>
                        <div className="col-6">
                            <p>Title: Full Stack Development</p>
                            <p>Description: It was a computer science oriented Programme</p>
                            <p>Date: 30-06-2022 </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;