import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-articles-test-form',
  templateUrl: './articles-test-form.component.html',
  styleUrls: ['./articles-test-form.component.scss']
})
export class ArticlesTestFormComponent implements OnInit {
  tests = [
    'In ... end we decided not to go to the cinema but to watch television.',
    'It is important sometimes to stop and look around you at all the wonderful things ... .',
    'I want to go to the cinema to see a film about ... and the French.',
    'The interesting thing about ... is all the roads that they built in Britain.',
    'My friend likes to eat ... .',
    'My father is ... .',
    'There are ... and toys on the floor.',
    'Could you give me ... of paper?',
    'We celebrate New Year on ... of December.',
    'The Queen of Great Britain is not ... .'
  ]
  items = [
    ['the', 'an', 'this'],
    ['in the nature', 'in nature', 'nature'],
    ['a France', 'France', 'the France'],
    ['the Romans', 'a Romans', 'Romans'],
    ['fish', 'the fish', 'a fish'],
    ['an engineer', 'the engineer', 'engineer'],
    ['a books', 'books', 'the books'],
    ['sheet', 'the sheet', 'a sheet'],
    ['the 31st', '31st', 'a 31st'],
    ['the absolute', 'absolute', 'a absolute']
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
    this.http.post<{ correct: string }>('http://127.0.0.1:5000/checkTestsAnswers', {articles: this.answers})
      .subscribe((res) => (
          this.correctAnswers = res),
        error => {
          console.warn(error)
        })
  }

}
