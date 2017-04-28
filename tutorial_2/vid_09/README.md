[Video 9](https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation#/tab-transcript)

The video references these files.

<pre>
example_app
└── src
    ├── actions
    |   └──<strong>index.js</strong>
    └── components
        ├──<strong>TodoList.js</strong>
        └──<strong>VisibleTodoList.js</strong>
</pre>

### Notes

This lesson simplifies the mapDispatchToProps function in the VisibleTodoList component.

This code with two function,

```javascript
const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {   // When onTodoClick is called with an ID
    dispatch(toggleTodo(id)); // dispatch the toggleTodo action with this same ID.
  },
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

```

is simplified into this code with only one.

```javascript
const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }  // Configuration object.
)(TodoList));
```

If the argument(s) passed through the callback prop(s) are passed through in the same order to the action creator(s), you can simply pass a configuration object maping the names of the callback props to the corresponding action creator functions.
