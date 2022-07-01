import Link from 'next/link';

const VerticalCard = () => {
    return (
        <>
            <div className="card  mb-3 dark_card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-5 video-list">
                            <img src="https://skill-lync.com/nsimages/play_img.svg" />
                            <Link href="/videoPlay/1">
                                <video src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' alt='video'></video>
                            </Link>
                        </div>
                        <div className="col-7">
                            <div className="border-success mb-3 txt-white">
                                <div className="card-body">
                                    <h3 className="card-title   border-success">Title: Full Stack Development</h3>
                                    <p className="card-text">Description: It was a computer science oriented Programme.</p>
                                </div>
                                <div className="card-footer  border-success">Date: 30-06-2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerticalCard;