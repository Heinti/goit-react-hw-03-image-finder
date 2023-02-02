import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className="button"
            disabled={this.props.isSubmiting}
          >
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
