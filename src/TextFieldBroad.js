import TextFieldSuggestion from './TextFieldSuggestion';

export default class TextFieldBroad extends TextFieldSuggestion {
  iconClass = 'commenticon';

  onInput(e) {
    this.setState({ value: e.target.value });
  }

  Suggestions() {}
}
