import { faArrowAltCircleDown, faArrowDown, faDownload, faFileExcel, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import '../../random.csv'
import ProductTable from './ProductTable'

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

    const [clicked, setClicked] = React.useState<number | boolean>(false)

    const toggle = (index: number) => {
        if(clicked == index){
            return setClicked(false)
        }
        setClicked(index)
    }

    return(
        <section className="py-4 space-y-2 h-full">
            <div className="flex items-center space-x-16 border-b-2 ">
                <p>Executing Agri-Input Orders</p>
                <p>Batched By</p>
            </div>
            <div className="space-y-2">
                {
                    orderList.map((order, index) => {
                        return(
                        <Fragment>
                            <div 
                                key={index} 
                                className="flex w-full space-x-12 bg-gray-200 text-gray-600 px-4 py-3"
                            >
                                <div className="w-1/4 flex items-center justify-between pr-8">
                                    <p>{order.name}</p>
                                    <FontAwesomeIcon icon={faSortDown} onClick={() => toggle(index)}/>
                                </div>
                                <div className="">
                                    <p className="text-sm">{order.by}</p>
                                    <p className="text-xs">{order.time}</p>
                                </div>
                                <div className="flex items-center space-x-4 w-1/4 justify-between">
                                    <FontAwesomeIcon icon={faFileExcel} className="text-green-700"/>
                                    <p>{order.file}</p>
                                    <a href="../../random.csv" download="../../random.csv">
                                        <FontAwesomeIcon icon={faDownload}/>
                                    </a>
                                </div>
                            </div>
                            {
                                clicked == index ? (
                                    <ProductTable isOpen={true}/>
                                ) : (<></>)
                            }
                        </Fragment>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default GeneratePO