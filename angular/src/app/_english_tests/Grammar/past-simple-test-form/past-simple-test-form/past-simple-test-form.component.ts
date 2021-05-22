import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-past-simple-test-form',
  templateUrl: './past-simple-test-form.component.html',
  styleUrls: ['./past-simple-test-form.component.scss']
})
export class PastSimpleTestFormComponent implements OnInit {

  tests = [
    'He never ... long distances when he was a child.',
    'We ... a nice time at seaside last summer.',
    'How much time ... in Germany last month.',
    'My mother was very tired, so she ... to bed early last night',
    'The film was boring. I ... it.',
    'When ... your new garage?',
    'We ... last night due to the nasty weather.',
    'My grandfather ... violin very well when he was young.',
    '... any museums when you were in England?',
    'I ... when I was getting off the bus.'
  ]
  items = [
    ['runned', 'ran', 'didn`t run'],
    ['had', 'did have', 'haved'],
    ['did you spended', 'did you spent', 'did you spend'],
    ['went', 'go', 'did go'],
    ['enjoy', 'didn`t enjoy', 'didn`t enjoyed'],
    ['did you built', 'did you build', 'you built'],
    ['didn`t went out', 'did go out', 'didn`t go out'],
    ['can play', 'could play', 'could played'],
    ['Did you visited', 'Did you visit', 'Visited you'],
    ['did slip', 'slipped', 'Sliped']
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
    this.http.post<{ correct: string }>('http://127.0.0.1:5000/checkTestsAnswers', {past_simple: this.answers})
      .subscribe((res) => (
          this.correctAnswers = res),
        error => {
          console.warn(error)
        })
  }

}
