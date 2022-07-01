import Link from 'next/link';

const HorizontalCard = () => {

    return (
        <>
            <div className="card text-dark mb-3">
                <div className="card-body">
                    <Link href="/videoPlay/2">
                        {/* <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/autumn/autumn-leaves-against-a-blue-sky-photo-andrew-small.jpg' width="300px" height="150px" alt='' style={{ border: "2px solid black" }} /> */}
                        <video src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' width="300px" height="150px" alt='' style={{ border: "2px solid black" }}></video>
                    </Link>
                    <div className="card border-success mb-3">
                        <div className="card-header bg-transparent border-success">Title: Full Stack Development</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">Description: It was a computer science oriented Programme.</h5>
                        </div>
                        <div className="card-footer bg-transparent border-success">Date: 30-06-2022</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HorizontalCard;