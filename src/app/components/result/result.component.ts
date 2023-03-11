import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  @Input() result!: string;
  @Input() xOrO!: boolean;
  @Output() resetGame: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    this.resetGame.emit();
  }
}
