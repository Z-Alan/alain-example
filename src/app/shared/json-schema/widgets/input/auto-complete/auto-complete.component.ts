import { Component, OnInit } from '@angular/core';
import { AutocompleteOptionGroups } from '../../../../../routes/pro/form/basic-form/basic-form.component';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.less'],
})
export class AutoCompleteComponent implements OnInit {
  inputValue?: string;
  optionGroups: AutocompleteOptionGroups[] = [];

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [
        {
          title: '话题',
          children: [
            {
              title: 'AntDesign',
              count: 10000,
            },
            {
              title: 'AntDesign UI',
              count: 10600,
            },
          ],
        },
      ];
    }, 1000);
  }

  onChange(value: string): void {
    console.log(value);
  }

}
