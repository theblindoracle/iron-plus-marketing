import IronPlusLogo from "../public/IronPlusLogo.png"
import googlePlayStore from '../public/googlestore.png'
import appleAppStore from '../public/applestore.png'
import Link from "next/link"
import Image from "next/image";


export default function Hero() {
    return (<div className="hero h-full bg-primary">
        <div className="hero-content flex-col lg:flex-row">
            <Image src={IronPlusLogo} height={300} width={300} className='rounded-3xl' alt="Iron Plus Logo" />
            <div className='max-w-lg'>
                <h1 className="text-5xl font-bold">Iron Plus</h1>
                <h2 className="py-3 text-3xl">
                    Tools for Powerlifters
                </h2>
                <div className='flex flex-col items-center md:flex-row gap-4'>
                    <Link href='https://play.google.com/store/apps/details?id=com.napesdev.ironplus'>
                        <Image src={googlePlayStore} alt='Download from Apple App Store' width={200} height={59} />
                    </Link>
                    <Link href='https://apps.apple.com/app/id1545857824'>
                        <Image src={appleAppStore} alt='Download from Google Play Store' width={200} height={59} />
                    </Link>
                </div>
            </div>
        </div>
    </div>)
}
