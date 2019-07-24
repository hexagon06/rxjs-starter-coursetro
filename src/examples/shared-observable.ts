import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';

export function sharedExample() {
  const observable = Observable.create((observer: any) => {
    observer.next('testing 1');
    observer.next('testing 2');
    // setInterval(() => {
    //   observer.next('intermission');
    // }, 2000);
    observer.next('testing 3');
    // observer.complete();
    observer.next('not sending');
  }).share();

  additem('before attaching');

  const obs = observable.subscribe(additem, additem, () =>
    additem('end of transmission'),
  );

  additem('after attaching');

}
