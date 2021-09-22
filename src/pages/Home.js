import React from 'react'

function Home({products}) {

    return (
        <div>
            {products.map(product => {
                return (
                    <h4>{product.name}</h4>
                )
            })}
        </div>
    )
}

export default Home
