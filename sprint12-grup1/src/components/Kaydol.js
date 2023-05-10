import React from 'react'

export const Kaydol = () => {
  return (
    <div>
        <div className='signup'>
            <h3>
                Hesabını Oluştur
            </h3>
        </div>
        <div className='name'>
        <label>
              <input
                type="text"
                name="name"
                placeholder="isim"
             
              ></input>
            </label>
            </div>
            <div className='name'>
        <label>
              <input
                type="text"
                name="name"
                placeholder="telefon"
             
              ></input>
            </label>
            </div>
        
    </div>
  )
}
