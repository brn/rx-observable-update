# What's this?

Baconjs Bacon.update like function for Rxjs v5

## install

**npm**

```
npm install rx-observable-update --save
```

**jspm**

If you use commonjs module resolution.

```
jspm install npm:rx-observable-update -o "{main: 'commonjs/index.js'}"
```

If you use systemjs module resolution.

```
jspm install npm:rx-observable-update -o "{main: 'system/index.js'}"
```

**For typescript user**

Set paths options for tsconfig as like following.

```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "rx-observable-update": ["jspm_packages/npm/rx-observable-update<your version>/index.ts"]
    }
  }
}
```

After set paths options like above, you can import like following.

```
import update from 'rx-observable-update';
```

## Usage

Like baconjs update function,

```
import {
  Subject
} from 'rxjs/Rx';
import update from 'rx-observable-update';


const source1 = new Subject();
const source2 = new Subject();
const source3 = new Subject();

update(
  1,
  source1, (oldValue, newValue) => {return oldValue + newValue},
  source2, (oldValue, newValue) => {return oldValue + newValue},
  source3, (oldValue, newValue) => {return oldValue + newValue},
).subscribe(value => {
  console.log(value);
});

source1.next(2);
source2.next(3);
source3.next(4);

// Output 3, 6, 10
```
