import Skeleton from '@mui/material/Skeleton'

function SkeletonCard() {
  return (
    <div className=" bg-white rounded-lg shadow-md flex flex-col">
      <div className="rounded-lg w-full">
        <Skeleton variant="rounded" height={150} />
      </div>
      <div className="p-3 flex-grow">
        <h2 className=" text-center font-semibold text-lg h-fit mb-3">
          <Skeleton variant="text" />
        </h2>
        <p className="text-center mb-5  max-xl:text-sm max-lg:text-base max-md:text-sm">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </p>
        <div>
          <Skeleton variant="rectangular" height={50} />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
