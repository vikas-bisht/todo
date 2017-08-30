import { Injectable } from '@angular/core';

import { todo } from './todo'
import { mywork } from './mock-todo'

@Injectable()

export class todoservice{
  getwork(): Promise<todo[]> {
    return Promise.resolve(mywork);
  }
}
