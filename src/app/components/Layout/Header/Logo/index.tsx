import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/logo/logo.svg'
        alt='logo'
        width={150}
        height={50}
        className='h-12 block dark:hidden'
      />
      <Image
        src='/images/logo/white-logo.svg'
        alt='logo'
        width={150}
        height={50}
        className='h-12 hidden dark:block'
      />
    </Link>
  )
}

export default Logo
