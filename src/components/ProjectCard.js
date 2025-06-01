import { Col } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export const ProjectCard = ({ title, description, imgUrl, images = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={() => setShowModal(true)}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            {images.length > 0 && (
              <div className="image-count-badge">+{images.length} images</div>
            )}
          </div>
        </div>
      </Col>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="modal-title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="modal-image"
                  src={image}
                  alt={`${title} ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          
          <div className="thumbnails-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumb ${index + 1}`}
                className={`thumbnail ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <span className="image-counter">
            {activeIndex + 1}/{images.length}
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};