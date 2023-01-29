import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Instantly = () => {
    const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
   <>
   <center>
   <div className="instantly_main">
    <div className='heading_txt_pra'>
        <h4 style={{width:"520px"}}>*Scan up to 20 pages a month</h4>
   <h3 style={{marginTop:"60px"}}>Write better, faster, and clearer instantly</h3>
  <p>QuillBot is trusted by students, professional writers, and business people who want to write more effectively.</p>
  </div>
    <div className="coloumn_head">
    <div>
      <div style={{ width: 150}}>
        <CircularProgressbar value={75} text={`${75}%`} />
      </div>
    </div>
     <p className='protext'>Average time savings per writing project.</p>
    </div>
    <div className="coloumn_head">
    <div>
      <div style={{ width: 150}}>
        <CircularProgressbar value={100} text={`${50}+`} />
      </div>
    </div>
        <p className='protext'>Trusted by millions worldwide.</p>
    </div>
    <div className="coloumn_head">
    <div>
      <div style={{ width: 150}}>
        <CircularProgressbar value={85} text={`${85}%`}/>
      </div>
    </div>
        <p className='protext'>Who reported their grades improved after using QuillBot.</p>
    </div>
   </div>
   </center>
   </>
  )
}
export default Instantly
