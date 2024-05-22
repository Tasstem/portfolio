/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Axios from 'axios';
import { isEmpty } from './functions';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import {NotificationManager} from 'react-notifications';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';






export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false, //триггер для открытия главной модалки
      modalImg: "", // переменная для src картинки главной модалки
      activeIndex: 0, //индекс для отображения выбраной категории
    }
    
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fileDownload = this.fileDownload.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onUnLike = this.onUnLike.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.onPageSubmit = this.onPageSubmit.bind(this);
    
  }
  
  //функция для скачивания картинок
  fileDownload(url) {
    fetch(url, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

//первая загрузка компонента
  componentDidMount() {
    
    var {  location} = this.props

//для определиня типа страницы( один и тот же компонент используется на главной странице и странице сохраненных)
    switch (location) {
      case 'main':
        var { baseUrl,searchValue, clientId} = this.props
    var url = ""
      url = `${baseUrl}/search/photos?per_page=20&page=1&query=${searchValue}&client_id=${clientId}`
      
      Axios.get(url).then(function (res) {
        if (res.status === 200) {
  this.props.changeValue("photos", res.data.results)
  this.props.changeValue("totalPages", res.data.total_pages)
          
        }
      }.bind(this))
        
        break;
      case 'favorites':
        
      //токен для отправки запроса
      var { token} = this.props
      let config = {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
  
      
       url = "https://api.unsplash.com/users/tassaliyev/likes?/page=1"
      Axios.get(url, config).then(function (res) {
        if (res.status === 200) {
  this.props.changeValue("photos", res.data)
          
        }
      }.bind(this))

      break;
      default:
    }

}

  
  onCategoryClick(value) {
    var { baseUrl,page, clientId} = this.props
    this.props.changeValue("searchValue", value)
    this.props.changeValue("page", 1)
    var url = ""
      url = `${baseUrl}/search/photos?per_page=20&page=${page}&query=${value}&client_id=${clientId}`
      
      Axios.get(url).then(function (res) {
        if (res.status === 200) {
  this.props.changeValue("photos", res.data.results)
  this.props.changeValue("totalPages", res.data.total_pages)
          
        }
      }.bind(this))
  }
  onPageSubmit(value) {
    var { baseUrl, clientId, searchValue} = this.props
    var url = ""
      url = `${baseUrl}/search/photos?per_page=20&page=${value}&query=${searchValue} &client_id=${clientId}`
      
      Axios.get(url).then(function (res) {
        if (res.status === 200) {
  this.props.changeValue("photos", res.data.results)
  this.props.changeValue("totalPages", res.data.total_pages)
          
        }
      }.bind(this))
  }

  onLike(photoId) {
    var { token, page} = this.props
    let config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }

    
    var url = `https://api.unsplash.com/photos/${photoId}/like`
    
    Axios.post(url,[], config).then(function (res) {
      if (res.status === 201) {
NotificationManager.success("Запрос прошел успешно,По независящим от разработчика обстоятельствам, Unsplash API нужно подождать пару минут пока фотография добавится в сохраненные","", 20000)
this.props.changeValue("page",page)

        
      }
    }.bind(this))
  }

  onUnLike(photoId) {
    var { token, page} = this.props
    let config = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
    var url = `https://api.unsplash.com/photos/${photoId}/like`
    Axios.delete(url,config).then(function (res) {
      if (res.status === 200) {
NotificationManager.success("Запрос прошел успешно,По независящим от разработчика обстоятельствам, Unsplash API нужно подождать пару минут пока фотография удалится из сохраненных","", 20000)

this.props.changeValue("page", page)
}
    }.bind(this))
  }

  handlePageChange(e) {
    var type = e.target.dataset.testid
    if(type==="NavigateNextIcon") {
this.props.changeValue("page", this.props.page+1)
this.onPageSubmit(this.props.page+1)

    }
    else if (type==="NavigateBeforeIcon") {
this.props.changeValue("page", this.props.page-1)
this.onPageSubmit(this.props.page-1)
    }
    else {
    var newPage = parseInt(e.target.innerText)
this.props.changeValue("page", newPage)
this.onPageSubmit(newPage)

    }

  }
  

  

  

  render() {
    const { photos, totalPages, page, location, searchValue } = this.props
    const { modalOpen, modalImg} = this.state
//попап скачать
    const download = (
      <Popover id="popover-basic">
        <Popover.Body>
          <strong> Скачать</strong>
        </Popover.Body>
      </Popover>
    );

    const save = (
      <Popover id="popover-basic">
        <Popover.Body>
          <strong> добавить в сохраненные</strong>
        </Popover.Body>
      </Popover>
    );

    const dlt = (
      <Popover id="popover-basic">
        <Popover.Body>
          <strong> Убрать из сохраненных</strong>
        </Popover.Body>
      </Popover>
    );
    return (
      <div className="gallery">
        <Stack spacing={2}>
    </Stack>
    {location==="main" &&
    <div>
      <Pagination color="primary" style={{"backgroundColor": "#fff", "width": "400px","margin": "0px auto", "padding": "0px 20px"}} count={totalPages} page={page} variant="outlined" shape="rounded" onChange={(e)=> {this.handlePageChange(e)}}  />
      <ul className="categories">
        <li className={searchValue==="LION" ? "buttons active" : "buttons"} onClick={()=>{this.onCategoryClick("LION"); this.setState({activeIndex: 0})}}>Лев</li>
        <li className={searchValue==="TIGER" ? "buttons active" : "buttons"} onClick={()=>{this.onCategoryClick("TIGER"); this.setState({activeIndex: 1})}}>Тигр</li>
        <li className={searchValue==="ELEPHANT" ? "buttons active" : "buttons"} onClick={()=>{this.onCategoryClick("ELEPHANT"); this.setState({activeIndex: 2})}}>Слон</li>
        <li className={searchValue==="CAT" ? "buttons active" : "buttons"} onClick={()=>{this.onCategoryClick("CAT"); this.setState({activeIndex: 3})}}>Кошка</li>
        <li className={searchValue==="DOG" ? "buttons active" : "buttons"} onClick={()=>{this.onCategoryClick("DOG"); this.setState({activeIndex: 4})}}>Собака</li>
        <li className={searchValue==="RABBIT" ? "buttons active" : "buttons"} onClick={()=>{this.onCategoryClick("RABBIT"); this.setState({activeIndex: 5})}}>Заяц</li>
        <li className={searchValue==="LEOPARD" ? "buttons active" : "buttons"} onClick={()=>{this.onCategoryClick("LEOPARD"); this.setState({activeIndex: 6})}}>Леопард</li>
      </ul>
      </div>}

      <div className="container">
<div className="image-container">
      { !isEmpty(photos) ? photos.map((e, i) =>
      <div className="box" key={i}>
<OverlayTrigger trigger={["hover", "hover"]} placement="top" overlay={e.liked_by_user ? dlt : save}>
<button className='btn-heart' onClick={()=>{e.liked_by_user ? this.onUnLike(e.id) : this.onLike(e.id)}}><i style={{"color": e.liked_by_user && "red"}} className={e.liked_by_user ?'fas fa-trash' : "fas fa-bookmark"}></i></button>
</OverlayTrigger>
<OverlayTrigger trigger={["hover", "hover"]} placement="top" overlay={download}>
<button className='btn-download' onClick={()=>{this.fileDownload(e.urls.regular)}}><i className='fas fa-download'></i></button>
</OverlayTrigger>
        <img onClick={() => this.setState({ modalOpen: true,modalImg: e.urls.regular })} src={e.urls.regular} loading="eager" alt=""></img>
      </div>
        
  ) : "empty"} 
</div>

</div>
<Modal
show={modalOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => this.setState({ modalOpen: false })}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Image src={modalImg} fluid/>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={()=> {this.updateState("modalOpen",false)}}>Close</Button> */}
      <OverlayTrigger trigger="hover" placement="top" overlay={download}>
        <a className='button-download'><i onClick={()=>{this.fileDownload(modalImg)}} className='fas fa-download'></i></a>
  </OverlayTrigger>

      </Modal.Footer>
    </Modal>

  </div>
    )
  }
}