import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Cargando . . </h2>) 
      }
      <div className="card-grid">
        {
          images.map( (img) => (
            <GifItem 
              key={img.id}
              { ...img }  
            />
          ))
        }
      </div>
    </>
  )
}
