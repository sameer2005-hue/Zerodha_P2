import React from 'react'

function RightSection({ imgUrl, name, description, tryUrl,linkName, learnUrl, img1Url, img2Url }) {
  return (
    <div className="container">
      <div className="row d-flex flex-nowrap ms-5 mt-5">
        <div className="col-6 mt-5 ms-5">
          <h2>{name}</h2>
          <p className='mt-3 fs-5'>{description}</p>
          <div className='mt-4'>
          <a className='me-3' href={tryUrl}>{linkName}<i class="ri-arrow-right-line"></i></a>
          </div>
        </div>
        <div className="col-6"> 
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RightSection