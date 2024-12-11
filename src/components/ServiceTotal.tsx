import { useMemo } from "react"
import { ServiceOrder } from "../types"

type ServiceTotalProps = {
    service:ServiceOrder[],
    cleanVoucher : ()=>void 
}

export default function ServiceTotal({service, cleanVoucher} : ServiceTotalProps) {
    
    const subtotal = useMemo(()=>service.reduce((total,item)=> total + (item.quantity * item.cost),0),
    [service])
    
    console.log(subtotal);
    return (
        <div className="border border-dashed p-2">
            <div >
                <p className="text-xl font-bold mb-10 uppercase">Total: ${subtotal}</p>
            </div>
            <div>
                <button 
                className="w-full bg-red-800 p-2 text-xl text-white  hover:bg-red-900"
                onClick={cleanVoucher}
                >Generar Comprobante</button>
            </div>
        </div>
    )
}
