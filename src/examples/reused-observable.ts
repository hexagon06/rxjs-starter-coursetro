import { Observable } from 'rxjs/Observable';
import { additem } from '../dom-utils';

export function reusedExample() {
    const observable = Observable.create((observer: any) => {
        observer.next('testing 1');
        observer.next('testing 2');
        observer.next('testing 3');
        // observer.complete();
        observer.next('not sending');
      });

    additem('before attaching');

    const obs = observable.subscribe(
        additem,
        additem,
        () => additem('end of transmission'),
      );

    additem('after attaching');

    const obs2 = observable.subscribe(
        (value: any) => additem('2: ' + value),
        additem,
        () => additem('end of transmission'),
      );
}
