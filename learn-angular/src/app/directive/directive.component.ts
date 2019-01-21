import { Component } from '@angular/core';

@Component({
    selector: "app-directive",
    template: `
        <h2>Bài học cách chỉ thị một nội dung xuất hiện
            theo ý của mình
        </h2>

        <h3 *ngIf="showOne">1/ Tôi xuất hiện đầu tiên</h3>

        <div>
            <h3 *ngIf="showTwo; else affterShowTwo">Tôi xuất hiện đầu tiên</h3>
            
            <ng-template #affterShowTwo>
                <h4>Tôi là người xuất hiện thứ 2</h4>
            </ng-template>
        </div>

        <hr>
        <h2>Quy định template xuất hiện</h2>

        <div>
            <div *ngIf="showRender; then thenShow1; else elseShow2"></div>
            
            <ng-template #thenShow1>
                <h4>Tôi là người xuất hiện thứ 1</h4>
            </ng-template>

            <ng-template #elseShow2>
                <h4>Tôi là người xuất hiện thứ 2</h4>
            </ng-template>
        </div>
    `,
    styles: [`
    `]
})

export class directiveComponent{
    public showOne = true;
    public showTwo = false;
    public showRender = true;
}