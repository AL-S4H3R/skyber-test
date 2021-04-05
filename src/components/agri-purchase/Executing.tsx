import React from 'react'
import { TabGroup } from '@statikly/funk'

const ExecutingTab: React.FC = () => {

    const tabs = ['Undo Batch', 'Assign Suppliers', 'Generate PO']
    return(
        <section>
            <div>
                <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                    <TabGroup.TabList>
                        {
                            tabs.map((tab, index) => {
                                return(
                                    <TabGroup.Tab
                                        index={index}
                                        className="h-12 px-12 duration-150"
                                        activeClassName="bg-gray-900 text-gray-100"
                                        inactiveClassName="bg-gray-600 text-gray-200"
                                    >
                                        {tab}
                                    </TabGroup.Tab>
                                )
                            })
                        }
                    </TabGroup.TabList>
                </TabGroup>
            </div>
        </section>
    )
}

export default ExecutingTab