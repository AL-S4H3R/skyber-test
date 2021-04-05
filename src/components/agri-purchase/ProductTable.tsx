import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Table from 'react-tailwind-table'
import 'react-tailwind-table/dist/index.css'
import Modal from './Modal'

interface Props {
    isOpen: boolean;
}

const orderList = [
    {
        category: 'Seeds',
        image: 'Product Image',
        description: 'Chin Sakata 651(1500 seeds)',
        qty: '26'
    },
    {
        category: 'Seeds',
        image: 'Product Image',
        description: 'Chin Sakata 651(1500 seeds)',
        qty: '26'
    },
    {
        category: 'Seeds',
        image: 'Product Image',
        description: 'Chin Sakata 651(1500 seeds)',
        qty: '26'
    },
]
const ProductTable: React.FC<Props> = ({isOpen}) => {

    const [showModal, setShowModal] = React.useState(false)

    if(isOpen === true){
        return(
            <table className="min-w-max w-full table-auto">
                <thead className="bg-gray-800 text-gray-100">
                    <th className="py-2">Sr No.</th>
                    <th>Agri-Input Category</th>
                    <th>Product Image</th>
                    <th>Description</th>
                    <th>Product Qty</th>
                </thead>
                <tbody>
                    {
                        orderList.map((order, index) => {
                            return(
                                <tr className="border-b-2">
                                    <td className="text-center py-4">{index + 1}.</td>
                                    <td className="text-center">{order.category}</td>
                                    <td className="text-center">{order.image}</td>
                                    <td className="text-center">{order.description}</td>
                                    <td className="text-center">{order.qty}</td>
                                    <td>
                                        <FontAwesomeIcon onClick={() => setShowModal(true)} icon={faExternalLinkAlt}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                {
                    showModal ? (<Modal setShowModal={setShowModal}/>) : (<></>)
                }
            </table>
        )
    }
    else {
        return(<></>)
    }
}

export default ProductTable