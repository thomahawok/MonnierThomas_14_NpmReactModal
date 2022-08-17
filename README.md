# npmreactmodal

Responsive modal dialog component for React.

## Installation

To install, you can use [npm](https://npmjs.org/) :

    $ npm install npmreactmodal

  - Use `<Modal>` tag inside your React app.

## Exemple

  - [Demo](https://thomahawok-p14-wealthhealth.netlify.app/)

```jsx
import { Modal, useModal } from 'npmreactmodal'
import React from 'react'
export default function Form() {
  window.React = React
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
      <Modal isShowing={isShowing} hide={toggle} />
    </main>
  )
}
```

