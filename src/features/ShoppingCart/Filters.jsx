import { Button } from "react-bootstrap";
import { CartState } from "../../components/Context/Context";
import Select from "react-select"
import { GoSearch } from 'react-icons/go';


const Filters = () => {


    const { productState: {
        byStock,
        byFastDelivery,
        // sort,
        // byRating
    }, productDispatch } = CartState()

    const optionsStar = [
        { value: 0, label: '--' },
        { value: 1, label: '1 Star' },
        { value: 2, label: '2 Star' },
        { value: 3, label: '3 Star' },
        { value: 4, label: '4 Star' },
        { value: 5, label: '5 Star' },
    ]
    const optionPrice = [
        { value: 'lowToHigh', label: 'Ascending' },
        { value: 'highToLow', label: 'Descending' },
    ]
    function handleMouseEnterSearch(e) {
        e.currentTarget.children[0].classList.add("search__hover")
    }
    function handleMouseLeaveSearch(e) {
        const countValue = document.querySelector('.search__cart input')
        if (countValue.value.length === 0) {
            e.currentTarget.children[0].classList.remove("search__hover")
        }
    }

    return (
        <div className="filters">
            <fieldset>
                <legend>Filters</legend>
                <div>
                    <span>
                        <Button className={`${byStock ? 'active' : ''}`}
                            onClick={() => {
                                productDispatch({
                                    type: "FILTER_BY_STOCK",
                                })
                            }}
                        >Include Out to Stock</Button>
                    </span>
                    <span>
                        <Button className={`${byFastDelivery ? 'active' : ''}`}
                            onClick={() => {
                                productDispatch({
                                    type: "FILTER_BY_DELIVERY",
                                })
                            }}
                        >Fast Delivery</Button>
                    </span>
                    <span className="price">
                        <Select options={optionPrice} placeholder="Price..." onChange={(val) => {
                            productDispatch({
                                type: "SORT_BY_PRICE",
                                payload: val.value,
                            })
                        }} />
                    </span>
                    <span className="rating">
                        <Select options={optionsStar} placeholder="Star..." onChange={(val) => {
                            productDispatch({
                                type: "FILTER_BY_RATING",
                                payload: val.value,
                            })
                        }} />
                    </span>
                </div>
                <span>
                    <div className="search__cart" onMouseEnter={handleMouseEnterSearch} onMouseLeave={handleMouseLeaveSearch}>
                        <input type="text" placeholder="Search..." onChange={(e) => {
                            productDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value
                            })
                        }} />
                        <GoSearch color="#fff" size="22px" />
                    </div>
                </span>
            </fieldset>
        </div>
    )
}
export default Filters;