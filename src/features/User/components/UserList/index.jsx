import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap'
import { FaWindowClose, FaUserPlus } from 'react-icons/fa';
import './User.scss'

UserList.propTypes = {
    onAddUser: PropTypes.func,
    onDeleteUser: PropTypes.func,
    onUpdateUser: PropTypes.func,
    onUpdate: PropTypes.func,
    listUser: PropTypes.array,
};
UserList.defaultProps = {
    onAddUser: null,
    onDeleteUser: null,
    onUpdateUser: null,
    onUpdate: null,
    listUser: [],
}

function getRandomImage() {
    const imgList = [
        'https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg',
        'https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-girl-deo-kinh-thoi-trang-tri-thuc-dep-nhat.jpg',
        'https://topshare.vn/wp-content/uploads/2021/05/hinh-anh-anime-nam-ngau-12.jpg',
    ]
    const randomIndex = Math.trunc(Math.random() * 3);
    return imgList[randomIndex];
}

function handleUser() {
    const addUser = document.querySelector('.container-project div .add__user')
    addUser.classList.toggle('show')
    const nameError = document.querySelector('.name-error')
    nameError.classList.remove('error')
    const timeError = document.querySelector('.time-error')
    timeError.classList.remove('error')
}


function UserList(props) {

    const { onAddUser, listUser, onDeleteUser, onUpdateUser, onUpdate } = props
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [updateName, setUpdateName] = useState('')
    const [updateDate, setUpdateDate] = useState('')
    const [updateMonth, setUpdateMonth] = useState('')
    const [updateYear, setUpdateYear] = useState('')
    const [updateImage, setUpdateImage] = useState('')
    const [updateId, setUpdateId] = useState('')
    const [search, setSearch] = useState('')

    const [image, setImage] = useState(() => {
        const initImg = localStorage.getItem('box-img') || 'https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg'
        return initImg
    })



    function handleRandomClick() {
        const newImg = getRandomImage()
        setImage(newImg)
        localStorage.setItem('box-img', newImg)
    }
    function handleRandomUpdateClick() {
        const newImg = getRandomImage()
        setUpdateImage(newImg)
    }

    function handleOnChangeName(e) {
        setName(e.target.value)
        const nameError = document.querySelector('.name-error')
        if (!e.target.value) {
            nameError.classList.add('error')
        }
        else {
            nameError.classList.remove('error')
        }
    }
    function handleOnChangeDay(e) {
        setDate(e.target.value)
        const nameError = document.querySelector('.time-error')
        if (!e.target.value) {
            nameError.classList.add('error')
        }
        else {
            nameError.classList.remove('error')
        }
    }
    function handleOnChangeMonth(e) {
        setMonth(e.target.value)
        const nameError = document.querySelector('.time-error')
        if (!e.target.value) {
            nameError.classList.add('error')
        }
        else {
            nameError.classList.remove('error')
        }
    }
    function handleOnChangeYear(e) {
        setYear(e.target.value)
        const nameError = document.querySelector('.time-error')
        if (!e.target.value) {
            nameError.classList.add('error')
        }
        else {
            nameError.classList.remove('error')
        }
    }
    function handleOnChangeUpdateName(e) {
        setUpdateName(e.target.value)
        const nameError = document.querySelector('.nameUD-error')
        if (!e.target.value) {
            nameError.classList.add('error')
        }
        else {
            nameError.classList.remove('error')
        }
    }
    function handleOnChangeUpdateDay(e) {
        setUpdateDate(e.target.value)
        const timeError = document.querySelector('.timeUD-error')
        if (!e.target.value) {
            timeError.classList.add('error')
        }
        else {
            timeError.classList.remove('error')
        }
    }
    function handleOnChangeUpdateMonth(e) {
        setUpdateMonth(e.target.value)
        const timeError = document.querySelector('.timeUD-error')
        if (!e.target.value) {
            timeError.classList.add('error')
        }
        else {
            timeError.classList.remove('error')
        }
    }
    function handleOnChangeUpdateYear(e) {
        setUpdateYear(e.target.value)
        const timeError = document.querySelector('.timeUD-error')
        if (!e.target.value) {
            timeError.classList.add('error')
        }
        else {
            timeError.classList.remove('error')
        }
    }

    function handleAddUser() {
        const timeElement = document.querySelector('.time-error')
        const nameError = document.querySelector('.name-error')
        if (name && date > 0 && date < 31 && month > 0 && month < 12 && year > 1990 && year < 2021) {
            timeElement.classList.remove('error')
            nameError.classList.remove('error')
            if (onAddUser) {
                const formValues = {
                    name: name,
                    date: parseInt(date),
                    month: parseInt(month),
                    year: parseInt(year),
                    image: image,
                }
                onAddUser(formValues)
                setName('')
                setDate('')
                setMonth('')
                setYear('')
            }
            handleUser()
        }
        else if (!name) {
            nameError.classList.add('error')
        }
        else {
            timeElement.classList.add('error')
        }
    }

    function handleDeleteUser(user) {
        if (onDeleteUser) {
            onDeleteUser(user)
        }
    }

    function handleHideUpdate() {
        const updateUser = document.querySelector('.container-project div .update__user')
        updateUser.classList.toggle('show')
        const nameUDError = document.querySelector('.nameUD-error')
        nameUDError.classList.remove('error')
        const timeUDError = document.querySelector('.timeUD-error')
        timeUDError.classList.remove('error')
    }
    function handleUpdate(user) {
        if (onUpdate)
            onUpdate(user)
        setUpdateName(user.name)
        setUpdateDate(user.date)
        setUpdateMonth(user.month)
        setUpdateYear(user.year)
        setUpdateImage(user.image)
        setUpdateId(user.id)
        handleHideUpdate()
    }
    function handleUpdateUser() {
        const timeElement = document.querySelector('.timeUD-error')
        const nameError = document.querySelector('.nameUD-error')
        if (updateName && parseInt(updateDate) > 0 && parseInt(updateDate) < 31 && parseInt(updateMonth) > 0 && parseInt(updateMonth) < 12 && parseInt(updateYear) > 1990 && parseInt(updateYear) < 2021) {
            timeElement.classList.remove('error')
            nameError.classList.remove('error')
            if (onUpdateUser) {
                const formValues = {
                    id: updateId,
                    name: updateName,
                    date: parseInt(updateDate),
                    month: parseInt(updateMonth),
                    year: parseInt(updateYear),
                    image: updateImage,
                }
                onUpdateUser(formValues)
            }
            handleHideUpdate()
        }
        else if (!updateName) {
            nameError.classList.add('error')
        }
        else {
            timeElement.classList.add('error')
        }
    }
    function handleSearchUser(e) {
        setSearch(e.target.value)
        setPageNumber(0)
    }

    //Chưa hiểu được chổ đây 
    const totalList = [...listUser]
    const totalPage = totalList.filter(user => {
        if (search === "" || user.name.toLowerCase().includes(search.toLowerCase())) {
            return user
        }
        else {
            return user.search
        }
    })
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 4
    const pageVisited = pageNumber * usersPerPage
    const pageCount = Math.ceil(totalPage.length / usersPerPage)
    function handlePageChange(newPage) {
        setPageNumber(newPage)
    }


    return (
        <div className="user">
            <div className="list__user">
                <Form>
                    <div className="reponsive__filters">
                        <div className="list__user--search">
                            <p>Search</p>
                            <input id="searchId" type="text" value={search} onChange={handleSearchUser} placeholder="Hữu Lộc..." />
                        </div>
                        <div className="list__user--plus" onClick={handleUser}><FaUserPlus size="25px" /></div>
                    </div>
                    <div className="user__items">
                        {listUser.filter(user => {
                            if (search === "" || user.name.toLowerCase().includes(search.toLowerCase())) {
                                return user
                            }
                            else {
                                return user.search
                            }
                        }).slice(pageVisited, pageVisited + usersPerPage).map(user => {
                            return (
                                <div key={user.id} className="user__items--item">
                                    <img width="200px" height="200px" src={user.image} alt={`Error img ${user.image}`} />
                                    <p>{user.name}</p>
                                    <p>{`0${user.date}`.slice(-2)}-{`0${user.month}`.slice(-2)}-{user.year}</p>
                                    <div className="item__btn">
                                        <Button type="button" color="primary" onClick={() => handleDeleteUser(user)}>Delete</Button>
                                        <Button type="button" color="primary" onClick={() => handleUpdate(user)}>Update</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Form>
            </div>
            <div className="add__user">
                <Form className="add__user--container">
                    <div className="add__user--close" onClick={handleUser}><FaWindowClose size="25px" /></div>
                    <FormGroup>
                        <Label for="nameId">Name</Label>
                        <Input name="name" id="nameId" placeholder="Eg: Hữu Lộc..." value={name} onChange={handleOnChangeName} />
                        <Label className="name-error">Bạn phải nhập trường này</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birthdayId">Birthday</Label>
                        <div className="add__user--container__birthday">
                            <Input type="number" min="1" max="31" name="birthday" id="birthdayId" placeholder="dd" value={date} onChange={handleOnChangeDay} />/
                            <Input type="number" min="1" max="12" placeholder="mm" value={month} onChange={handleOnChangeMonth} />/
                            <Input type="number" min="1990" max="2021" placeholder="yyyy" value={year} onChange={handleOnChangeYear} />
                        </div>
                        <Label className="time-error">Vui lòng nhập đúng định dạng (dd-mm-yyyy)</Label>
                    </FormGroup>
                    <FormGroup>
                        <div><img width="100%" height="200px" src={image} alt="Random" /></div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <Button type="button" outline color="primary" onClick={handleRandomClick}>Random a photo</Button>
                            <Button type="button" color="primary" onClick={handleAddUser}>Add</Button>
                        </div>
                    </FormGroup>

                </Form>
            </div>

            <div className="update__user">
                <Form className="update__user--container">
                    <div className="update__user--close" onClick={handleHideUpdate}><FaWindowClose size="25px" /></div>
                    <FormGroup>
                        <Label for="nameId">Name</Label>
                        <Input name="name" id="nameId" value={updateName} onChange={handleOnChangeUpdateName} />
                        <Label className="nameUD-error">Bạn phải nhập trường này</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birthdayId">Birthday</Label>
                        <div className="add__user--container__birthday">
                            <Input type="number" min="1" max="31" name="birthday" id="birthdayId" placeholder="dd" value={updateDate} onChange={handleOnChangeUpdateDay} />/
                            <Input type="number" min="1" max="12" placeholder="mm" value={updateMonth} onChange={handleOnChangeUpdateMonth} />/
                            <Input type="number" min="1990" max="2020" placeholder="yyyy" value={updateYear} onChange={handleOnChangeUpdateYear} />
                        </div>
                        <Label className="timeUD-error">Vui lòng nhập đúng định dạng (dd-mm-yyyy)</Label>
                    </FormGroup>
                    <FormGroup>
                        <div><img width="100%" height="200px" src={updateImage} alt="Random" /></div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <Button type="button" outline color="primary" onClick={handleRandomUpdateClick}>Random a photo</Button>
                            <Button type="button" color="primary" onClick={handleUpdateUser}>Update</Button>
                        </div>
                    </FormGroup>

                </Form>
            </div>
            <div className="user__btn">

                <button disabled={pageNumber <= 0} type="button" onClick={() => handlePageChange(pageNumber - 1)}>Prev</button>
                <p>{pageNumber + 1}</p>
                <button disabled={pageNumber >= pageCount - 1} type="button" onClick={() => handlePageChange(pageNumber + 1)}>Next</button>
            </div>
        </div>
    );
}

export default UserList;