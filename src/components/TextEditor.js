import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }
  onChangeSelection(range, source, editor) {
    console.log(range);
  }

  render() {
    return (
        <ReactQuill
            
        value={this.state.text}
        onChange={this.onChangeSelection}
        getSelection={this.onChangeSelection}
      />
    );
  }
}
