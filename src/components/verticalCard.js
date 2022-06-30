import Link from 'next/link';

const VerticalCard = () => {


    return (
        <>
            <div class="card text-dark mb-3">
                <div class="card-body">
                    <div className="row">
                        <div className="col-5">
                            <Link href="/videoPlay">
                                <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/autumn/autumn-leaves-against-a-blue-sky-photo-andrew-small.jpg' width="400px" height="250px" alt='sasa' style={{ border: "2px solid black" }} />
                            </Link>
                        </div>
                        <div className="col-7">
                            <div className="card border-success mb-3">
                                <div className="card-header bg-transparent border-success">Title: Full Stack Development</div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">Description: It was a computer science oriented Programme.</h5>
                                </div>
                                <div class="card-footer bg-transparent border-success">Date: 30-06-2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VerticalCard;