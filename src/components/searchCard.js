import image404 from '../assets/images/erreur-404-pas-trouve-effet-pepin_8024-4.avif'
import BtnAddGame from './BtnAddGame'

function SearchCard({ setIsHidden, addTitleRef }) {
  return (
    <>
      <div className="bg-white items-center flex flex-col space-y-4 rounded-lg shadow-md h-auto max-xl:space-y-2 max-h-[580px]">
        <div className="flex items-center justify-center max-xl:mt-3 max-lg:mt-2 overflow-hidden">
          <img
            className="rounded-lg h-40 max-xl:h-28 max-xl:w-52 max-lg:w-60"
            src={image404}
            alt="Erreur 404"
          ></img>
        </div>
        <div className="p-3">
          <h2 className="text-center font-semibold text-2xl h-fit mb-3 2xl:text-xl max-xl:text-lg">
            Vous ne trouvez pas ?
          </h2>
          <BtnAddGame setIsHidden={setIsHidden} addTitleRef={addTitleRef} />
        </div>
      </div>
    </>
  )
}

export default SearchCard
