import React from 'react'
import Navigation from '../components/navigation'
import Image from 'next/image'
import ContactMe from '../components/contact-me'

const Hero = () => {
	return (
		<section className='container bg-amber-50'>
			<div className='h-screen'>
				<Navigation />
				<div className="flex items-center justify-center h-[calc(100vh-120px)] relative">
					<h1 className='text-left mb-4 absolute top-1/5 left-1/4 transform -translate-x-1/2 text-3xl text-slate-500'>Hello! I'm</h1>
					<Image
						src="/images/stacey.png"
						alt="Stacey"
						width={720}
						height={720}
						className="object-contain"
					/>
					<p className='absolute bottom-1/5 right-1/5 text-xl text-slate-500'>(Designer and Developer)</p>
					<div className="absolute bottom-2 left-10">
						<ContactMe />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero