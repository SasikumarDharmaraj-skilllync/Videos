import PlayVideo from '../../src/components/playVideo';
import LeadForm from '../../src/components/leadForm';
import HorizontalCard from '../../src/components/horizontalCard';
import Head from 'next/head'
import Header from '../../src/components/header';


const videoID = () => {
    const n = [1, 2, 3]
    return (
        <>
            <Head>
                <title>SKLC - Videos</title>
                <meta name="description" content="SKill-lync video view application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='dark_bg'>
                <div className='container pt-5'>
                    <div className='row pt-5 pb-3'>
                        <div className='col-md-8 col-xs-12'>
                            <PlayVideo />
                        </div>
                        <div className='col-md-4 col-xs-12'>
                            <LeadForm />
                        </div>
                    </div>
                    <h4 className='txt-white mb-4'>Similar Videos</h4>
                    <div className='row'>
                        {n.map((i) => (
                            <div key={i} className='col-sm-4 col-xs-12'>
                                <HorizontalCard />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default videoID;