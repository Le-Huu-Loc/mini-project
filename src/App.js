import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clock from './components/Clock';
import Info from './components/Info';
import Notfound from './components/Notfound';
import UserList from './features/User/components/UserList';
import { useState } from 'react';
import Birthdays from './features/User/components/Birthday';
import HeaderCart from './features/ShoppingCart/components/HeaderCart';
function App() {

  const [listUser, setListUser] = useState(() => {
    const initListUser = JSON.parse(localStorage.getItem('list-user')) || [
      {
        id: 1,
        name: 'Lê Hữu Lộc',
        date: 27,
        month: 11,
        year: 1999,
        image: 'https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg',
      },
      {
        id: 2,
        name: 'Thảo Duyên',
        date: 5,
        month: 1,
        year: 2004,
        image: 'https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-girl-deo-kinh-thoi-trang-tri-thuc-dep-nhat.jpg',
      },
      {
        id: 3,
        name: 'Hinata',
        date: 1,
        month: 11,
        year: 1999,
        image: 'https://topshare.vn/wp-content/uploads/2021/05/hinh-anh-anime-nam-ngau-12.jpg',
      },
      {
        id: 4,
        name: 'Naruto',
        date: 27,
        month: 11,
        year: 1999,
        image: 'https://topshare.vn/wp-content/uploads/2021/05/hinh-anh-anime-nam-ngau-12.jpg',
      },
    ]
    return initListUser
  })
  function handleAddUser(formValues) {
    const newUser = {
      id: Math.trunc(Math.random() * 10000),
      ...formValues,
    };

    const newUserList = [...listUser]
    newUserList.push(newUser)
    setListUser(newUserList)
    localStorage.setItem('list-user', JSON.stringify(newUserList))
  }

  function handleDeleteUser(user) {
    const count = listUser.findIndex(x => x.id === user.id)
    if (count < 0) return
    const newUserList = [...listUser]
    newUserList.splice(count, 1)
    setListUser(newUserList)
    localStorage.setItem('list-user', JSON.stringify(newUserList))
  }

  function handleUpdate(formValues) {
    const index = listUser.findIndex(x => x.id === formValues.id)
    if (index < 0) return
    const newUpdateList = [...listUser]
    newUpdateList[index] = formValues
    setListUser(newUpdateList)
    localStorage.setItem('list-user', JSON.stringify(newUpdateList))
  }



  return (
    <Router className="App">
      <Header />
      <div className="container">
        <div className="container-project">
          <Switch>
            <Route exact path="/">
              <div className="container__info">
                <Info />
              </div>
              <div className="container__clock">
                <Clock />
              </div>
            </Route>
            <Route path="/user">
              <UserList onAddUser={handleAddUser} listUser={listUser} onDeleteUser={handleDeleteUser} onUpdateUser={handleUpdate} />
            </Route>
            <Route path="/birthdays">
              <Birthdays listUser={listUser} />
            </Route>
            <Route path="/cart">
              <div className="cart__header">
                <HeaderCart />
              </div>
            </Route>
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
