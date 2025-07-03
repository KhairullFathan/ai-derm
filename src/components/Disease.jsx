export default function Disease() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 pb-20">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Able to Recognize Up to Five Types of Skin Diseases
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h5 className="text-lg lg:text-2xl text-center">Acne & Rosacae</h5>
          <h5 className="text-lg lg:text-2xl text-center">Chickenpox</h5>
          <h5 className="text-lg lg:text-2xl text-center">Eczema</h5>
          <h5 className="text-lg lg:text-2xl text-center">Ringworm</h5>
          <h5 className="text-lg lg:text-2xl text-center">
            Seborrheic Keratoses
          </h5>
        </div>
      </div>
    </div>
  )
}
