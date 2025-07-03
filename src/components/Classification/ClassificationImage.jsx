export default function ClassificationImage(props) {
  const { imageSrc = '/hero_image.jpg', best = '-' } = props
  return (
    <>
      <img src={imageSrc} alt="" className="w-96 rounded-lg" />
      <p className="text-center mt-5 font-semibold text-xl">{best}</p>
    </>
  )
}
