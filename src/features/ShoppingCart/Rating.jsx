import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Rating = ({ rating, onClick, style, }) => {
    return (
        <>
            {[...Array(5)].map((_, i) => (
                <span key={i} style={style}>
                    {rating > i ? (
                        <AiFillStar size="20px" />
                    ) : (
                        <AiOutlineStar size="20px" />
                    )}
                </span>
            ))}
        </>
    )
}
export default Rating;