## React Micro-frontends (MFE) examples

Each folder is one example based on several apps, each could be started with Docker:
```bash
docker-compose up
```
or follow readme instructions to start apps separately.

#### With Webpack5 Module Federation

- `React-wp5-routing` - Basic routing example with manual navigation
- `React-wp5-routing-extended` - A step further with routing. In this example navigation is built dynamically with data prvoded by MFEs.

- `React-wp5-share` - Sharing state from one MFE across others with Recoil.js state management lib
- `React-wp5-secured-routes` - An example of secured routes (authentication required) loading remote MFEs.
- `React-wp5-dymanic-source` - in progress...

#### Single-SPA

- `single-spa-sharign-state` - A set of MFEs sharing state/data with Root app via different approaches