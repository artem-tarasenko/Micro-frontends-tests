## React Module Federation with shared state (Recoil.js)

In this example, state management library Recoil.js provide state data to other MFE applications. There are 3 parts:
- Root application
- Source application
- Consumer application

#### Source app
This app contains Recoil lib, setup "State", shows current "State" values and provide UI to change it. Via WP5 it exposes the "State" and Recoil lib to other apps.

#### Consumer app
This app imports remote "State" and Recoil.js from *Source app* and then use it to change the state.

#### Root app
Root app provides basic navigation between MFE modules. It also import remote "State" in order to render it's value in UI shared between MFE modules (to see changes made in the Consumer app applied).

### Run application

Run commands in each folder (separate appllication)

```bash
npm ci
```

```bash
npm run serve
```

Open `localhost:3000` to see root application

Other apps:
`localhost:3001` - Source app
`localhost:3002` - Consumer app

### Docker

Run command from the `react-wp5-share` dir

```bash
docker-compose up
```

#### Things to note

1. SCSS stylesheet for the exposed component should be imported in that component. Styles applied to that exposed component that were imported somewhere in parent components will not be exported in the bundle. Make sense, but still a reminder.
2. CSS styles must not have a broad class names in it to prevent styles overlaying. 