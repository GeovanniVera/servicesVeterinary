import { useState } from "react"
import { ServiceItem, ServiceOrder } from "../types"

export default function useService() {

    const [service,setService] = useState<ServiceOrder[]>([])

    const addItem = (item : ServiceItem)=>{
        const itemExist = service.find(service => service.id === item.id);
        if(itemExist){
            const updateService = service.map(service=> service.id === item.id ? {...service, quantity: service.quantity + 1} : service)
            setService(updateService)
            
        }else{
            const newService : ServiceOrder = {...item, quantity : 1}
            setService([...service, newService])
        }
    }

    const removeItem = (id : ServiceItem['id'])=>{
        const itemExist = service.find(service => service.id === id);
        if(itemExist){
            const updateService = service.filter(item => item.id !== id)
            setService(updateService)
        }
    }

    const cleanVoucher = ()=> {
        setService([])
    }

    return {
        service,
        addItem,
        removeItem,
        cleanVoucher
    }
}
