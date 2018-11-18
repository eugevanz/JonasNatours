import React from 'react'

export default (props) => {
    return(<div className='story'>
        <figure className='story__shape'>
            <img className='story__img' src={props.pic} alt='Person on a tour'></img>
            <figcaption className='story__caption'>{props.name}</figcaption>
        </figure>
        <div className='story__text'>
            <p className='hdng-ter u-margin-bottom-small'>{props.heading}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat feugiat quam, sit amet vulputate turpis sagittis vel. Ut sed semper leo. Fusce id ultricies erat, a faucibus lectus. Vivamus feugiat nisl vel velit cursus, eu auctor ipsum ornare. Curabitur vel vestibulum sem, eget interdum turpis.</p>
        </div>
    </div>)
}