const Modal = ({imgUrl}) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={imgUrl} alt="sosok" />
      </div>
    </div>
  );
};

export default Modal;
