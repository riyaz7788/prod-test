import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import '../App.css'
function Explore() {
    const [display, setDisplay] = useState(true);
    const [beginGame, setBeginGame] = useState(true);
    const [showText, setTextHide] = useState(false);
    const [exploreButton, setExploreButton] = useState(false);
    // const arscene = document.getElementById('arscene')

    // arscene.style.display="block"  
    const Arscene = () => {
        // window.location.reload();
        setDisplay(false)
        const arscene = document.getElementById('arscene')
        arscene.style.display = "block"

    }

    const startToExplore = () => {
        setBeginGame(false);
        const exploring = document.getElementById('screen-2')
        exploring.style.display = "block"
    }
    useEffect(() => {
        setTimeout(() => {
            setTextHide(true)
        }, 2000);
        setTimeout(() => {
            setExploreButton(true)
        }, 2500)
        return () => clearTimeout();
    }, [])

    return (
        
        <div>
            {display && <div  id='screen-2' className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 hideForDesktop">
                    <div className="card  text-white">
                        <div className="card-body milkybar-bg  p-3 text-center">
                            <div className="mb-md-5 mt-md-4 pb-4">
                                <div className='d-flex justify-content-space-between infoLogo
                        image' ><img className='explore-logo ' src="/images/milkybarLogo.png" height="100px" width="90px" alt='logo' />
                                    <img className='i-icon' id='info' src='/images/infoLogo.png' height="40px" width="30px" alt='info' />
                                </div>
                                <div className='land-page'>
                                    <img className="landing-page " src='/images/landing-page-optimized.gif' />
                                  

                                    {showText && <><h2 className='font-face-gm header-text cssanimation sequence fadeInBottom'>Ready to <br /> discover <br /> </h2><h1 className='cssanimation sequence fadeInBottom world font-face-gm'>the world!</h1>
                                        {exploreButton && <button id='enable-btn' className="btn cssanimations sequences fadeInBottoms btn-info md font-face-gm text-white btn-animated" onClick={() => Arscene()} >Start Exploring</button>}
                                    </>}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Explore