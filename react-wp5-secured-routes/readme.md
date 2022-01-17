## React Module Federation with secured routes

In this example, root applications has secured routes to load MFE modules. The example contains root app and a couple of simple MFE applications:
- Root application
- Reports app
- Customers app

#### Reports and Customers apps
Those apps are simple modules created for the sake of loading some MFEs to the root app.

#### Root app
Root app has a routing lib that implements secured routes, specifically - require auth for every page of the app.

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
`localhost:3001` - Customers app
`localhost:3002` - Reporss app

### Docker

```bash
docker-compose up
```

#### Things to note
The whole example shows how secured routes could be combined with remote modules, while in fact it's a task for routing, not MFE. Still, it work without any problems if needed. 