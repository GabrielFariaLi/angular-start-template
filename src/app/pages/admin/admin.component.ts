import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>admin works!</p>`,
    styleUrl: './admin.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent { }
