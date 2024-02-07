import React from 'react'
import { useDispatch } from 'react-redux'
import { setRegisterForm, setRegisterUser, setUser } from '../redux/slice'
import { RootState } from '../../../../rootReducer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const registerform = useSelector((state: RootState) => state.authState.register)
  const isLoading = useSelector((state: RootState) => state.authState.isLoading) //can use to handle spinner
  const isRegeistered=useSelector((state:RootState)=>state.authState.register.isRegistered)
  const navigate=useNavigate()
  const username=registerform.username
  const email=registerform.email
  const password=registerform.password
  const confirmPassword=registerform.confirmPassword



console.log(username,email,password,confirmPassword)
  const dispatch=useDispatch()
  const handleChange = (e: any) => {
    const { name, value } = e.target

    dispatch(
      setRegisterForm({
        email: name === 'email' ? value :email,
        password: name === 'password' ? value : password,
        username: name === 'username' ? value : username,
        confirmPassword:name==="confirmpassword" ? value : confirmPassword
      })
    );
  }
  const handleSubmit = (e:any) => {
    e.preventDefault()
    dispatch(setRegisterUser({ email, password,username,confirmPassword}))
   
  }
  if (isRegeistered) {
    navigate('/auth/login');
  }
  return (
    <div className="bg-brand ml-auto mr-auto md:pr-[40px] px-4 bg-blend-multiply" style={{ backgroundImage: 'url(/explore_images/explore-bg.webp)' }}>
  <div className="h-[100vh] w-full bg-blend-multiply bg-no-repeat flex items-center justify-center">
    <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
      <h1 className="text-3xl font-bold text-center text-gray-700">REGISTER</h1>
      <form className="mt-6" onSubmit={handleSubmit} >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-800"
          >
            Username
          </label>
          <input
            type="text"
            name='username'
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
         onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            name='email'
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
         onChange={handleChange}
            
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name='password'
         onChange={handleChange}
          
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="confirmpassword"
            className="block text-sm font-semibold text-gray-800"
          >
           Confirm Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name='confirmpassword'
         onChange={handleChange}
          
          />
        </div>
        <div className="mt-2">
          <span className='text-center'>Already have an account?</span>
          <a href='/auth/login' className="ml-1 text-blue-500 hover:text-blue-700 self-center">Login</a>
          <button type='submit' className="mt-[10px] w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default RegisterForm