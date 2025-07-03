'use client'
import axios from 'axios'
import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import Header from './Header'
import Classification from '../Classification'

export default function Hero() {
  const [predict, setPredict] = useState(null)
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('image', file)
      axios
        .post(`${import.meta.env.VITE_APIURL}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res)
          setPredict({
            image: res.data?.image_url,
            result: res.data?.classification_result,
          })
        })
        .catch((error) => {
          console.log(error)
          setPredict(null)
        })
    }
  }
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 pb-20 mt-10 lg:px-20">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8480ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:mt-10">
          <div className="col-span-1 lg:col-span-3 text-center lg:text-left">
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-gray-900 lg:text-6xl">
              Early Detection of Skin Problems with{' '}
              <span className="text-blue-600">AI DERM</span>
            </h1>
            <p className="mt-2 text-pretty text-lg font-medium text-gray-500 lg:text-xl">
              Virtual dermatology consultations are now easier and more
              affordable. <br />
              Upload a photo of your skin and get analyzed quickly.
            </p>
            <div className="w-full lg:w-[80%] mt-16">
              <div className="">
                <label
                  htmlFor="uploadedFile"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Upload file here:
                </label>
                <label
                  htmlFor="uploadedFile"
                  className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-blue-300"
                >
                  <div className="space-y-1 text-center">
                    <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <FaUpload />
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium text-blue-500 hover:text-blue-700">
                        Click to upload
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">PNG, JPG or JPEG</p>
                  </div>
                  <input
                    id="uploadedFile"
                    type="file"
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-2 ">
            <img
              alt="Hero Image"
              src="/hero_image.png"
              className="aspect-auto"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8480ff] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      {predict && <Classification prediction={predict} />}
    </div>
  )
}
