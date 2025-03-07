import React from 'react'
import Image from 'next/image'

const Navigation = () => {
	return (
		<nav className=''>
			<div className='flex justify-between items-center'>
				<div className='flex items-center justify-between w-full py-4 px-10 bg-blur-md'>
					<nav className='flex items-center gap-10 text-sm'>
						<ul>ABOUT</ul>
						<ul>PROJECTS</ul>
						<ul>CERTIFICATIONS</ul>
						<ul>CONTACT</ul>
					</nav>
					<Image
						src="/images/tres.png"
						alt="Tres Logo"
						width={80}
						height={80}
						className="object-contain"
					/>
				</div>
			</div>
		</nav>
	)
}

export default Navigation