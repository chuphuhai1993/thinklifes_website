'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { HeroData } from '@/app/data/siteData'

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
  }

  return (
    <section>
      <div className='overflow-hidden'>
        <div className='container relative z-20 pt-24'>
          <div className='relative z-20 grid lg:grid-cols-12 grid-cols-1 items-center justify-items-center gap-20 pb-10'>
            <div className='lg:col-span-12 col-span-1'>
              <div className='flex flex-col items-center gap-12'>
                <h1 className='text-center'>
                  Design Portfolio A Journey in Art & Innovation
                </h1>
                <div className='flex item-center gap-5'>
                  <Link href={'/#project'}>
                    <button className='px-12 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary hover:cursor-pointer duration-300'>
                      Explore
                    </button>
                  </Link>
                  <Link href={'/#categories'}>
                    <button className='px-12 py-3 font-medium text-primary border rounded-lg border-primary bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer duration-300'>
                      Create
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* floting images */}
          <div className='absolute top-16 -left-10  dark:opacity-10'>
            <Image
              src={'/images/banner/pattern1.svg'}
              alt='ptrn1'
              width={141}
              height={141}
            />
          </div>
          <div className='absolute bottom-0 left-[53%] dark:opacity-10 z-10'>
            <Image
              src={'/images/banner/pattern2.svg'}
              alt='ptrn1'
              width={141}
              height={141}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
