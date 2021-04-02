import React from 'react'

const TopBar: React.FC = () => {
    return(
        <div className="w-full space-y-16">
            <div>
                <h1 className="text-xl font-bold">Agri-Input Purchase Requests</h1>
            </div>
            <div className="flex items-center w-full px-16 space-x-8 border-b-2">
                <div className="bg-gray-700 text-gray-100 p-2">
                    <a href="#">Pending</a>
                </div>
                <div className="bg-gray-700 text-gray-100 p-2">
                    <a href="#">Executing</a>
                </div>
                <div className="bg-gray-700 text-gray-100 p-2">
                    <a href="#">Executed</a>
                </div>
                <div className="bg-gray-700 text-gray-100 p-2">
                    <a href="#">Completed</a>
                </div>
            </div>
        </div>
    )
}

export default TopBar