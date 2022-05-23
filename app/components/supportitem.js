import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';


export default class MessagesComponent extends Component {
@tracked list = [
    {
      content: 'Test Plan Generation',
    },
    {
      content: 'SQL Generation',
    },
  ];
}
