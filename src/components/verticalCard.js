import Link from 'next/link';

const VerticalCard = () => {


    return (
        <>
            <div className="card text-dark mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-5">
                            <Link href="/videoPlay/1">
                                <video src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' width="400px" height="250px" alt='' style={{ border: "2px solid black" }}></video>
                            </Link>
                        </div>
                        <div className="col-7">
                            <div className="card border-success mb-3">
                                <div className="card-header bg-transparent border-success">Title: Full Stack Development</div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">Description: It was a computer science oriented Programme.</h5>
                                </div>
                                <div className="card-footer bg-transparent border-success">Date: 30-06-2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerticalCard;