import tropico from '../assets/images/EGS_Tropico6_LimbicEntertainment_S3-2560x1440-82bcd83b988a5c3230ff8f191113d9b2.jpg'

function CartGameCard({ title, price }) {
  return (
    <>
      <div className="flex justify-between bg-white rounded-lg border shadow-md">
        <div className="flex items-center m-1">
          <img
            src={tropico}
            className="h-12 w-12 object-center object-cover n m-1"
            alt="Couverture jeu video"
          ></img>
          <h1 className="ml-2 w-30 truncate font-semibold">{title}</h1>
        </div>
        <div className="flex flex-col justify-evenly items-end mr-2">
          <p className="font-bold">29,99€</p>
          <button className="bg-white border border-gray-400 rounded-md flex justify-center items-center h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default CartGameCard
