
export type ServiceItem = {
    id:number
    name:string
    description:string
    image:string
    cost:number
}

export type ServiceOrder = ServiceItem & {
    quantity:number
}