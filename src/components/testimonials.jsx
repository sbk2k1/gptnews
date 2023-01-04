import { useState } from "react"

export const Testimonials = (props) => {

  var [copied, setCopied] = useState("Copy My UPI ID")

  return (
    <header id='header'>
      <div id='features' className='text-center'>
        <div id="yes" className="container">
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2 style={{marginBottom: 45}}>
              Why Donate?
              <span></span>
            </h2>
            <div className="row">

              <p style={{marginBottom: 25}}>Why donate to me? I don't know. Absolutely no reason at all. Better equipments maybe?</p>
              <a
                style={{marginBottom: -45, width: "20%"}}
                className='btn btn-custom btn-lg page-scroll'
                onClick={() => {navigator.clipboard.writeText("7439753613@ybl"); setCopied("Copied!"); setTimeout(() => {setCopied("Copy My UPI ID")}, 600)}}
              >
                {copied}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
