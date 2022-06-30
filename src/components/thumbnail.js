import VideoThumbnail from 'react-video-thumbnail'
import Link from 'next/link';

const Thumbnail = () => {
    const sasi = () => {
        console.log("sasi")
    }
    return (
        <>
            <Link href="/videoPlay">
                <div onClick={sasi}>
                    <VideoThumbnail
                        videoUrl="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
                        thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                        width={120}
                        height={80}
                    />
                </div>

            </Link>
        </>
    )
}

export default Thumbnail;