import React, { useState } from 'react'

const NavigationHeadings = ({ title, className, StateHover, dropdown }) => {
    const [hover, setHover] = useState(false)
    return (
        <div className={className} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            <span className="flex items-center gap-1 font-semibold hover:underline">
                {title}
                {dropdown && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px]"><path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </span>
            {hover && StateHover && <StateHover />}
        </div>
    )
}

const OnHoverNavigationHeading = ({ arr }) => {
    return (
        <div className='questHover text-black text-sm'>
            <ul>
                {arr.map((e) => {
                    return <li key={e} className="hover:underline cursor-pointer">{e}</li>
                })}
            </ul>
        </div>
    )
}

const onHoverSafety = () => {
    return (
        <div className='questHover text-black text-sm'>
            <table>
                <thead>
                    <tr className="text-gray-500 uppercase text-xs">
                        <th className="font-bold pb-2">Resources</th>
                        <th className="font-bold pb-2">Hubs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="hover:underline cursor-pointer">Family Center</td>
                        <td className="hover:underline cursor-pointer">Parent Hub</td>
                    </tr>
                    <tr>
                        <td className="hover:underline cursor-pointer">Safety Library</td>
                        <td className="hover:underline cursor-pointer">Policy Hub</td>
                    </tr>
                    <tr>
                        <td className="hover:underline cursor-pointer">Safety News</td>
                        <td className="hover:underline cursor-pointer">Privacy Hub</td>
                    </tr>
                    <tr>
                        <td className="hover:underline cursor-pointer">Teen Charter</td>
                        <td className="hover:underline cursor-pointer">Transparency Hub</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Navigation = ({ toggleAuthMode }) => {
  return ( 
    <nav className='flex items-center justify-between px-10 py-5 text-white max-w-[1200px] mx-auto relative z-50'>
        <div className='flex items-center gap-2 cursor-pointer'>
            <svg width="40" height="40" viewBox="0 0 127.14 96.36" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.59,67.59,0,0,1-10.87,5.19,77.36,77.36,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.1M42.02,65.22c-5.36,0-9.82-4.9-9.82-10.9s4.36-10.9,9.82-10.9,9.9,4.9,9.82,10.9c0,6-4.36,10.9-9.82,10.9m43.13,0c-5.36,0-9.82-4.9-9.82-10.9s4.36-10.9,9.82-10.9,9.9,4.9,9.82,10.9c0,6-4.36,10.9-9.82,10.9"/>
            </svg>
            <span className="font-bold text-xl tracking-tight" style={{fontFamily: "'LogoFont', sans-serif"}}>GRAVITY</span>
        </div>
        
        <div className='hidden lg:flex items-center gap-6'>
            <NavigationHeadings title="Download" className="navigationHeadings" />
            <NavigationHeadings title="Nitro" className="navigationHeadings"/>
            <NavigationHeadings title="Discover" className="navigationHeadings"/>
            <NavigationHeadings title="Safety" className="navigationHeadings" StateHover={onHoverSafety} dropdown={true}/>
            <NavigationHeadings title="Quests" className="navigationHeadings" 
                StateHover={()=>{
                    return(
                        <OnHoverNavigationHeading arr={["Resources","Advertising","Success Stories","Quests FAQ"]}/>
                    )
                }} dropdown={true}/>
            <NavigationHeadings title="Support" className="navigationHeadings"
                StateHover={()=>{
                    return(
                        <OnHoverNavigationHeading arr={["Resources","Help Centre","Feedback","Submit a Request"]}/>
                    )
                }} dropdown={true}
            />
            <NavigationHeadings title="Blog" className="navigationHeadings"
                StateHover={()=>{return(
                    <OnHoverNavigationHeading arr={["Collections","Featured","Community","Discord HQ","Engineering & Developers","How to Discord","Policy & Safety","Product & Features"]}/>
                )
                }} dropdown={true}
            />
            <NavigationHeadings title="Developers" className="navigationHeadings" 
                StateHover={()=>{
                    return(
                        <OnHoverNavigationHeading arr={["Build","Official Game Communities","Developer Portal","Documentation","Developer Help Center"]}/>
                    )
                }}
                dropdown={true}
            />
            <NavigationHeadings title="Careers" className="navigationHeadings"/>
        </div>
        
        <div className='flex items-center'>
            <button 
                onClick={()=>{ toggleAuthMode() }}
                className="bg-white text-black hover:text-[#5865F2] hover:shadow-lg transition-all duration-200 px-4 py-2 rounded-full font-medium text-sm"
            >
                Log In
            </button>
        </div>
    </nav>
  )
}

export default Navigation
