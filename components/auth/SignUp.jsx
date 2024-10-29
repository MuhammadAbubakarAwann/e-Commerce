import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SignUp = () => {
  return (
    <div className='flex h-screen justify-center items-center bg-[#00abc27c]'>
      <div className="flex h-[90%] md:h-[80%] w-[80%] bg-white overflow-hidden rounded-2xl shadow-2xl lg:flex-row flex-col">
        <div className='absolute flex p-3 lg:p-0 w-[70%] lg:w-[49%] lg:h-16 xl:h-20 bg-[#00515C] rounded-l-2xl top-[10%] md:top-[12%] lg:top-[13%] xl:top-[15%] right-[10%]'>
          <div className="pl-2 xl:pl-4 text-center flex items-center w-40 lg:w-32 xl:w-40">
            <Image src="/images/logo.png" alt="Logo" width={200} height={50} />
          </div>
          <div className="flex-grow"></div>
          <div className="lg:pr-2 xl:pr-4 text-center flex justify-center items-center w-40">
            <h1 className='text-white font-krona font-bold lg:text-xl xl:text-2xl'>Sign-up</h1>
          </div>
        </div>

        <div className="hidden lg:flex w-[61%] bg-white">
          <Image src="/images/signin.png" alt="Shopping" width={710} height={800} />
        </div>

        <div className="flex flex-col w-full p-3 md:p-6 lg:w-[49%] items-center justify-center bg-white lg:p-6 xl:p-12 overflow-y-auto">
          <div className="w-full mt-28">
            <form>
              <div className="mb-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#00515C]">Email</label>
                <input type="email" id="email" className="w-full h-9 p-3 border border-[#00AAC2] rounded-lg" required />
              </div>
              <div className="mb-4 flex flex-row gap-3">
                <div className='w-[40%]'>
                  <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-[#00515C]">First Name</label>
                  <input type="text" id="first-name" className="w-full h-9 p-3 border border-[#00AAC2] rounded-lg" required />
                </div>
                <div className='w-[60%]'>
                  <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-[#00515C]">Last Name</label>
                  <input type="text" id="last-name" className="w-full h-9 p-3 border border-[#00AAC2] rounded-lg" required />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-[#00515C]">Mobile phone number</label>
                <input type="number" id="mobile" className="w-full h-9 p-3 border border-[#00AAC2] rounded-lg" required />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#00515C]">Password</label>
                <input type="password" id="password" className="w-full h-9 p-3 border border-[#00AAC2] rounded-lg" required />
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="terms" className="h-4 w-4 text-teal-600 border-gray-300 rounded" required />
                <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
                  By continuing, you agree to SmileShop's
                  <Link href="#" legacyBehavior><a className="text-teal-600"> Conditions of Use</a></Link> and
                  <Link href="#" legacyBehavior><a className="text-teal-600"> Privacy Notice</a></Link>.
                </label>
              </div>
              <button type="submit" className="w-full py-3 bg-[#00AAC2] text-white h-9 flex items-center justify-center font-bold rounded-lg hover:bg-[#00515C]">Sign up</button>
            </form>
            <div className="mt-3 flex items-center">
              <hr className="flex-1 border-gray-300" />
              <span className="px-3 text-sm text-gray-500">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>
            <div className="mt-3 flex flex-col md:flex-row md:space-x-6 lg:space-x-1 xl:space-x-3">
              <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                <div className="flex justify-center w-[15%]">
                  <Image src="/images/google-logo.png" alt="Google" width={22} height={22} />
                </div>
                <span className="ml-1 text-[12px] md:text-[11px] xl:text-sm font-medium text-gray-600">sign-up with Google</span>
              </button>
              <button className="flex items-center justify-center mt-2 md:mt-0 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                <div className="flex justify-center w-[15%]">
                  <Image src="/images/fb-logo.png" alt="Facebook" width={22} height={22} />
                </div>
                <span className="ml-1 text-[12px] md:text-[11px] xl:text-sm font-medium text-gray-600">sign-up with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp