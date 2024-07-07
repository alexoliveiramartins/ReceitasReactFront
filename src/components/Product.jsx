import { useContext } from "react"

export function Product({image, title, description, type, product}){

    return (
        <div className="w-80 h-full flex flex-col items-center p-2.5 gap-2.5 ring-1 ring-black/30 rounded overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-white">
            <figure className="rounded-lg overflow-hidden">
                <img src={image} alt={description} className="h-44" />
            </figure>
            <h2 className="text-xl font-bold text-center">
                {title.length > 20 ? title.slice(0, 20) + '...' : title}
            </h2>
            <p className="text-center">
                {description.length > 100 ? description.slice(0, 100) + '...' : description}
            </p>
            <p className="text-center font-thin text-2xl border-y-[1px] border-y-black/30 w-full p-2">
                {type}
            </p>
        </div>
    )
}