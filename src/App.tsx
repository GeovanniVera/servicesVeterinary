import ComprobanteService from './components/ComprobanteService';
import ServicesMenu from './components/ServicesMenu';
import ServiceTotal from './components/ServiceTotal';
import { servicesItems } from './data/db';
import useService from './hooks/useService';

function App() {

  const { addItem, service, removeItem, cleanVoucher } = useService();

  return (
    <>
      <header className="bg-red-800 p-10">
        <h1 className="text-white uppercase text-4xl ">veterinary clinic</h1>
      </header>
      <main className="
      max-w-7xl 
      mx-auto 
      py-20 
      grid 
      md:grid-cols-2">
        <div className="mx-6">
          <div className="space-y-4 p-4 border border-dashed border-gray-400 mb-6 md:mb-0">
            <h2 className="text-4xl font-black mb-10 uppercase ">veterinary services</h2>
            {servicesItems.map(item => (
              <ServicesMenu
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="mx-6">
          {service.length === 0 ? (
            <div className="border border-dashed border-slate-200 p-4">
              <p className='text-lg font-bold'>does not exist elements in the voucher</p>
            </div>
          ) : (
            <div className="space-y-4 p-4 border border-dashed border-gray-400">
              <ComprobanteService
                service={service}
                removeItem={removeItem}
              />

              <ServiceTotal
                service={service}
                cleanVoucher={cleanVoucher}
              />
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App
