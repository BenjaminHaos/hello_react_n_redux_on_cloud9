[Video 4](https://egghead.io/lessons/javascript-redux-refactoring-the-entry-point)

The video references these files.

<pre>
example_app
└── src
    ├── <strong>index.js</strong>
    ├── <strong>configureStore.js</strong>
    └── components
        └── <strong>Root.js</strong>
</pre>

### Notes

* This lesson refactors the entry point, ```src/index.js```, of the app.
    * Done by encapsulating:
        * The configuration, creation, and utility, of the store function.
            ```javascript
            import { createStore } from 'redux';
            import throttle from 'lodash/throttle';
            import todoApp from './reducers';
            import App from './components/App';
            import { loadState, saveState } from './localStorage';
            
            const persistedState = loadState();
            const store = createStore(
              todoApp,
              persistedState
            );
            
            store.subscribe(throttle(() => {
              saveState({
                todos: store.getState().todos,
              });
            }, 1000));

            ```
        * The root rendered elements.
            ```javascript
            render(
              <Provider store={store}>
                <App />
              </Provider>,
              document.getElementById('root')
            );
    
            ```
