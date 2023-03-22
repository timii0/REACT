import React from 'react'
import Header from './Header'
import Profile from './Profile'
import Image from './Image'
import Handles from './Handles'
import img1 from './images/avatar6.png'
import img2 from './images/images (1).jpg'
import img3 from './images/images (2).jpg'
import img4 from './images/images (3).jpg'
import pic from './img_avatar2.png'

export default function Card() {
  return (
    <>
     
    
     <div className='container'>
      <main className='secc'>
      <Image image={pic}/>
      <Profile name='Dom' address= 'UnivelCity' gender= 'Female'/>
      <Handles/>
      <Header/>

      </main>
      <main className='sec1'>
      <Image image={img1}/>
      <Profile name='Harley' address= 'UnivelCity' gender= 'Female'/>
      <Handles/>
      <Header/>

      </main>
      <main className='sec2'>
      <Image image={img2}/>
      <Profile name='Kam' address= 'UnivelCity' gender= 'Male'/>
      <Handles/>
      <Header/>

      </main>
      <main className='sec3'>
      <Image image={img3}/>
      <Profile name='Hiro' address= 'UnivelCity' gender= 'Male'/>
      <Handles/>
      <Header/>

      </main>
      <main className='sec4'>
      <Image image={img4}/>
      <Profile name='Ja' address= 'UnivelCity' gender= 'Male'/>
      <Handles/>
      <Header/>

      </main>
    </div>
    </>
  )
}
