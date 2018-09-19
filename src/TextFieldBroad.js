import React from 'react';
import TextFieldSuggestion from './TextFieldSuggestion';

export default class TextFieldBroad extends TextFieldSuggestion {
  onInput(e) {
    this.setState({ value: e.target.value });
  }

  Suggestions() {}
}
