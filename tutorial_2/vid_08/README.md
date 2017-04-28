[Video 8](https://egghead.io/lessons/javascript-redux-using-withrouter-to-inject-the-params-into-connected-components#/tab-transcript)

The video references these files.

<pre>
example_app
└── src
    └── components
        ├──<strong>Root.js</strong>
        ├──<strong>App.js</strong>
        └──<strong>VisibleTodoList.js</strong>

</pre>

### Notes

This lesson explains using react-router's withRouter function to inject the params prop into VisibleTodoList. This allows for the params prop to be removed from the App.js component. This is useful when you need to read the current params somewhere deep in the component tree.