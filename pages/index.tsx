import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import appleAppStore from '../public/applestore.png'
import googlePlayStore from '../public/googlestore.png'
import Screenshot1 from '../public/Screenshot1.png'
import Screenshot2 from '../public/Screenshot2.png'
import Screenshot3 from '../public/Screenshot3.png'


const Home: NextPage = () => {


  const carouselAutoPlay = useCallback(() => {
    const carousel = document.getElementsByClassName('carousel')
    const slides = document.getElementsByClassName('carousel-item')
    let currentSlide = 0

    const imageTransition = () => {
      if (carousel.length > 0) {

        if (currentSlide < (slides.length - 1)) {
          carousel[0].scrollLeft += 150
          currentSlide++

        } else {
          carousel[0].scroll(0, 0)
          currentSlide = 0
        }

      }
    }

    return setInterval(imageTransition, 5000)
  }, [])


  useEffect(() => {
    const id = carouselAutoPlay()

    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Head>
        <title>Iron Plus - Tools for Powerlifters</title>
      </Head>
      <div className='flex flex-col'>
        <div className="hero py-10">
          <div className="hero-content flex-col md:flex-row">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="carousel w-64 rounded-box aspect-iphone">
                  <div id="slide1" className="carousel-item w-full">
                    <Image src={Screenshot1} alt="Screenshot of RPE Calculator" />
                  </div>
                  <div id="slide2" className="carousel-item w-full">
                    <Image src={Screenshot2} alt='Screenshot of converstion' />

                  </div>
                  <div id="slide3" className="carousel-item w-full">
                    <Image src={Screenshot3} alt='Screenshot of warm up calculator' />
                  </div>
                </div>
                <div className="w-64 carousel rounded-box">
                </div>
              </div>
            </div>
            <div className='max-w-lg flex flex-col'>
              <h1 className="text-5xl font-bold text-center lg:text-justify">Iron Plus</h1>
              <p className="py-6">All the gym calculations you need. RPE Calculator, Kilogram and Pound Converter, and Warm Up Calculator all in one. Please feel free to reach out to me at travis@napes.dev or @napes.lifts on Instagram with feedback/feature suggestions!</p>
              <div className='flex flex-col items-center md:flex-row gap-4'>
                <a href='https://play.google.com/store/apps/details?id=com.napesdev.ironplus'>
                  <Image src={googlePlayStore} alt='Download from Google Play Store' width={200} height={59} />
                </a>
                <a href='https://apps.apple.com/app/id1545857824'>
                  <Image src={appleAppStore} alt='Download from Apple App Store' width={200} height={59} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home

