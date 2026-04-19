import React from 'react'

const Footer = () => {
    return(

    <div className = "mainFooter">
        <div className = "topDiv">
            <div className='logoName'>GRAVITY</div>
            <div className='login'>Log In</div>
        </div>


        <div className='leftSide'>
            <div className='logo'>G</div> <br/>
            
            <h1 style={{fontFamily: "DesFont", textAlign: "left", fontSize: "15px", color: "grey", fontWeight: "1"}}>Language</h1> <br />
            
            <select id="Lang" name="Lang">
                <option value="volvo">English</option>
                <option value="saab">Hindi</option>
                <option value="mercedes">Marathi</option>
                <option value="audi">Tamil</option>
            </select> <br/><br/><br/>

            <h1 style={{fontFamily: "DesFont", textAlign: "left", fontSize: "15px", color: "grey", fontWeight: "1"}}>Social</h1> <br/>

            <button className='btn1'></button>
            <button className='btn2'></button>
            <button className='btn3'></button>
            <button className='btn4'></button>
            <button className='btn5'></button>
            <button className='btn6'></button>
        </div>
        <div className='rightSide'>
            <div className='footerProduct'>
                <p style={{color: "grey"}}>Product</p>
                <p>Download</p> 
                <p>Nitro</p>
                <p>status</p>
                <p>App Directory</p>
            </div>

            <div className='footerCompany'>
                <p style={{color: "grey"}}>Company</p>
                <p>About</p> 
                <p>Jobs</p>
                <p>Brand</p>
                <p>Newsroom</p>
            </div>

            <div className='footerResources'>
                <p style={{color: "grey"}}>Resources</p>
                <p>Support</p> 
                <p>Safety</p>
                <p>Blog</p>
                <p>Creators</p>
                <p>Comunity</p> 
                <p>Developers</p>
                <p>Quests</p>
                <p>Newsroom</p>
                <p>Official party Merch</p>
                <p>Feedback</p>
            </div>

            <div className='footerPolicies'>
                <p style={{color: "grey"}}>Policies</p>
                <p>Terms</p> 
                <p>Privacy</p>
                <p>Cookie Settings</p>
                <p>Guidlines</p>
                <p>Acknowledgements</p> 
                <p>Licence</p>
                <p>Company Information</p>
            </div>
        </div>


        <div className='bottomDiv'>GRAVITY</div>
    </div>
    )
}

export default Footer
 
