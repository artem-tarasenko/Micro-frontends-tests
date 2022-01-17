## React micro-frontend example with basic routing and shared libraries

This example shows basic navigation example and usage of libraries shared among MFE applications.

### Run application

Run commands in each folder (separate appllication)

```bash
npm ci
```

```bash
npm run serve
```

Open `localhost:4000` to see root application

Other apps:

`localhost:4001` - mealPlan
`localhost:4002` - workouts
`localhost:4003` - userinfo
`localhost:4100` - lib
`localhost:4011` - nav

### Docker

```bash
docker-compose up
```

## About this demo

![alt](diargam.jpg?raw=true "App1 diagram")

#### Routing

This app shows the basic example of navigation where root app does all the work by manually creating links for navigation, register routes for each MFE and mounts components on root app's pages.

Basically, Root app here for each MFE component has a page where it lazy loads a remote component and mounts it on a prepared page as a part of it.

If remote MFE need to have a submenu, it can contain links. Routes, however, should be registered in a root app. This subcomponent can be handled as a separate page or be mounted in a wrapping root page. It works, but the implementation's value is arguable.

#### Shared libraries

This app works with a shared libraries installed in a separate MFE and used across all other MFE including Root app. 

`lib` MFE expose:
- react
- react-dom
- react-router-dom
- styled components

Additional test should be done about the difference between "sharing" libs via webpack and exposing them.

#### Things to keep in mind

There are certain ways to share a dependency among several apps. This is beneficial in terms of loading bundles and for cases when 2 similar libraries cannot work together - it should only be 1 instance of it in the project.

On way is to use shared section of Module Federation plugin, other to use single source of libraries and load everithing from it.

##### Styled components

In order for this lib to work there are 3 options:

1. Install it in a MFE app, expose it and use across all other apps
2. List all dependencies in a WP5 plugin as shared and add `styled-components: {'singleton': true}`

```js
    shared: {
        ...deps,
        'styled-components': {
          singleton: true,
        },
    }
```

3. List `react` `react-dom` `styled-components` in a WP5 plugin as shared as shared singleton dependency

```js
    shared: {
        'styled-components': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        react: {
          singleton: true,
        },
    }
```

