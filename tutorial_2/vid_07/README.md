[Video 7](https://egghead.io/lessons/javascript-redux-filtering-redux-state-with-react-router-params)

The video references these files.

<pre>
example_app
├──<strong>devServer.js</strong>
└── src
    ├── components
    |   ├──<strong>Root.js</strong>
    |   ├──<strong>App.js</strong>
    |   └──<strong>VisibleTodoList.js</strong>
    └── reducers
        └──<strong>index.js</strong>
    
</pre>

### Notes

This lesson fixes the previous bug created during the lesson in video six. 

The fix is implemented with React Router's special prop called 'params'.

React's params prop allows App.js to pass the filter param from the URL to the VisibleTodoList component as a filter prop. Since VisibleTodoList now gets filter from its props and not from the state, the visibilityFilter reducer is no longer needed and is deleted.

Since the data required to render the view is independent of the data needed to render the todo list, and because there is no need for record of which view is requested, it makes sense to delegate control of visibilityFilter to the React Router while leaving Redux to manage the todos.
