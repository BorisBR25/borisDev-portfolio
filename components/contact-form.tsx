import MotionTransition from "./transition-component"
import { useForm } from "react-hook-form";

const ContactForm = () => {

  const inputStyle = `mb-5 w-full rounded-lg bg-darkBg px-5 py-3 placeholder-white text-white cursor-white`

  const {
    register,
    trigger,
    formState: {errors}
  }  = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
      <div className=" flex flex-col justify-center items-center">

       <form
                  target='_blank'
                  onSubmit={onSubmit}
                  action='https://formsubmit.co/2a49fce2922bfb008f8b89c2c4580759'
                  method='POST'
                >
                  {errors.name &&(
                    <p className='mt-1 text-red-800'>
                      {errors.name.type === "required" && "This field is required."}
                      {errors.name.type === "maxLength" && "Max length is 100 characters."}
                      
                    </p>
                  )}
                  <input
                    className={inputStyle}
                    type='text'
                    placeholder='Nombre'
                    {...register('name', {
                      required:true,
                      maxLength: 100,
                    })}
                  />
                  
                  {errors.email &&(
                    <p className='mt-1 text-red-800'>
                      {errors.email.type === "required" && "This field is required."}
                      {errors.email.type === "pattern" && "Invalid email address."}
                      
                    </p>
                  )}
                  <input
                    className={inputStyle}
                    type='text'
                    placeholder='Correo'
                    {...register('email', {
                      required:true,
                      pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  
                  {errors.message &&(
                    <p className='mt-1 text-red-800'>
                      {errors.message.type === "required" && "This field is required."}
                      {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                      
                    </p>
                  )}
                  <textarea
                    className={inputStyle}
                    rows={4}
                    cols={50}
                    placeholder='Mensaje'
                    {...register('message', {
                      required:true,
                      maxLength: 2000,
                    })}
                  />
                  

                  <button type='submit' className='mt-5 text-white font-bold rounded-lg bg-secondary px-10 py-3 transition duration-500 hover:text-secondary hover:bg-darkBg'>
                    ENVIAR
                  </button>
                

                </form>
      </div>

  )
}

export default ContactForm


