import React from 'react'
import TopBar from '../components/agri-purchase/TopBar'
import Sidenav from '../components/Sidenav'

const Dashboard: React.FC = () => {
    return(
        <div className="h-screen w-screen bg-gray-100">
            <div className="flex">
                <div className="w-1/4">
                    <Sidenav />
                </div>
                <div className="px-8 py-4 w-full" style={{fontFamily:"'Poppins', serif"}}>
                    <TopBar />
                </div>
            </div>
        </div>
    )
}

export default Dashboard