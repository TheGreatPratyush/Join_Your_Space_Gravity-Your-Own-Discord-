import React from 'react'

const FooterLink = ({ text }) => (
    <p className="hover:underline cursor-pointer mb-3 text-white">{text}</p>
)

const Footer = () => {
    return (
        <div className="bg-[#404EED] text-white pt-24 pb-8 px-10 relative overflow-hidden font-sans">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
                    <div className="flex flex-col gap-6 md:w-1/3">
                        <div className="flex items-center gap-2 text-white font-medium cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" fill="currentColor"/></svg>
                            <span>English</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px]"><path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>

                        <div className="flex gap-6 mt-4">
                            <svg className="cursor-pointer hover:opacity-80" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            <svg className="cursor-pointer hover:opacity-80" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-9.658a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                            <svg className="cursor-pointer hover:opacity-80" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V7.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            <svg className="cursor-pointer hover:opacity-80" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap justify-between w-full md:w-2/3 gap-8 md:gap-4">
                        <div className="w-[45%] md:w-1/4">
                            <h4 className="text-[#A2A4E9] font-bold mb-5 tracking-wide">Product</h4>
                            <FooterLink text="Download" />
                            <FooterLink text="Nitro" />
                            <FooterLink text="Status" />
                            <FooterLink text="App Directory" />
                        </div>
                        
                        <div className="w-[45%] md:w-1/4">
                            <h4 className="text-[#A2A4E9] font-bold mb-5 tracking-wide">Company</h4>
                            <FooterLink text="About" />
                            <FooterLink text="Jobs" />
                            <FooterLink text="Brand" />
                            <FooterLink text="Newsroom" />
                        </div>
                        
                        <div className="w-[45%] md:w-1/4">
                            <h4 className="text-[#A2A4E9] font-bold mb-5 tracking-wide">Resources</h4>
                            <FooterLink text="Support" />
                            <FooterLink text="Safety" />
                            <FooterLink text="Blog" />
                            <FooterLink text="Creators" />
                            <FooterLink text="Community" />
                            <FooterLink text="Developers" />
                            <FooterLink text="Quests" />
                            <FooterLink text="Official 3rd Party Merch" />
                            <FooterLink text="Feedback" />
                        </div>
                        
                        <div className="w-[45%] md:w-1/4">
                            <h4 className="text-[#A2A4E9] font-bold mb-5 tracking-wide">Policies</h4>
                            <FooterLink text="Terms" />
                            <FooterLink text="Privacy" />
                            <FooterLink text="Cookie Settings" />
                            <FooterLink text="Guidelines" />
                            <FooterLink text="Acknowledgements" />
                            <FooterLink text="Licenses" />
                            <FooterLink text="Company Information" />
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-[#5865F2] pt-8 flex justify-between items-center relative flex-col">
                    <div className="w-full flex justify-between items-center mb-8">
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <svg width="30" height="30" viewBox="0 0 127.14 96.36" fill="white" xmlns="http://www.w3.org/2000/svg">
                              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.59,67.59,0,0,1-10.87,5.19,77.36,77.36,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.1M42.02,65.22c-5.36,0-9.82-4.9-9.82-10.9s4.36-10.9,9.82-10.9,9.9,4.9,9.82,10.9c0,6-4.36,10.9-9.82,10.9m43.13,0c-5.36,0-9.82-4.9-9.82-10.9s4.36-10.9,9.82-10.9,9.9,4.9,9.82,10.9c0,6-4.36,10.9-9.82,10.9"/>
                            </svg>
                            <span className="font-bold text-lg tracking-tight" style={{fontFamily: "'LogoFont', sans-serif"}}>GRAVITY</span>
                        </div>
                        <button className="bg-white text-black hover:text-[#5865F2] hover:shadow-lg transition-all duration-200 px-4 py-2 rounded-full font-medium text-sm">
                            Log In
                        </button>
                    </div>
                    <div className="font-bold text-[18vw] sm:text-[180px] leading-[0.8] opacity-100 tracking-tighter w-full text-center sm:text-left overflow-hidden mt-6" style={{fontFamily: "'LogoFont', sans-serif"}}>
                        GRAVITY
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer 
