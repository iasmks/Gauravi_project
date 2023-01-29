import React from 'react'
import "./styles.css";

const Cards = () => {
  return (
   <>
   <center>
<div className='main_div_cards'>
  <h2 style={{color:"#252525"}}>Experience the full power of QuillBot</h2>
  <div className="columns">
    <ul className="price">
      <li className="header" style={{backgroundColor:"#499557"}}>FREE</li>
      <li className="button_card" style={{textAlign:"center", backgroundColor:"#499557"}}>Sign Up - It's Free</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>125 words in the Paraphraser</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Standard and Fluency modes</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>3 synonym options</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>1 Freeze word or phrase</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>1200 words in the Summarizer</li>
      <li><i class="fa-sharp fa-solid fa-xmark"></i>Faster processing speed</li>
      <li><i class="fa-sharp fa-solid fa-xmark"></i>Advanced grammar rewrites</li>
      <li><i class="fa-sharp fa-solid fa-xmark"></i>Compare Modes (Desktop only)</li>
      <li><i class="fa-sharp fa-solid fa-xmark"></i>Plagiarism Checker*</li>
      <li><i class="fa-sharp fa-solid fa-xmark"></i>Tone detection</li>
      <li className="grey" style={{textAlign:"center"}}><a href="#" className="buttoncard">No Credit Card Required</a></li>
    </ul>
  </div>
  <div className="columns">
    <ul className="price">
      <li className="header" style={{backgroundColor: '#DC9E00'}}><i class="fa-sharp fa-solid fa-gem" style={{color:"white"}}></i>PREMIUM</li>
      <li className="button_card" style={{textAlign:"center", backgroundColor:"#DC9E00"}}>Upgrade to Premium</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Unlimited words in the Paraphraser</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Standard, Fluency, Expand, Shorten</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>4 synonym options</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Unlimited Freeze words and phrases</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>6000 words in the Summarizer</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Faster processing speed</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Advanced grammar rewrites</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Compare Modes (Desktop only)</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Plagiarism Checker*</li>
      <li><i class="fa-sharp fa-solid fa-check"></i>Tone detection</li>
      <li className="grey" style={{textAlign:"center"}}><a href="#" className="buttoncard" >3-Day Money-Back Guarantee</a></li>
    </ul>
  </div>
</div>
</center>
   </>
  )
}

export default Cards
