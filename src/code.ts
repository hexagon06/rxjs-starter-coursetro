import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';
import { header } from './dom-utils';
import { reusedExample } from './examples/reused-observable';
import { sharedExample } from './examples/shared-observable';

header('reused example', 2);
reusedExample();

header('shared example', 2);
sharedExample();
