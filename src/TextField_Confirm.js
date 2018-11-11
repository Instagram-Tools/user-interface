import TextField from './TextField';

export default class TextField_Confirm extends TextField {
  state = { value: '' };

  setValue(context, value) {
    this.setState({
      value: value
    });

    this.props.setIsConfirmed(value === context.state[this.props.value]);
  }

  getValue(context) {
    return this.state.value;
  }
}
