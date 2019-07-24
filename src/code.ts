import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';

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

const obs = observable.subscribe(
  additem,
  additem,
  () => additem('end of transmission'),
);

additem('after attaching');

const obs2 = observable.subscribe(
  (value:any) => additem('2: '+value),
  additem,
  () => additem('end of transmission'),
);

// setTimeout(() => {
//   obs.unsubscribe();
// }, 6001);

function additem(value: any): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
