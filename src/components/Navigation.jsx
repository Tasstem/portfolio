/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { useState } from "react";
import Axios from 'axios';
import { isEmpty } from './functions';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



const Navigation = (props) => {

  //триггер для меню в мобильной версии
  const [menuOpen, setMenuOpen] = useState(false)

  //для инпута в меню
  const [search, setSearch] = useState("")

  //попап на инпут в меню
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Небольшая справка</Popover.Header>
      <Popover.Body>
        Введите любое слово, какие фото вы хотели бы посмотреть<strong> P.S. если искать на англ. результатов будет больше</strong>
      </Popover.Body>
    </Popover>
  );

  //поиск картинок при нажатии Enter
  var onPressEnter = (e) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  //отдельная функция для поиска картинок, чтобы не повторять код
  var onSubmit = () => {
    var { baseUrl, clientId, searchValue} = props
    var url = ""
      url = baseUrl + "/search/photos?per_page=20&page=1&query="+ searchValue + "&client_id=" + clientId

      Axios.get(url).then(function(response) {
        if(response.status === 200){
    props.changeValue("photos", response.data.results)
  props.changeValue("totalPages", response.data.total_pages)
    setSearch("")
          
        }
        })
  }

  return (
    <div>
    <header>
      <a href='/' className='logo'>
        <img className='menu-logo' src='./assets/images/logo/logo.png' alt=''></img>
      </a>
      {!isEmpty(search) &&
      <button className='search-btn' onClick={()=>{onSubmit()}}>Искать</button>}
      <OverlayTrigger trigger={["hover", "hover"]} placement="bottom" overlay={popover}>
      <input className='searchInput' placeholder='Введите свой запрос' value={search} onChange={(e) =>{ setSearch(e.target.value); props.changeValue("searchValue", e.target.value)}} onKeyDown={(e)=>{onPressEnter(e)}}></input>
  </OverlayTrigger>
      <div className="navigation">
        <ul className={menuOpen ? 'menu active' : "menu"}>
          <div className="close-btn" onClick={() =>{setMenuOpen(false)}}>
            {/* <MessageComponent/> */}

          </div>
          <li className='menu-item'></li>
          <li className='menu-item'> <a href='#'>Home</a></li>
          <li className='menu-item'> <a className='sub-btn' href='#'>Дополнительно<i className='fas fa-angle-down'></i></a>
          <ul className='sub-menu'>
            <li className='sub-item'><a href='gallery'>Мои фото и видео</a></li>
            <li className='sub-item'><a href='#'>Sub Item 02</a></li>
            <li className='sub-item'><a href='#'>Sub Item 03</a></li>
          </ul>
          </li>
          <li className='menu-item'> <a className='sub-btn' href='#'>With Sub-dropdown<i className='fas fa-angle-down'></i></a>
          <ul className='sub-menu'>
          <li className='sub-item'><a href='#'>Sub Item 04</a></li>
            <li className='sub-item'><a href='#'>Sub Item 05</a></li>
            <li className='sub-item'><a href='#'>Sub Item 06</a></li>
            <li className='sub-item'><a href='#'>Sub Item 07</a></li>
            <li className='sub-item more'>
              <a className='more-btn' href='#'>More Items <i className='fas fa-angle-right'></i> </a>
              <ul className='more-menu'>
                <li className='more-item'><a href='#'>More Item 01</a></li>
                <li className='more-item'><a href='#'>More Item 02</a></li>
              </ul>
              </li>
          </ul>
          </li>
          <li className='menu-item'> <a href='favorites'>Cохраненные</a></li>
          <li className='menu-item'> <a href='about'>Обо мне</a></li>
          <li className='menu-item'> <a href='contacts'>Контакты</a></li>
        </ul>
      </div>
      <div className="menu-btn" onClick={() =>{setMenuOpen(true)}}></div>
    </header>
    </div>
  )
}

export default Navigation