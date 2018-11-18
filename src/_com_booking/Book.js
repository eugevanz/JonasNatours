import React from 'react'

export default () => {
    return(<div className='book'>
        <div className='book__form'>
            <form className='form'>
                <div className='u-margin-bottom-medium'>
                    <h2 className='hdng-sec'>Start booking now</h2>
                </div>
                <div className='form__group'>
                    <input className='form__input' id='fullname' type='text' placeholder='Full Name' required/>
                    <label className='form__label' htmlFor='fullname'>Full name</label>
                </div>
                <div className='form__group'>
                    <input className='form__input' id='emailadd' type='email' placeholder='Email address' required/>
                    <label className='form__label' htmlFor='emailadd'>Email address</label>
                </div>
                <div className='form__group'>
                    <div className='form__radio-group'>
                        <input className='form__radio-input' id='small' type='radio' name='size'/>
                        <label className='form__radio-label' htmlFor='small'>
                            <span className='form__radio-button'/>
                            Small tour group
                        </label>
                    </div>
                    <div className='form__radio-group'>
                        <input className='form__radio-input' id='large' type='radio' name='size'/>
                        <label className='form__radio-label' htmlFor='large'>
                            <span className='form__radio-button'/>
                            Large tour group
                        </label>
                    </div>
                </div>
                <div className='form__group u-margin-top-medium'>
                    <button className='btn btn--green' type='submit'>Next step &rarr;</button>
                </div>
            </form>
        </div>
    </div>)
}