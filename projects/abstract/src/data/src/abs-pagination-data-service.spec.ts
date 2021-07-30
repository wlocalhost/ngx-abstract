import {Observable, of} from 'rxjs';
import {AbsPaginationDataService} from './abs-pagination-data-service';

interface MyData {
  id: number;
}

class TestClass extends AbsPaginationDataService<MyData> {
  pageSize = 30;
}

function obs(page: number): Observable<MyData[]> {
  return of([]);
}

describe('AbsPaginationDataService', () => {
  it('should create an instance', () => {
    expect(new TestClass(obs)).toBeTruthy();
  });
});
