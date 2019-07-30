import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';
import {
  map,
} from 'rxjs/operators';


export interface State {
  name: string;
  population: string;
}


@Component({
  selector: 'demo-autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent implements OnInit {
  
  public stateCtrl = new FormControl(null, [Validators.required]);
  
  public filteredStates!: Observable<State[]>;
  public states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
    },
    {
      name: 'Alabama',
      population: '3.29M',
    },
    {
      name: 'Alaska',
      population: '1.341M',
    },
    {
      name: 'California',
      population: '39.14M',
    },
    {
      name: 'Florida',
      population: '20.27M',
    },
    {
      name: 'Texas',
      population: '27.47M',
    },
    {
      name: 'Arizona',
      population: '24.112M',
    },
    {
      name: 'Arkansas 2',
      population: '2.978M',
    },
    {
      name: 'Alabama 2',
      population: '3.29M',
    },
    {
      name: 'Alaska 2',
      population: '1.341M',
    },
    {
      name: 'California 2',
      population: '39.14M',
    },
    {
      name: 'Florida 2',
      population: '20.27M',
    },
    {
      name: 'Texas 2',
      population: '27.47M',
    },
    {
      name: 'Arizona 2',
      population: '24.112M',
    },
    {
      name: 'Arkansas 3',
      population: '2.978M',
    },
    {
      name: 'Alabama 3',
      population: '3.29M',
    },
    {
      name: 'Alaska 3',
      population: '1.341M',
    },
    {
      name: 'California 3',
      population: '39.14M',
    },
    {
      name: 'Florida 3',
      population: '20.27M',
    },
    {
      name: 'Texas 3',
      population: '27.47M',
    },
    {
      name: 'Arizona 3',
      population: '24.112M',
    },
  ];
  public myQuery$: BehaviorSubject<string> = new BehaviorSubject('');
  public fakeAsync = false;

  public comparator: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

  constructor() {
    this.filteredStates = this.myQuery$
      .pipe(
        map((state) => {
          const val = state ? this.filterStates(state) : [];
          console.log('Demo: in pipe: ', state, val);
          return val;
        }),
      );
  }

  public ngOnInit() {
  }


  private filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    const r = this.states.filter((state) => state.name.toLowerCase().indexOf(filterValue) === 0);
    return r;
  }

  public myFormatUIFn = (v: any): string => v.name;

  public compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.text === f2.text;
  }
  public compareByReference(f1: any, f2: any) {
    return f1 === f2;
  }

  public panelChange(e: boolean): void {
    console.log(`DEMO: Panel ${e ? 'opened' : 'closed'}`);
  }

  public isSelected(v) {
    console.log('DEMO: optionSelected: ', v);
  }

  public isDeselected(v) {
    console.log('DEMO: optionDeselected: ', v);
  }

  public log(v: any): void {
    console.log('DEMO: Form value: ', v);
  }

  public queryHasChanged(v) {
    console.log('DEMO: query string changed: ', v);
    this.myQuery$.next(v);
  }

  public duplicate(e) {
    console.log('DEMO: Duplicate selection: ', e);
  }
}