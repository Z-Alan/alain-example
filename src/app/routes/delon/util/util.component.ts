import { Component } from '@angular/core';
import { copy, format } from '@delon/util';
import { yuan } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
})
export class UtilComponent {
  // tslint:disable-next-line: no-invalid-template-strings
  format_str = 'this is ${name}';

  // region: string
  format_res = '';
  format_obj = JSON.stringify({ name: 'asdf' });
  // yuan
  yuan_str: any;
  yuan_res: string;
  content = `time ${+new Date()}

    中文！@#￥%……&*`;

  // endregion

  // region: other

  constructor(public messageSrv: NzMessageService) {
  }

  onFormat() {
    let obj = null;
    try {
      obj = JSON.parse(this.format_obj);
    } catch {
      this.messageSrv.error(`无法使用 JSON.parse 转换`);
      return;
    }
    this.format_res = format(this.format_str, obj, true);
  }

  onYuan(value: string) {
    this.yuan_res = yuan(value);
  }

  onCopy() {
    copy(`time ${+new Date()}`).then(() => this.messageSrv.success(`success`));
  }

  // endregion
}
