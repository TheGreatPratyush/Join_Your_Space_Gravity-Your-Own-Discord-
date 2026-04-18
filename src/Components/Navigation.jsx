import React from 'react'


const NavigationHeadings=({title,className})=>{
    return (
        <div className={className}>{title}</div>
    )
}
const Navigation = () => {
  return ( 
    <div className='navigationBar'>
        <div className='navigationBarLogo'>
            
        </div>
        <div className='navItem'>

            <NavigationHeadings title="Downloads" className="navigationHeadings" />
            <NavigationHeadings title="Nitro" className="navigationHeadings"/>
            <NavigationHeadings title="Discover" className="navigationHeadings"/>
            <NavigationHeadings title="Safety" className="navigationHeadings"/>
            <NavigationHeadings title="Quests" className="navigationHeadings"/>
            <NavigationHeadings title="Support" className="navigationHeadings"/>
            <NavigationHeadings title="Blog" className="navigationHeadings"/>
            <NavigationHeadings title="Developer" className="navigationHeadings" />
            <NavigationHeadings title="Careers" className="navigationHeadings"/>

        </div>


        
        <div className='btnOpenDiscord'>
            <button>OpenDiscord</button>
        </div>
        
    </div>
  )
}

export default Navigation
