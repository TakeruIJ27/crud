## CDI-BOILERPLATE

## Overview
<ol>
    <li>
        <a href="#structure">Structure</a>
    </li>
    <li>
        <a href="#what-this-is">What this is</a>
    </li>
    <li>
        <a href="#what-this-isnt">What this isn't</a>
    </li>
    <li>
        <a href="#get-started">Get Started</a>
    </li>
    <li>
        <a href="#deployment">Deployment</a>
    </li>
    <li>
        <a href="#resources">Resources</a>
    </li>
</ol>

### Structure
<pre>
├── src
│   ├── components
│   │   ├── Abstracts
│   │   │   ├── BreadCrumbs
│   │   │   │   ├── index.js
│   │   │   │   └── utils.js
│   │   │   ├── index.js
│   │   │   ├── Loader
│   │   │   │   └── index.js
│   │   │   ├── Loading
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── PrivateRoute
│   │   │   │   └── index.js
│   │   │   ├── Routes
│   │   │   │   └── index.js
│   │   │   └── Sidebar
│   │   │       ├── index.js
│   │   │       └── styles.js
│   │   └── Base
│   │       ├── index.js
│   │       ├── Link
│   │       │   └── index.js
│   │       └── Logo
│   │           └── index.js
│   ├── containers
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── auth
│   │   │   ├── actions.js
│   │   │   ├── index.js
│   │   │   ├── login.js
│   │   │   ├── reducer.js
│   │   │   └── sagas.js
│   │   ├── DefaultLayout
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── Pages
│   │       ├── helloWorld
│   │       │   └── index.js
│   │       └── pending
│   │           └── index.js
│   ├── images
│   │   └── logo.svg
│   ├── index.js
│   ├── navList.js
│   ├── reducers.js
│   ├── routes.js
│   ├── sagas.js
│   ├── serviceWorker.js
│   ├── setupTests.js
│   ├── store.js
│   └── utils
│       ├── ApiService.js
│       ├── cookie.js
│       ├── formSerialize.js
│       └── history.js
</pre>

### What this is
Boilerplate.



### What this isn't
Theme.


### Get Started
<ol>
    <li><code>npm install</code></li>
    <li><code>npm start</code></li>
</ol>

<p>Username: <code>cdi-admin</code></p>
<p>Password: <code>secret</code></p>


### Deployment
<ol>
    <li><code>npm run build</code></li>
</ol>


## Resources
<ol>
    <li>
        <a href="https://github.com/facebook/create-react-app">Create React App</a>
    </li>
    <li>
        <a href="https://blueprintjs.com/docs/">Blueprint</a>
    </li>
</ol>
