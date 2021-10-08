import PropTypes from 'prop-types';
import React from 'react';
import './Birthday.scss';

Birthdays.propTypes = {
    listUser: PropTypes.array,
};
Birthdays.defaultProps = {
    listUser: [],
}

function Birthdays(props) {
    const { listUser } = props
    const now = new Date()
    const nowDate = now.getDate()
    const nowMonth = now.getMonth() + 1
    const nowYear = now.getFullYear()

    const newList = []
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].date === nowDate && listUser[i].month === nowMonth) {
            newList.push(listUser[i])
        }
    }


    function handleMouseEnter(e) {
        e.currentTarget.style.backgroundColor = "rgb(37 175 212 / 100%)"
        const hoverElement = e.currentTarget.lastChild
        hoverElement.classList.add('isHovering')
    }
    function handleMouseLeave(e) {
        e.currentTarget.style.backgroundColor = "rgb(37 175 212 / 50%)"
        const hoverElement = e.currentTarget.lastChild
        hoverElement.classList.remove('isHovering')
    }


    // const [isHovering, setHovering] = useState(false)
    // function crossClass() {
    //     return `${isHovering ? "block" : "none"}`
    // }

    return (
        <div className="birthday">
            <div className="total">{newList.length} Birthdays today</div>
            <div className="user__birthday">
                {newList.map((user) => {
                    return (
                        <div key={user.id} className="birthday__item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img width="85px" height="75px" src={user.image} alt={`Error img ${user.image}`} className="birthday__item--img" />
                            <div className="birthday__item--mota">
                                <p className="birthday__item--name">{user.name}</p>
                                <p className="birthday__item--old">{nowYear - user.year} tuổi</p>
                            </div>
                            <div className="notHovering">
                                <img width="150px" height="150px" src={user.image} alt={`Error img ${user.image}`} />
                                <p>{user.name}</p>
                                <p>{`0${user.date}`.slice(-2)}-{`0${user.month}`.slice(-2)}-{user.year}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default Birthdays;