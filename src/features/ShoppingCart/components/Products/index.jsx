import React, { useEffect, useState } from 'react';
import { CartState } from '../../../../components/Context/Context';
import SingleProducts from '../../SingleProducts';
import './Products.scss';
// import { useParams } from 'react-router';
import Filters from '../../Filters';


function Products() {

    // let { myCartId } = useParams()
    const { state: { products },
        productState: { sort, byStock, byFastDelivery, byRating,
            searchQuery,
        },
    } = CartState()

    const transformProduct = () => {
        let sortedProduct = products;

        if (sort) {
            sortedProduct = sortedProduct.sort((a, b) => (
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            ))
        }
        if (byStock) {
            sortedProduct = sortedProduct.filter((prod) => prod.isStock)
        }
        if (byFastDelivery) {
            sortedProduct = sortedProduct.filter((prod) => prod.fastDelivery)
        }
        if (byRating) {
            sortedProduct = sortedProduct.filter((prod) => prod.ratings >= byRating)
        }
        if (searchQuery) {
            sortedProduct = sortedProduct.filter((prod) => prod.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()))
        }
        return sortedProduct
    }


    //loading Screen
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 700);
    }, [])

    return (
        <div className="products__home">
            <Filters />
            <div className="products__container">

                {loading ? (<div className="loading">Loading...</div>) : (
                    <>
                        {
                            transformProduct().length > 0 ? (
                                transformProduct().map((product) => {
                                    return (
                                        <SingleProducts product={product} key={product.id} />
                                    )
                                })
                            ) : (
                                <div className="notbefound">
                                    Product could not be found...
                                </div>
                            )
                        }
                    </>
                )}
            </div>
        </div>
    );
}

export default Products;