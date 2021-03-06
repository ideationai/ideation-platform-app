import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { NgProgressModule }     from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgxuxMatDialogModule } from '@ngxux/ngxux-mat-dialog';
import { ClipboardModule }      from 'ngx-clipboard';
import { MaterialModule }       from './material/material.module';
import { MdEditorComponent }    from './md-editor/md-editor.component';

@NgModule({

    declarations: [

        MdEditorComponent

    ],

    imports: [

        ClipboardModule,
        CommonModule,
        ReactiveFormsModule,

        NgProgressModule,
        NgProgressHttpModule,

        NgxuxMatDialogModule,

        MaterialModule,


    ],

    exports: [

        ClipboardModule,

        CommonModule,
        ReactiveFormsModule,
        NgProgressModule,
        NgProgressHttpModule,

        NgxuxMatDialogModule,

        MaterialModule,


        MdEditorComponent

    ],

    entryComponents: []

})
export class SharedModule {
}
