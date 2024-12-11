import { ServiceItem, ServiceOrder } from "../types"

type ComprobanteServiceProps = {
    service: ServiceOrder[]
    removeItem: (id: ServiceItem['id']) => void
}


export default function ComprobanteService({ service, removeItem }: ComprobanteServiceProps) {
    return (
        <>
            <h2 className="text-4xl font-black mb-10 uppercase">
                payment voucher
            </h2>
            {service.map(item => (
                <div className="flex border border-b-red-950 p-2 rounded justify-between items-center ">
                    <div>
                        <p>{item.name} - <span className="font-bold text-red-600">${item.cost}</span></p>
                        <p>number of services: <span className="font-bold">{item.quantity}</span></p>
                    </div>
                    <button
                        className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold hover:bg-red-800"
                        onClick={() => removeItem(item.id)}
                    >
                        X
                    </button>
                </div>
            ))}
        </>
    )
}
