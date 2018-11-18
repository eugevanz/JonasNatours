import React from 'react'
import nat1large from '../img/nat-1-large.jpg'
import nat2large from '../img/nat-2-large.jpg'
import nat3large from '../img/nat-3-large.jpg'
import nat1 from '../img/nat-1.jpg'
import nat2 from '../img/nat-2.jpg'
import nat3 from '../img/nat-3.jpg'

export default () => {
    return(<div className='composition'>
        <img className='composition__photo composition__photo--p1' srcSet={`${nat1} 300w, ${nat1large} 1000w`} sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px' alt='photo1' src={nat1large}/>
        <img className='composition__photo composition__photo--p2' srcSet={`${nat2} 300w, ${nat2large} 1000w`} sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px' alt='photo2' src={nat2large}/>
        <img className='composition__photo composition__photo--p3' srcSet={`${nat3} 300w, ${nat3large} 1000w`} sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px' alt='photo3' src={nat3large}/>
    </div>)
}