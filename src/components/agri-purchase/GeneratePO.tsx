import React from 'react'

const orderList = [
    {
        name: 'ASJKIWBW8935',
        by: 'Alex Lee',
        time: 'Mon, 13 Apr, 10:42 AM',
        file: 'ASJKIWBW8935.csv'
    },
    {
        name: 'IADSAHSB7863',
        by: 'Alex Lee',
        time: 'Mon, 13 Apr, 10:42 AM',
        file: 'IADSAHSB7863.csv'
    },
]

const GeneratePO: React.FC = () => {
    return(
        <section className="py-4">
            <div className="flex items-center space-x-16 border-b-2 ">
                <p>Executing Agri-Input Orders</p>
                <p>Batched By</p>
            </div>
            <div className="space-y-2">
                {
                    orderList.map((order, index) => {
                        return(
                            <div 
                                key={index} 
                                className="flex w-full space-x-12 bg-gray-600 text-gray-200 px-4 py-3"
                            >
                                <div className="w-1/4">
                                    <p>{order.name}</p>
                                </div>
                                <div>
                                    <p>{order.by}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default GeneratePO