## Redux: Simplifying the Arrow Functions

From [Video 1](https://egghead.io/lessons/javascript-redux-simplifying-the-arrow-functions).

The video references these files.

<pre>
example_app
└── src
    ├── actions
    │   └── <strong>index.js</strong>
    └── components
        ├── <strong>FilterLink.js</strong>
        └── <strong>VisibleTodoList.js</strong>
        
</pre>

### Notes

#### Arrow Functions Explained

This code,

```javascript
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        id: (nextTodoId++).toString(),
        text,
    };
}
```

is the same as this code.

```javascript
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: (nextTodoId++).toString(),
        text,
    };
};
```
#### Arrow Functions Simplified with Object Expression

This code,

```javascript
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: (nextTodoId++).toString(),
        text,
    };
};
```
is the same as this code.

```javascript
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: (nextTodoId++).toString(),
    text,
});
```

*- More [information on object expression](http://www.benmvp.com/learning-es6-enhanced-object-literals/) with ES6.*

#### Simplfying With Concise Method Notation

This code,

```javascript
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick() {
            dispatch(setVisibilityFilter(ownProps.filter));
        },
    };
};
```

is the same as this code.

```javascript
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter));
    },
});
```
Concise method notation is available when a function is defined inside an object.

*- More [information on concise method notation](http://websnippet.io/articles/javascript/javascript-concise-methods-es6#/)*
