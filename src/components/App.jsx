// import axios from 'axios';
import * as API from '../api/imageFinder';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import  ImageGallery  from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    galleryValue: [],
    isLoading: false,
  };

  getAPIImages = async value => {
    try {
      this.setState({ isLoading: true });
      const response = await API.getImges(value);
      // console.log(response);

      this.setState(prevState => ({
        galleryValue: [...prevState.galleryValue, response],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {galleryValue ,isLoading } = this.state;

    return (
      <div>
        {this.state.isLoading && <Loader />}
        <Searchbar onSubmit={this.getAPIImages} isSubmiting={isLoading} />
        <ImageGallery data={galleryValue}/>

      </div>
    );
  }
}
