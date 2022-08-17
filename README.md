# npmreactmodal

Responsive modal dialog component for React.

## Installation

To install, you can use [npm](https://npmjs.org/) :

    $ npm install npmreactmodal

  - Use `<Modal>` tag inside your React app.

## Exemple

  - [Demo](https://thomahawok-p14-wealthhealth.netlify.app/)

### In index.html file

  - add : `<div id="modal-root"></div>` 

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App</title>
  </head>
  <body>

    <div id="modal-root"></div>

    <div id="root"></div>
  </body>
</html>
}
```

### In your componenet : 

```jsx
import { Modal, useModal } from 'npmreactmodal'
import React from 'react'
export default function Form() {

  const { isShowing, toggle } = useModal()
  
  return (
    <main className="container">
      <h2 className="title">Create Employee</h2>
      <form className="form" onSubmit={handleSibmit}>
        (...)
         <button
            type="button"
            className="btn"
            onClick={toggle}
          >
            Save
          </button>
      </form>
      <Modal isShowing={isShowing} hide={toggle} text="your text here !/>
    </main>
  )
}
```

