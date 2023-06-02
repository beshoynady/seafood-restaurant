import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <main>
      <div className="content">
        <div className='title'>
          <p>مرحبا بكم في</p>
          <h1>كافيار للمأكولات البحرية Caviar Seafood</h1>
        </div>
        <div className="btn">
          <ul>
            <li><a href=''>طلب الويتر</a></li>
            <li><a href=''>المنيو</a></li>
          </ul>
        </div>
      </div>
      
    </main>
  )
}

export default Home