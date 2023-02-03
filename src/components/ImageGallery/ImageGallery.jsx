import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data, getLargeUrl }) => {
  return (
    <ul className="ImageGallery">
      {data.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id}
        webformatURL={webformatURL}
        getLargeUrl={getLargeUrl}
        largeImageURL={largeImageURL}/>
      ))}
      </ul>
  );
};

export default ImageGallery;
