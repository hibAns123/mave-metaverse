import React from 'react'

function Create() {
  return (
    <>
    <div style={{marginTop:'60px'}}>
        <p style={{textAlign:'center'}}>What You Will Get</p>
        <h2 style={{textAlign:'center', fontWeight:'bolder', color:'white'}}>Creating The Metaverse</h2>
    </div>
    <div className="pic row container" style={{margin:'10px 100px 10px 200px' }}>
      <div className="col-lg-6 rounded" style={{borderRadius:'5px'}} >
        <img style={{borderRadius:'15px'}}  height={'300px'} width={'450px'} src="https://i.pinimg.com/564x/a2/94/1f/a2941f55f947539c07903d308a1b4fe2.jpg" alt="" />
        <h4 >Embrace The Mave Ecosystem </h4></div>
      <div className="col-lg-6"><img style={{borderRadius:'15px'}} height={'300px'} width={'450px'} src="https://i.pinimg.com/564x/ce/68/78/ce68780185b875e412005e283ea64796.jpg" alt="" />
      <h4 >Empower Digital Ownership</h4></div>
    </div>
    <div className="stake row" style={{margin:'70px 200px 20px 200px',backgroundColor:'#25153e',padding:'50px 200px 50px 100px',borderRadius:'15px'}}>
      <div className="col-lg-8">
        <h5>STAKE MAVE</h5>
        <h2 style={{marginTop:'50px',width:'500px',color:'WHITE', fontWeight:'bolder'}}>Stake Mave To Earn Rewards</h2>
        <p style={{marginTop:'50px',width:'600px'}}>By leveraging the power of Mave tokens, you not only contribute to the platform's growth but also earn enticing rewards in return. Whether it's through staking pools, yield farming, or liquidity provision, Mave offers various avenues for users to maximize their returns. </p>
      </div>
      <div className="col-lg-4">
        <img width={'400px'} height={'300px'} src="public\image\c3fee6a1b4acc64f45b7c1b8cdbee93b-removebg-preview.png" alt="" />
      </div>

    </div>
    </>
  )
}

export default Create