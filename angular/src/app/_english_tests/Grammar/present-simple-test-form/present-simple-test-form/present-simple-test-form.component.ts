import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-present-simple-test-form',
  templateUrl: './present-simple-test-form.component.html',
  styleUrls: ['./present-simple-test-form.component.scss']
})
export class PresentSimpleTestFormComponent implements OnInit {
  tests = [
    'This train ... at 10.30 every day.',
    'The sun ... in the East.',
    'Ted often ... in a restaurant.',
    'A surgeon is a person who ... operations.',
    '... her dog every morning?',
    'He ... to any political party.',
    'Where ... your books?',
    'They ... volleyball at weekends.',
    'A red traffic light ... “Stop”.',
    '... lunch at work?'
  ]
  items = [
    ['leaves', 'does leave', 'leave'],
    ['rises', 'rising', 'rise'],
    ['is dines', 'dines', 'dine'],
    ['is make', 'makes', 'make'],
    ['Is Mary walk', 'Does Mary walk', 'Do Mary walk'],
    ['don`t belong', 'isn`t belong', 'doesn`t belong'],
    ['do you keep', 'you keep', 'does you keep'],
    ['don`t play', 'aren`t play', 'doesn`t play'],
    ['is mean', 'mean', 'means'],
    ['Do you usually have', 'Are you usually have', 'Does you usually have']
  ]

  answers = ['', '', '', '', '', '', '', '', '', '']

  correctAnswers: { correct: string } = {correct: ''}

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  radioChangeHandler(event: any) {
    let indexes = event.target.value
    let test_index = parseInt(indexes[0]), ans_index = parseInt(indexes[1])

    this.answers[test_index] = this.items[test_index][ans_index]
  }

  sendAnswers() {
    this.http.post<{ correct: string }>('http://127.0.0.1:5000/checkTestsAnswers', {present_simple: this.answers})
      .subscribe((res) => (
          this.correctAnswers = res),
        error => {
          console.warn(error)
        })
  }
}
