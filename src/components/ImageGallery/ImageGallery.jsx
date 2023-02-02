// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ data }) => {
  return (
    <ul className="gallery">
{data.map(item =>  console.log(item.id))}
    </ul>
  );
};

export default ImageGallery;


