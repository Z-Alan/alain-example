import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { TranslateModule } from '@ngx-translate/core';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
// #region third libs
import { CountdownModule } from 'ngx-countdown';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';
// #region 自定义小部件widget schema
import { SearchSelectWidgetComponent } from './json-schema/widgets/select/search-select/search-select-widget.component';
// #region 自定义小部件组件
import { AutoCompleteComponent } from './json-schema/widgets/input/auto-complete/auto-complete.component';
import { SearchSelectComponent } from './json-schema/widgets/select/search-select/search-select.component';

const THIRD_MODULES = [CountdownModule, UEditorModule, NgxTinymceModule];
// #endregion

const COMPONENTS_WIDGETS_SCHEMA = [SearchSelectWidgetComponent];
// #endregion

const COMPONENTS_WIDGETS = [AutoCompleteComponent, SearchSelectComponent];
// #region third libs

// #region your components & directives
const COMPONENTS = [
  ...COMPONENTS_WIDGETS,
  ...COMPONENTS_WIDGETS_SCHEMA];
const DIRECTIVES = [];

// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRD_MODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    TranslateModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRD_MODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {
}
