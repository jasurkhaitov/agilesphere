import { ChangeEvent, useContext } from 'react'
import { style } from '../../assets/constants/Const'
import LogoICon from '../../assets/img/icon.png'
import { Contexts } from '../../context/Context'

export default function Regnavbar() {

  let form = document.querySelector('#regForm') as HTMLFormElement

  const { className, setClassName } = useContext(Contexts)

  const handleModal = () => {
    let modal = document.getElementById('my_modal_3') as HTMLDialogElement | null
    
    if (modal) {
      modal.showModal()
    }
  }

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.value == '' && event.target.value === undefined && event.target.value === null) {
      setClassName(false)
    } else {
      setClassName(true)
    }
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.value == ' ' && event.target.value === undefined && event.target.value === null) {
      setClassName(false)
    } else {
      setClassName(true)
    }
  }

  const handleSubmit = () : void => {
    let emailInput = document.querySelector('#email') as HTMLInputElement
    let passwordInput = document.querySelector('#password') as HTMLInputElement

    let errorEmail = document.querySelector('#errorEmail') as HTMLElement
    let errorPassword = document.querySelector('#errorPassword') as HTMLElement

    if(emailInput.value === '' || emailInput.value === null || emailInput.value === undefined ) {
      errorEmail.style.color = '#DC143C'

      setTimeout(() => {  
        errorEmail.style.color = 'transparent'
      }, 3000)
    } else {
      if(passwordInput.value === '' || passwordInput.value === null || passwordInput.value === undefined ) {
        errorPassword.style.color = '#DC143C'
  
        setTimeout(() => {  
          errorPassword.style.color = 'transparent'
        }, 3000)
      }
    }
  }

  const handleCloseModal = () => {
    form.reset()
    setClassName(false)
  }

  return (
    <div className='bg-BboxColor w-full absolute shadow-[#000_0px_104px_2008px,#000_0px_100px_1000px] border-b-2 border-slate-800'>
      <div className='w-[1400px] m-auto py-[17px] flex items-center justify-between'>
        <a href="/" className='flex items-center'>
          <img src={LogoICon} className='w-[50px]' alt="My Logo" />
        </a>

        <div className='flex items-center justify-end gap-[50px]'>
          <a target='_blank' href="https://t.me/jasurkhaitov" className='w-[55px] h-[55px] flex items-center justify-center rounded-[10px] delay-150 hover:bg-[rgba(64,86,139,0.4)]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><path d="M8 2v2m8-2v2"/></g></svg>
          </a>

          <button className={`${style.buttonStyle}`} onClick={():void => handleModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#E0E4E7" d="M16 14a5 5 0 0 1 4.995 4.783L21 19v1a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20v-1a5 5 0 0 1 4.783-4.995L8 14zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10"/></g></svg>

            <span className='text-PrimaryWhite font-poppins text-button'>Log in</span>
          </button>
        </div>
      </div>
        
      <dialog id="my_modal_3" className="modal bg-black bg-opacity-60">
        <div className="modal-box px-[30px] py-10 bg-BboxColor shadow-[#000_0px_14px_20px,#000_0px_10px_10px]">
          <form method="dialog" id='regForm' className='flex flex-col gap-7 mb-2 border-b pb-[30px] border-white'>
            <button onClick={ handleCloseModal} className="btn btn-sm btn-circle btn-ghost text-white absolute right-3 text-xl top-3">✕</button>

            <label htmlFor="email" className='flex flex-col gap-1 text-white text-button'>
              <div className='w-full flex items-end justify-between'>
                <span className='ml-2'>Email</span>

                <span id='errorEmail' className='mr-2 text-sm text-transparent'>*Please, enter your email</span>
              </div>

              <input onChange={(event) => handleEmail(event)} className={`${style.input}`} type="email" name="" id="email" placeholder='Enter your email...'/>
            </label>

            <label htmlFor="password" className='flex flex-col gap-1 text-white text-button'>
              <div className='w-full flex items-end justify-between'>
                <span className='ml-2'>Password</span>
                
                <span id='errorPassword' className='mr-2 text-sm text-transparent'>*Please, enter your password</span>
              </div>

              <input className={`${style.input}`} onChange={(event) => handlePassword(event)} type="text" name="" id="password" placeholder='Enter your password...' />

            </label>
          </form>

          <button id='nextBtn' onClick={handleSubmit} className={ !className ? `${style.buttonNoneActive} mb-6` : `${style.buttonActive } mb-6`}>Submit</button>
          
          <button className={`${style.buttonModal}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25.32" height="30" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>

            <span className='text-white text-button font-normal'>Sign in with Google</span>
          </button>
        </div>
      </dialog>
    </div>
  )
}