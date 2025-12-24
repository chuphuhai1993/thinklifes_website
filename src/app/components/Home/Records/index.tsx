'use client'

import { RecordData } from '@/app/data/siteData'
import Image from 'next/image'

const Records = () => {
  return (
    <section>
      <div className='container'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-6'>
          {RecordData.map((item, i) => (
            <div key={i}>
              <div className='border border-darkblue/10 dark:border-white/10 rounded-lg flex flex-col gap-4 items-center justify-center px-4 py-8 shadow dark:shadow-white/10'>
                <div className='p-2 bg-primary rounded-full w-fit'>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className='text-center'>
                  {item.digit}
                </h4>
                <p className='text-center text-base font-normal'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Records
