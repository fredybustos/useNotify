# useNotify

![notification](https://user-images.githubusercontent.com/9376106/202876862-a114f196-980f-4ae2-8324-569b965fecbe.gif)

**useNotify** is a component for easily displaying notifications. This package uses **React > 18** and **ReactDOM > 18**. [ReactDom 18](https://es.reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html) changed the rendering method of applications. You only need to update the render method.

```js
// Before
import { render } from 'react-dom';
render(<App tab="home" />, domElement);

// After
import { createRoot } from 'react-dom/client';
createRoot(domElement).render(<App tab="home" />)
```
## Installation

Use npm to install this package.

Install from the command line:

```
  npm i @fredybustos/usenotify
```
or

```
  npx i @fredybustos/usenotify
```

## Usage

There are two ways to use it: as a custom useNotify hook or as a Notify component.

As a custom hook:

```js
  import { useNotify } from "@fredybustos/usenotify"

  const App () => {
    const { notifySuccess, notifyError, notifyWarn, notifyInfo } = useNotify()

    const handleNotify = () => notifySuccess("Notification")

    // It is possible to add some properties to customize it.

    const handleNotify = () => {
      notifyError("Notification", {
        duration: 1000,
        bgcolor: #fff,
        color: #000,
        position: 'top'
        onClose: handleClose()
        component: ({ message, type, options }) => <CustomComponent>{message}</CustomComponent>
      })
    }

    return (
      <div>
        <button onClick={handleNotify}>Show notification</button>
      </div>
    )
  }  
```

As a component:
```js
  import { useState } from "react"
  import { Notify } from "@fredybustos/usenotify"

  const App () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Show notification</button>
        {isOpen && (
          <Notify message="Notification" type="success" />
          
          // with options

          <Notify 
            message="Notification"
            type="error" 
            options={{
              duration: 1000,
              bgcolor: #fff,
              color: #000,
              position: 'topRight'
              onClose: handleClose()
              component: ({ message, type, options }) => <CustomComponent>{message}</CustomComponent>
            }}
          />
        )}
      </div>
    )
  }  
```

## Properties

**Message**
  - Text to show in the notification when is displayed. **Required**

**Type**
  - It is **required** when used as a component. There are a few possibilities to choose from: `success | error | warning | information`

**Options**
  - **duration**: the time in milliseconds the notification is displayed. The default value is 5000.
  - **bgcolor**: change the background color if you want to override the default color. The background color depends on the `type` property.
  - **color**: change the text color.
  - **position**: choose one of the following positions: `top | topRight | topLeft | bottom | bottomRight | bottomLeft`. The default position is `top`
  - **onClose**: callback function triggered when the notification is closed, it receives an `event` parameter.
  - **component**: custom component to override the default styles.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License

[MIT LICENSE](../../main/LICENSE)
