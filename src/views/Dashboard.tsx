import React from 'react'
import Sidenav from '../components/Sidenav'

const Dashboard: React.FC = () => {
    return(
        <div className="h-screen w-screen bg-gray-100">
            <div className="flex">
                <div className="w-1/4">
                    <Sidenav />
                </div>
            </div>
        </div>
    )
}

export default Dashboard