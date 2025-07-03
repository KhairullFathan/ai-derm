import ClassificationImage from './ClassificationImage'
import ClassificationChart from './ClassificationChart'

export default function Classification(props) {
  const { prediction } = props
  console.log(prediction)
  return (
    <div className="px-6 lg:px-20 pb-20">
      <h2 className="text-center text-4xl font-semibold text-gray-900">
        Classification Result
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col justify-center items-center">
          <ClassificationImage
            imageSrc={prediction.image}
            best={prediction.result[0]?.class}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <ClassificationChart prediction={prediction} />
        </div>
      </div>
    </div>
  )
}
