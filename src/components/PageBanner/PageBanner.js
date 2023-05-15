import React from 'react'

function PageBanner(props) {
  const { title } = props;

  return (
    <div className='product-banner'>
      <div className='overlay'></div>
      <div className="container">
        <div className='content'>
          <h1 className='wow fadeInUp'>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageBanner