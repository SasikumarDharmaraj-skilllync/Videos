import Link from 'next/link';

const HorizontalCard = () => {

    return (
        <>
            <div className="card text-dark mb-3">
                <div className="card-body">
                    <Link href="/videoPlay/2">
                        <video
                            src='http://media.w3.org/2010/05/sintel/trailer.mp4'
                            // src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' 
                            width="300px" height="150px" alt='' style={{ border: "2px solid black" }}></video>
                    </Link>
                    <div className="card border-success mb-3">
                        <div className="card-header bg-transparent border-success">Title: Sintel Trailer</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">Description: Which is an holly wood movie</h5>
                        </div>
                        <div className="card-footer bg-transparent border-success">Date: 30-06-2022</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HorizontalCard;