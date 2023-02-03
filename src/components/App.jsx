// import axios from 'axios';
import * as API from '../api/imageFinder';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';

// const PER_PAGE = 12;
export class App extends Component {
  state = {
    galleryValue: [], 
    isLoading: false,
    imageModalUrl: '',

    errorLoading: null,
  };

  getAPIImages = async value => {
    try {
      // console.log(value)
      // if (value !== Array) {
      //  return this.setState({errorLoading: 'Wrong value, please try again'})
      // }
      this.setState({ isLoading: true });
      const response = await API.getImges(value);
console.log(response)
      this.setState(prevState => ({
        galleryValue: [...prevState.galleryValue, ...response],
        
      }));

    } catch (error) {
      this.setState({errorLoading: error})
    } finally{
      this.setState({isLoading: false})
    }
  };

  getLargeUrl = value => {
    this.setState({ 
      imageModalUrl: value, 
      });
  };
  render() {
    const {errorLoading, galleryValue, isLoading, imageModalUrl } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.getAPIImages} isSubmiting={isLoading} />
        {errorLoading && <p>
          Ooops.. something goes wrong : {errorLoading}</p>}
        {this.state.isLoading && <Loader />}
        <ImageGallery data={galleryValue} getLargeUrl={this.getLargeUrl} />
        {imageModalUrl && <Modal imgUrl={imageModalUrl}/>}
   
      </div>
    );
  }
}
