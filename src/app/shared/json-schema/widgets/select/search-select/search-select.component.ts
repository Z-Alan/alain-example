import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NzSelectModeType } from 'ng-zorro-antd/select/select.types';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.less'],
})
export class SearchSelectComponent implements OnInit {

  randomUserUrl = 'https://api.randomuser.me/?results=5';
  /**
   * 搜索参数
   */
  searchChange$ = new BehaviorSubject('');
  /**
   * 选中值
   */
  selectedValue?: string;
  /**
   * 加载状态
   */
  isLoading = false;
  /**
   * 下拉列表数据
   */
  optionList: any[];
  /**
   * 选择框模式 multiple 多选 tags 标签 default 单选
   */
  mode: NzSelectModeType = 'multiple';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {

  }

  setOptionList(dataList: any[]) {
    this.optionList = dataList;
    this.cdr.detectChanges();
  }

  onSearch(value: string): void {
    // if (value.length === 0) {
    //   return;
    // }
    this.isLoading = true;
    this.searchChange$.next(value);
  }

  ngOnInit(): void {
    // tslint:disable:no-any
    const getRandomNameList = (name: string) =>
      this.http
        .get(`${this.randomUserUrl}`)
        .pipe(map((res: any) => res.results))
        .pipe(
          map((list: any) => {
            return list.map((item: any) => `${item.name.first} ${name}`);
          }),
        );
    const optionList$: Observable<string[]> = this.searchChange$
      .asObservable()
      .pipe(
        filter(text => text.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(getRandomNameList),
      );
    optionList$.subscribe(data => {
      this.setOptionList(data);
      this.isLoading = false;
    });
  }

}
