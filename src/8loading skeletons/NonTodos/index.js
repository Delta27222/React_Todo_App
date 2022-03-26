import React from "react";
import './NonTodos.css'


function NonTodos(){
    return(
        <div className="container_error2">
            <h3 className="tittle2">Your To Do list is empty!!</h3>
            <img className="img2" src="https://img.icons8.com/emoji/96/000000/grinning-face-with-big-eyes--v2.png"/>
        </div>
    );
}

function CreateNewTodo(){
    return(
        <div className="container_create2">
            <p>Create a new one, here!</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACD0lEQVRoge3YP2hTURiG8V9FwYIiLoIILhb/IOrgJCii4OygdNJBXdwEFVzFSXERnEQHcXBR6qKjHVyUokXcWxREUFCQVBtsbRxOg2maNLk5NzkdzgMfGS58531uOOd+95LJZDKZTCaTwTjeYUfqILHUFus7TiTOEkWtoeZxLW2c3qm1qMcYThmqF1qJ1DCJ7QlzFaadSA3fcDRdtGKsJFJDFReSpStAJ5F63cO6bpsOlR4zsBGHcBg7sRVbFn83FegzjlHhqB4Ym3EJE5jT/Z3vVNPYNwiBETzE7xLDN1cFp/olMIzrmO2jQGMt4CbWlCmxH1MDEmiuZ8IejOY0ZhJJ1OtNrMQ54S9OKREtclK5p1Gv9UKxI3wJBwxuU7erBdwQsdnX40NiiRlhb0ZxJ7HEtHBKRrELfxJKvBJGm46s7XD9lgKDmyA9iffCc2YKn/FDeDpXhAmgG+7isvAWGcVe3R21H3EbR3T3ltepXxXnY8M38mCFxRbwHMcUn6BXkvgiTM2lsQG/2iz2GgcjereTmMC2iL4tOdNioTlcFT+0tZJ4JBzzpfOkaaEKjpfUu7HvPK6U1HcZQ/jasNis8KZXFvW+ff9At8fSu3a25P4vhU+mIyX3XcZF/yWe9nuxfnJfkPiL3YmzRDEuiIylDhLLJ0FkNHWQWKqCSFfD2mqh1dD4Fj+F77CZTCazuvgHho30Dv1lCykAAAAASUVORK5CYII="/>
        </div>
    );
}

export { NonTodos, CreateNewTodo };