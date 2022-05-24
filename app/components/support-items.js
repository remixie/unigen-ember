import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SupportItemComponent extends Component {
  @tracked supportlist = [
    {
      heading_title: 'Unigen Tutorials',
      links: [
        {
          title: 'Test Plan Generation',
          url: 'https://example.com/',
        },
        {
          title: 'SQL Generation',
          url: 'https://wikipedia.org/',
        },
      ],
    },
    {
      heading_title: 'Visual Aids',
      links: [
        {
          title: 'Substrates & Barcodes',
          url: 'https://example.com/',
        },
        {
          title: 'Cool things',
          url: 'https://wikipedia.org/',
        },
      ],
    },
  ];
}
