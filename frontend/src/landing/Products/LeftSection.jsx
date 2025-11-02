import React from 'react'

function LeftSection({ imgUrl, name, description, tryUrl, link1Name, link2Name, learnUrl, img1Url, img2Url }) {
  return (
    <div className="container">
      <div className="row d-flex flex-nowrap ms-5 mt-5">
        <div className="col-6 mt-5">
          <img src={imgUrl} alt="" />
        </div>
        <div className="col-6  mt-5 ms-5">
          <h2>{name}</h2>
          <p className='mt-3 fs-5'>{description}</p>
          <div className='mt-4'>
          <a className='me-3' href={tryUrl}>{link1Name}<i class="ri-arrow-right-line"></i></a>
          <a className='' href={learnUrl}>{link2Name}<i class="ri-arrow-right-line"></i></a>
          </div>
          <div className='mt-4'>
            <img className='me-3' src={img1Url} alt="" />
            <img src={img2Url} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection