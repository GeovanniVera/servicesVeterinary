import { ServiceItem } from "../types"

type ServicesMenuProps={
    item:ServiceItem
    addItem:(item : ServiceItem)=>void
}
export default function ServicesMenu({item,addItem} : ServicesMenuProps) {

    return (
        <div className="border border-b-red-950  space-y-3 p-3">
            <p className="text-xl font-black">
                {item.name}

            </p>
            <p>
                {item.description}
            </p>
            <p className="font-bold">
                Service Cost - <span className="text-red-600"> ${item.cost} </span>
            </p>
            <button 
            className=" 
            bg-red-700 
            hover:bg-red-800  
            text-white 
            p-2 
            w-full 
            uppercase
            font-bold"
            onClick={()=>addItem(item)}
            >
                add service
            </button>
        </div>
    )
}
