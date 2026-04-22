import React, { useState } from 'react'


const NavigationHeadings=({title,className,StateHover,dropdown})=>{
    const [hover,setHover]=useState(false)
    return (
        <div className={className} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            
            {title}{dropdown&&"⌄"}
            {hover&&StateHover&&<StateHover/>}
       
        </div>
    )
}




const OnHoverNavigationHeading=({arr})=>{

    return(
        <div className='questHover'>
            <ul>
                {arr.map((e)=>{
                    return <li key={e}>{e}</li>
                })}
            </ul>
        </div>
    )
}

const onHoverSafety=()=>{
    return(
        <div  className='questHover'>
            <table>
                <thead>
                <tr>
                    <th>Resources</th>
                    <th>Hubs</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Family Center</td>
                        <td>Parent Hub</td>
                    </tr>
                    <tr>
                        <td>Safety Library</td>
                        <td>Policy Hub</td>
                    </tr>
                    <tr>
                        <td>Safety News</td>
                        <td>Privacy Hub</td>
                    </tr>
                    <tr>
                        <td>Teen Charter</td>
                        <td>Transparency Hub</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



const Navigation = ({toggleAuthMode}) => {
  return ( 
    <div className='navigationBar'>
        <div className='navigationBarLogo'>
            
        </div>
        <div className='navItem'>

            <NavigationHeadings title="Downloads" className="navigationHeadings" />




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
                        <OnHoverNavigationHeading arr={["Resources","Help Centre","Feedback","Submit a Response"]}/>
                    )
                }} dropdown={true}
            />



            <NavigationHeadings title="Blog" className="navigationHeadings"
                StateHover={()=>{return(
                    <OnHoverNavigationHeading arr={["Collections","Featured","Community","Discord HQ","Engineering & Developers","How to Discord","Policy & Safety","Product & Features"]}/>
                )
                }} dropdown={true}
            />



            <NavigationHeadings title="Developer" className="navigationHeadings" 
                StateHover={()=>{
                    return(
                        <OnHoverNavigationHeading arr={["Build","Official Game Communites","Developer Portal","Documentation","Developer Help Center"]}/>
                    )
                }}
                dropdown={true}
            />




            <NavigationHeadings title="Careers" className="navigationHeadings"/>

        </div>


        
        <div className='btnOpenDiscord'>
            <button onClick={()=>{
                toggleAuthMode()
            }}>OpenDiscord</button>
        </div>
        
    </div>
  )
}

export default Navigation
