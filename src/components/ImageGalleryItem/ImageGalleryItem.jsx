

 const ImageGalleryItem = ({ webformatURL, largeImageURL, getLargeUrl  }) => {
  return (
    <li className="ImageGalleryItem" >
      <img src={webformatURL} alt="sosok"
        onClick={()=> getLargeUrl(largeImageURL)}
      className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem