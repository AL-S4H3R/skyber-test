import React from 'react'

interface Props {
    isOpen: boolean;
}

const ProductTable: React.FC<Props> = ({isOpen}) => {
    if(isOpen === true){
        return(
            <section>
                This is a product table
            </section>
        )
    }
    else {
        return(<></>)
    }
}

export default ProductTable