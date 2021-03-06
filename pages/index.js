import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../src/components/header'
import VerticalCard from '../src/components/verticalCard'
import { useState } from 'react'

export default function Home() {
  const nextLoad = () => {
    let temp = [...n];
    let tem = temp[temp.length - 1];
    for (let i = 0; i < 5; i++) {
      tem = tem + 1;
      temp.push(tem);
    }
    // console.log(temp);
    setN(temp);
  }
  // const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const [n, setN] = useState([1, 2, 3, 4, 5])
  return (
    <div className={styles.container}>
      <Head>
        <title>SKLC - Videos</title>
        <meta name="description" content="SKill-lync video view application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='dark_bg'>
        <div className='container pt-5'> 
          <div className='py-5'>
            {n.map(() => (
              <div className="col-md-8 col-sm-12 offset-sm-0 offset-md-2 mb-5">
                <VerticalCard />
              </div>
            ))}
          </div>
          {/* <button className='btn btn-primary' onClick={nextLoad}>Load more</button> */}
        </div>
      </div> 
    </div>
  )
}
