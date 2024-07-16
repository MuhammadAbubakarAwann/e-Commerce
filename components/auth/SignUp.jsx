import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SignUp = () => {
  return (
    <div className='flex h-screen justify-center items-center bg-[#00abc27c]'>
      <div className="flex h-[80%] w-[80%] bg-white overflow-hidden rounded-2xl shadow-2xl">
        <div className='absolute flex w-[49%] h-20 bg-[#00515C] rounded-l-2xl top-[15%] right-[10%]'>
          <div className="pl-4 text-center flex items-center w-40">
            <Image src="/images/logo.png" alt="Logo" width={200} height={50} />
          </div>
          <div className="flex-grow"></div> 
          <div className="pr-4 text-center flex justify-center items-center w-40">
            <h1 className='text-white font-krona font-bold text-2xl'>Sign-up</h1>
          </div>
        </div>

        <div className="flex w-[61%] bg-white">
          <Image src="/images/signin.png" alt="Shopping" width={710} height={800} />

        </div>

        <div className="flex flex-col w-[49%] items-center justify-center bg-white p-12">

          <div className="w-full  mt-28">

            <form>
              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#00515C]">Email</label>
                <input type="email" id="email" className="w-full p-1 border border-[#00AAC2] rounded-lg" required />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#00515C]">Mobile phone number</label>
                <input type="number" id="email" className="w-full p-1 border border-[#00AAC2] rounded-lg" required />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#00515C]">Password</label>
                <input type="password" id="password" className="w-full p-1 border border-[#00AAC2] rounded-lg" required />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#00515C]">Confirm Password</label>
                <input type="password" id="password" className="w-full p-1 border border-[#00AAC2] rounded-lg" required />
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="terms" className="h-4 w-4 text-teal-600 border-gray-300 rounded" required />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  By continuing, you agree to SmileShop's
                  <Link href="#" legacyBehavior><a className="text-teal-600"> Conditions of Use</a></Link> and
                  <Link href="#" legacyBehavior><a className="text-teal-600"> Privacy Notice</a></Link>.
                </label>
              </div>
              <button type="submit" className="w-full py-3 bg-[#00AAC2] text-white font-bold rounded-lg hover:bg-[#00515C]">Sign up</button>
            </form>
            <div className="mt-3 flex items-center">
              <hr className="flex-1 border-gray-300" />
              <span className="px-3 text-sm text-gray-500">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>
            <div className="mt-2 flex flex-row space-x-3">
              <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg hover:bg-gray-100">
                <Image src="/images/google-logo.png" alt="Google" width={22} height={22} />
                <span className="ml-1 text-sm font-medium text-gray-600">sign-up with Google</span>
              </button>
              <button className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                <Image src="/images/fb-logo.png" alt="Facebook" width={22} height={22} />
                <span className="ml-1 text-sm font-medium text-gray-600">sign-up with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignUp