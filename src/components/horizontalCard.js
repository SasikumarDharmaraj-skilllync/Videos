import Link from 'next/link';

const HorizontalCard = () => {

    return (
        <>
            <div className="card mb-3 dark_card similar_card">
                <div className="card-body txt-white">
                    <Link href="/videoPlay/2">
                        <video src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4' alt='similar_video' ></video>
                    </Link>
                    <h5 className="card-title  mt-2 border-success">Title: Full Stack Development</h5>
                    <p className="card-title">Description: It was a computer science oriented Program.</p>

                </div>
                <div className="card-footer border-success txt-white">Date: 30-06-2022</div>
            </div>

        </>
    )
}

export default HorizontalCard;