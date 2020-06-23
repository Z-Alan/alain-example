import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SFSchema } from '@delon/form';

export interface AutocompleteOptionGroups {
  title: string;
  count?: number;
  children?: AutocompleteOptionGroups[];
}

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormComponent implements OnInit {

  schema: SFSchema = {
    properties: {
      users: {
        type: 'string',
        title: '选择用户',
        ui: {
          widget: 'search-select',
        },
      },
    },
  };

  constructor() {
  }

  ngOnInit(): void {

  }


}
