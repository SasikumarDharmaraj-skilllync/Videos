import Header from '../src/components/header'
import PlayVideo from '../src/components/playVideo';
import LeadForm from '../src/components/leadForm';
import HorizontalCard from '../src/components/horizontalCard';

const VideoPlay = () => {
    const n = [1, 2, 3, 4, 5]
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
            <div className='row'>
                {n.map(() => (
                    <div className='col-4'>
                        <HorizontalCard />
                    </div>
                ))}
            </div>

        </>
    )
}

export default VideoPlay;