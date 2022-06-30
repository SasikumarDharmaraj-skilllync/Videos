import Link from 'next/link';

const VerticalCard = () => {


    return (
        <>
            <div class="card text-dark mb-3">
                <div class="card-body">
                    <div className="row">
                        <div className="col-6">
                            <Link href="/videoPlay">
                                <img src='https://www.w3schools.com/images/w3schools_green.jpg' alt='sasa' />
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

export default VerticalCard;