import React from 'react'

function Home1() {
  return (
    <>
    <div className='h1' ><img width={'100%'} height={'550px'} style={{position:'absolute'}} src="public\image\742c02a5aaa6c201bd4c16bd8b915bba-removebg-preview.png" alt="" />
    <div className='container' style={{display:'flex',alignItems:'center',justifyContent:'center',height:'500px', position:'relative', margin:'20px'}}>
        <p style={{marginRight:'100px', fontSize:'30px', color:'white', marginTop:'-250px', marginLeft:'600px'}}>Unleash The World Of  <span style={{fontSize:'150px',fontWeight:'bolder', marginLeft:'-250px'}}>Metaverse</span></p><br />
   
    </div>
    </div>
    {/* about us */}
    <div className="aboutUs row" style={{marginLeft:'100px', marginRight:'100px'}} >
        <div className="col-lg-6"><img src="public\image\ba7a8226e99a225b57e2864a459f8aa6-removebg-preview.png" alt="" /></div>
        <div className="col-lg-6" style={{marginTop:'150px'}}>
            <h3>ABOUT US</h3>
            <h2 style={{fontWeight:'bolder', color:'white', fontSize:'40px'}}>Mave Will Be The Best Choice For Your Next Project</h2>
<p style={{marginTop:'50px'}}>
                Mave offers a comprehensive solution for your project management needs. With its intuitive interface and customizable features, Mave simplifies tasks from planning to execution. Stay connected with real-time communication tools and collaborate seamlessly with your team.
                <br />
                <br />
                
                 Rest assured knowing that Mave prioritizes security, ensuring your project data remains protected. Scale effortlessly as your project grows, supported by Mave's flexible infrastructure.
    
</p>        </div>
    </div>

    </>
  )
}

export default Home1