import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  plays: string[] = Array(9).fill(null);
  xOrO: boolean = true;
  running: string = 'running';

  scoring(): void {
    {
      if (
        (this.plays[0] === 'X' &&
          this.plays[1] === 'X' &&
          this.plays[2] === 'X') ||
        (this.plays[3] === 'X' &&
          this.plays[4] === 'X' &&
          this.plays[5] === 'X') ||
        (this.plays[6] === 'X' &&
          this.plays[7] === 'X' &&
          this.plays[8] === 'X') ||
        (this.plays[0] === 'X' &&
          this.plays[3] === 'X' &&
          this.plays[6] === 'X') ||
        (this.plays[1] === 'X' &&
          this.plays[4] === 'X' &&
          this.plays[7] === 'X') ||
        (this.plays[2] === 'X' &&
          this.plays[5] === 'X' &&
          this.plays[8] === 'X') ||
        (this.plays[0] === 'X' &&
          this.plays[4] === 'X' &&
          this.plays[8] === 'X') ||
        (this.plays[2] === 'X' &&
          this.plays[4] === 'X' &&
          this.plays[6] === 'X') ||
        (this.plays[0] === 'O' &&
          this.plays[1] === 'O' &&
          this.plays[2] === 'O') ||
        (this.plays[3] === 'O' &&
          this.plays[4] === 'O' &&
          this.plays[5] === 'O') ||
        (this.plays[6] === 'O' &&
          this.plays[7] === 'O' &&
          this.plays[8] === 'O') ||
        (this.plays[0] === 'O' &&
          this.plays[3] === 'O' &&
          this.plays[6] === 'O') ||
        (this.plays[1] === 'O' &&
          this.plays[4] === 'O' &&
          this.plays[7] === 'O') ||
        (this.plays[2] === 'O' &&
          this.plays[5] === 'O' &&
          this.plays[8] === 'O') ||
        (this.plays[0] === 'O' &&
          this.plays[4] === 'O' &&
          this.plays[8] === 'O') ||
        (this.plays[2] === 'O' &&
          this.plays[4] === 'O' &&
          this.plays[6] === 'O')
      ) {
        this.running = 'win';
      } else if (
        this.plays[0] &&
        this.plays[1] &&
        this.plays[2] &&
        this.plays[3] &&
        this.plays[4] &&
        this.plays[5] &&
        this.plays[6] &&
        this.plays[7] &&
        this.plays[8]
      ) {
        this.running = 'draw';
      }
    }
  }

  play(index: number): void {
    if (this.plays[index] || this.running !== 'running') {
      return;
    }
    this.plays[index] = this.xOrO ? 'X' : 'O';
    this.xOrO = !this.xOrO;
    this.scoring();
  }

  onResetGame(): void {
    this.plays = Array(9).fill(null);
    this.xOrO = true;
    this.running = 'running';
  }
}
