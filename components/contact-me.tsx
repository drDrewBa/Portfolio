import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'

const ContactMe = () => {
	return (
		<div className='bg-rose-300 flex items-center gap-2 py-4 px-5 rounded-full cursor-pointer relative group'>
			<div className="absolute -top-12 left-3">
				<Image
					src="/images/stacey-photo.png"
					alt="Stacey"
					width={96}
					height={96}
					className="object-cover"
				/>
			</div>
			<div className="w-20" />
			<span className='font-medium'>Let's talk!</span>
			<ArrowRightIcon className='w-5 h-5 transition-transform group-hover:translate-x-1' />
		</div>
	)
}

export default ContactMe