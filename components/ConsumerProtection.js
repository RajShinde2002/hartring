import Cpcard from "./CPcard"

const ConsumerProtection = () => {

    const data = [
        {role: 'Nodal Person',
        name: 'Nisha',
        designation: 'Corporate Lawyer',
        phone: '080-68060300',
        mail: 'support@fittr.care',
        address: '411, Platinum Square, Viman Nagar, Pune, Maharashtra - 411014'
        },
        {role: 'Grievance Officer',
            name: 'Kamal Rao',
            designation: 'Product Manager',
            phone: '080-68060300',
            mail: 'support@fittr.care',
            address: '411, Platinum Square, Viman Nagar, Pune, Maharashtra - 411014'
        }
    ]

  return (
    <div className="mb-20">
        <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl sm:text-6xl flex justify-center text-white font-semibold">Consumer Protection</h3>
            <p className="text-[#9da6b2] text-xl max-w-4xl text-center my-4 px-5">In compliance with Consumer Protection (E- Commerce) Rules, 2020 and the Information Technology Act, 2000 and rules made thereunder, the details of the Grievance Officer and the Nodal Person are mentioned below:</p>
        </div>
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-12 justify-center mt-16">
        <Cpcard role={data[0].role} name={data[0].name} designation={data[0].designation} phone={data[0].phone} mail={data[0].mail} address={data[0].address}/>
        <Cpcard role={data[1].role} name={data[1].name} designation={data[1].designation} phone={data[1].phone} mail={data[1].mail} address={data[1].address}/>
    </div>
    </div>
  )
}

export default ConsumerProtection;