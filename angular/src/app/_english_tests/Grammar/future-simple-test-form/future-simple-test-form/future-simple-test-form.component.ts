import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-future-simple-test-form',
  templateUrl: './future-simple-test-form.component.html',
  styleUrls: ['./future-simple-test-form.component.scss']
})
export class FutureSimpleTestFormComponent implements OnInit {

  tests = [
    'It’s very cold in here. Oh, I ... the window.',
    'Try this dress! I’m sure it ... you.',
    'I’m thirsty. I think I ... a glass of water.',
    'The working day has already started. ... type her report?',
    'There isn’t any juice left. I ... some.',
    'I’m sure it ... hot tomorrow.',
    'I promise I ... to the party without you.',
    'I promise I ... of your dog.',
    'I expect you ... the exam.',
    'It’s very cold today, so Tom ... on a winter coat.'
  ]
  items = [
    ['will close', 'close', 'am closing'],
    ['will suit', 'is going to suit', 'suits'],
    ['am going to have', 'will have', 'am having'],
    ['Is she going to', 'Does she', 'Will she'],
    ['get', 'will get', 'am getting'],
    ['is being', 'is', 'will be'],
    ['don`t go', 'won`t go', 'not go'],
    ['will take care', 'am going to take care', 'am taking care'],
    ['will pass', 'are passing', 'are going to pass'],
    ['is going to put', 'is putting', 'will put']
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
    this.http.post<{ correct: string }>('http://127.0.0.1:5000/checkTestsAnswers', {future_simple: this.answers})
      .subscribe((res) => (
          this.correctAnswers = res),
        error => {
          console.warn(error)
        })
  }


}
