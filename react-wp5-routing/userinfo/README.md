# react-webpack 5

There is an example from react-router docs of how to stich 2 sep apps with different routers as 1 app.

The idea is to have 1 regular html link to the second app. That app will have another instance of the Browser but with basepath param that will contain path that should be considered as a root (ie "/Settings"). With that, the second Browser's routes will not include that Settings path and work from that "page".

In MFE there is a problem using Browser inside another Browser so this approach is not entirely viable here.