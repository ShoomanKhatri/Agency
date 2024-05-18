import React from 'react';

const Services = () => {

    const services = [{ id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments.", image: "src/assets/icons/membership.png" },
    { id: 2, title: "Associations", description: "Our membership management software provides full automation of membership renewals and payments.", image: "src/assets/icons/association.png" },
    { id: 3, title: "Clubs and Groups", description: "Our membership management software provides full automation of membership renewals and payments.", image: "src/assets/icons/club-group.png" }
    ]

    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <h2 className='text-neturalDGrey'>We have been worked with 500 + clients</h2>

                {/* company logo */}
                <div className=' my-12 flex flex-wrap justify-between items-center'>
                    <img src="src/assets/icons/company1.png" alt="company1" />
                    <img src="src/assets/icons/company2.png" alt="company2" />
                    <img src="src/assets/icons/company3.png" alt="company3" />
                    <img src="src/assets/icons/company4.png" alt="company4" />
                    <img src="src/assets/icons/company5.png" alt="company5" />
                    <img src="src/assets/icons/company6.png" alt="company6" />
                    {/* <img src="src/assets/icons/company7.png" alt="company7" /> */}
                </div>

            </div>

            {/* services card  */}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your multiple work from single system.</h2>
                <p className='text-neturalDGrey'>Who is  Nextoptimize suitable for?</p>
            </div>

            {/* cards */}
            <div classname="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto ">
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-4 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex  items-center justify-center h-full'>
                        <div>
                            <div className='bg-[#e8f5e9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='-ml-5' /></div>
                            <h4 className='text-2xl  font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Services;