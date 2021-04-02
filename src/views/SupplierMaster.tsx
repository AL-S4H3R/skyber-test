import React from 'react'
import Sidenav from '../components/Sidenav'

const SupplierMaster: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-gray-100">
            <div className="flex">
                <div className="w-1/4">
                    <Sidenav />
                </div>
                <div className="px-8 py-4" style={{fontFamily:"'Poppins', serif"}}>
                    <h1 className="font-bold text-2xl">Supplier Master Maintenance</h1>
                </div>
            </div>
        </div>
    )
}

export default SupplierMaster
