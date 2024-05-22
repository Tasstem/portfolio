import React from 'react'
import { useState } from "react";
// import NavContainer from '../containers/NavContainer'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'


const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState(false)
  const [modalSrc, setModalSrc] = useState("")

  return (

    <div>
{/* <NavContainer/> */}
<div className='gallery-wrapper'>

        <h1>Мои фото и видео</h1>
    <div className='videos-container'>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/1.mp4")}}><video src='assets/gallery/videos/1.mp4' ></video></div>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/2.mp4")}}><video src='assets/gallery/videos/2.mp4' ></video></div>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/3.mp4")}}><video src='assets/gallery/videos/3.mp4' ></video></div>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/4.mp4")}}><video src='assets/gallery/videos/4.mp4' ></video></div>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/5.mp4")}}><video src='assets/gallery/videos/5.mp4' ></video></div>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/6.mp4")}}><video src='assets/gallery/videos/6.mp4' ></video></div>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/7.mp4")}}><video src='assets/gallery/videos/7.mp4' ></video></div>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/8.mp4")}}><video src='assets/gallery/videos/8.mp4' ></video></div>
        <div className="video" onClick={()=>{setModalOpen(true); setModalType(true); setModalSrc("assets/gallery/videos/9.mp4")}}><video src='assets/gallery/videos/9.mp4' ></video></div>

        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/1.JPG")}}><img src='assets/gallery/images/1.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/2.JPG")}}><img src='assets/gallery/images/2.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/3.JPG")}}><img src='assets/gallery/images/3.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/4.JPG")}}><img src='assets/gallery/images/4.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/5.JPG")}}><img src='assets/gallery/images/5.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/6.JPG")}}><img src='assets/gallery/images/6.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/7.JPG")}}><img src='assets/gallery/images/7.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/8.JPG")}}><img src='assets/gallery/images/8.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/9.JPG")}}><img src='assets/gallery/images/9.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/10.JPG")}}><img src='assets/gallery/images/10.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/11.JPG")}}><img src='assets/gallery/images/11.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/12.JPG")}}><img src='assets/gallery/images/12.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/13.JPG")}}><img src='assets/gallery/images/13.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/14.JPG")}}><img src='assets/gallery/images/14.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/15.JPG")}}><img src='assets/gallery/images/15.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/16.JPG")}}><img src='assets/gallery/images/16.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/17.JPG")}}><img src='assets/gallery/images/17.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/18.JPG")}}><img src='assets/gallery/images/18.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/19.JPG")}}><img src='assets/gallery/images/19.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/20.JPG")}}><img src='assets/gallery/images/20.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/21.JPG")}}><img src='assets/gallery/images/21.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/22.JPG")}}><img src='assets/gallery/images/22.JPG'  alt=''/></div>
        <div className="image" onClick={()=>{setModalOpen(true); setModalType(false); setModalSrc("assets/gallery/images/23.JPG")}}><img src='assets/gallery/images/23.JPG'  alt=''/></div>

    </div>
<Modal
show={modalOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={()=>setModalOpen(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!modalType &&
      <Image src={modalSrc} fluid/>}
      {modalType &&
      <video className='modalVideo' src={modalSrc} autoPlay controls></video>}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={()=> {this.updateState("modalOpen",false)}}>Close</Button> */}
      </Modal.Footer>
    </Modal>
    </div>
    </div>

  )
}

export default Gallery