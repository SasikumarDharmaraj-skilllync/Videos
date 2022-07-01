import PlayVideo from '../../src/components/playVideo';
import LeadForm from '../../src/components/leadForm';
import HorizontalCard from '../../src/components/horizontalCard';
import Head from 'next/head'
import Header from '../../src/components/header';


const VideoPlay = () => {
    const n = [1, 2, 3]
    return (
        <>
           <Head>
                <title>SKLC - Videos</title>
                <meta name="description" content="SKill-lync video view application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <PlayVideo />
                    </div>
                    <div className='col-4'>
                        <LeadForm />
                    </div>
                </div>
                <div className='row'>
                    {n.map(() => (
                        <div className='col-4'>
                            <HorizontalCard />
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default VideoPlay;