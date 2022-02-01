## Quick start

1.  Clone this repo using `git@github.com:WalidMsallem/task-manager.git`

```
$  git clone git@github.com:WalidMsallem/task-manager.git
```

2.  Move to the appropriate directory: `cd task-manager`.

```
$ cd task-manager
```

3.  Install frontend dependencies and run the project.

```
$ yarn install
$ yarn serve
```

_At this point the frontend will run under `http://localhost:4000`._

Now you're ready to rumble!

## Demo

Link of the demo on vercel :

[Demo here](https://task-manager-lilac.vercel.app/)

## General overview

This project provides an interface to manage Facilities with a shema of :

```
{
id : number ;
voice : string ;
text: string ;
}
```

So we can get the data from the mocky API, then add, modify or delete, and return the new list to the same API.

"https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

## Test

### End to end Test with Cypress

Please make sure that the project is running on port `4000. `
Open the terminal and run the project:

```
$  yarn serve
```

Then open another terminal and run this command

```
$  yarn test:e2e
```

### Unit testing and snapshot testing

```
$  yarn test:unit
```

## Contributor

Developpeur : Walid M'sallem ( Full stack developpeur )
Contact : walidmsallem@gmail.com
