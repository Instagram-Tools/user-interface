import ContextSwitch from './ContextSwitch';
import BOT_Gateway from './BOT_Gateway';

export default class StartStopButton extends ContextSwitch {
  doClick(context) {
    return context.setState(p => {
      if (!p[this.props.value]) {
        BOT_Gateway.startBot(context.state.username);
      } else {
        BOT_Gateway.stopBot(context.state.username);
      }

      return {
        [this.props.value]: !p[this.props.value]
      };
    });
  }
}
