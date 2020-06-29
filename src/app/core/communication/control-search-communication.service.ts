import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class ControlSearchCommunicationService {

  /**
   * 选择赠品的按钮以及状态
   * @author zhouqiang 选择赠品
   * @date 2020/04/28
   */
  searchChange$: Observable<string>;
  /**
   * 用于推送状态
   */
  private searchChangeObserver: Observer<any>;

  constructor() {
    this.createSearchChangeObserver();
  }

  createSearchChangeObserver() {
    this.searchChange$ = new Observable<any>(
      (observer) => {
        this.searchChangeObserver = observer;
        // 取消订阅    清除订阅数据
        return {
          unsubscribe() {
            navigator.geolocation.clearWatch(this.searchChange$);
          },
        };
      }).pipe();
  }

  changeSearchChange(data: string) {
    if (this.searchChangeObserver !== undefined) {
      // 推送一个新数据
      this.searchChangeObserver.next(data);
    }
  }
}
