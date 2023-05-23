import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css'
import Loader from './Loader'
function Flatsurface() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 20);
  }, [percentage]);
  return (
   <div>
     <div className='container flating d-flex justify-content-center align-items-center'>
     <img className='grp' src='/images/group.png'/>
 
     {/* <div style={{ width: 40, marginLeft: 100 }}>
        <CircularProgressbar value={percentage} />
      </div> */}
      <CircularProgressbar  className='loading ' value={percentage} 
     />
  
    </div>
   </div>
  )
}

export default Flatsurface