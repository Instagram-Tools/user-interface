import TextFieldBroad from './TextFieldBroad';

export default class TextField_Comments extends TextFieldBroad {
  iconClass = 'commenticon';

  addValue(old = [], value) {
    return value.length > 0 ? [...old, value] : old;
  }
}
