import React from 'react'

function Foot() {
  return (
    <>
    <hr />
    <div className="foot row" style={{marginTop:'100px', }}>
        <div className="col-lg-5" style={{textAlign:'center'}}>
            <div className="row">
                <div className="col-3"><a style={{textDecoration:'none', fontSize:'20px', color:'white'}} href="">About Us</a></div>
                <div className="col-3"><a style={{textDecoration:'none',fontSize:'20px', color:'white'}} href="">Ecosystem</a></div>
                <div className="col-3"><a style={{textDecoration:'none',fontSize:'20px', color:'white'}} href="">Projects</a></div>
                <div className="col-3"><a style={{textDecoration:'none',fontSize:'20px', color:'white'}} href="">Roadmap</a></div>
            </div>
        </div>
        <div className="col-lg-2">
            <img style={{marginLeft:'40px'}} width={'100px'} src="/public/image/meta (1).png" alt="" />
        </div>
        <div className="col-lg-5">
        <div className="row">
                <div className="col-3"><a href="" ><i style={{textDecoration:'none', fontSize:'20px', color:'white'}} class="fa-brands fa-facebook"></i></a></div>
                <div className="col-3"><a href=""><i style={{textDecoration:'none', fontSize:'20px', color:'white'}} class="fa-brands fa-twitter"></i></a></div>
                <div className="col-3"><a href=""><i style={{textDecoration:'none', fontSize:'20px', color:'white'}} class="fa-brands fa-instagram"></i></a></div>
                <div className="col-3"><a href=""><i style={{textDecoration:'none', fontSize:'20px', color:'white'}} class="fa-brands fa-linkedin-in"></i></a></div>
            </div>
        </div>
    </div>
    <br />
    <br />
   <p style={{textAlign:'center',marginBottom:'20px'}}> Copyright © 2024  by maveo.in 22 pub</p>
    <hr />
    </>
  )
}

export default Foot