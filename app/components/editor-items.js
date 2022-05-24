import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditorItemsComponent extends Component {
  @tracked test_case_list = [
    {
      id: 1,
      requirements: 'Nachos',
      test_case: 'Salt Quantity',
    },
  ];
  @action
  addcase(requirements, test_case) {
    this.test_case_list = [
      ...this.test_case_list,
      {
        id: this.test_case_list[this.test_case_list.length-1].id + 1,
        requirements,
        test_case,
      },
    ];
  }

  @action
  deletecase(id){
      this.test_case_list = this.test_case_list.filter(function(item) {
        return item.id !== id
    });
  }
}
