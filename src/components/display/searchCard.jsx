import BtnAddGame from '../core/BtnAddGame'
import addfile from '../../assets/images/addfile.png'

function SearchCard({ setIsHidden }) {
  return (
    <>
      <div className="bg-white flex flex-col space-y-4 rounded-lg shadow-md max-xl:space-y-2 max-h-[580px]">
        <div className="flex items-center justify-center max-xl:mt-3 max-lg:mt-2 overflow-hidden">
          <img
            className="rounded-lg w-full "
            src={addfile}
            alt="Ajouter un jeu"
          ></img>
        </div>
        <div>
          <h2 className="text-center font-semibold text-lg h-fit mb-3">
            Vous ne trouvez pas ?
          </h2>
          <BtnAddGame setIsHidden={setIsHidden} />
        </div>
      </div>
    </>
  )
}

export default SearchCard
