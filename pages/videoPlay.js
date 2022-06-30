import Header from '../src/components/header'
import PlayVideo from '../src/components/playVideo';
import LeadForm from '../src/components/leadForm';
import Card from '../src/components/card';

const VideoPlay = () => {
    return (
        <>
            <Header />
            <div className='row'>
                <div className='col-8'>
                    <PlayVideo />
                </div>
                <div className='col-4'>
                    <LeadForm />
                </div>
            </div>
            <Card />
        </>
    )
}

export default VideoPlay;