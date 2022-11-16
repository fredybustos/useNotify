# useNotify 

useNotify is a component to easily display notifications. 

## Installation

This package is hosted on the github package functionality. We usually use to install npm package manager, it's the same with github package.

Install from the command line:
```bash
  npm install @fredybustos/usenotify@1.0.6 // version
  npx install @fredybustos/usenotify@1.0.6 // version
```

or install via package.json:
```bash
  "@fredybustos/usenotify": "1.0.6" // version
```

## Usage

There are two ways to use it, as a custom `useNotify` hook or as a `Notify` component

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
  - It is **required** when used as a component, there are a few possibilities to choose from: `success | error | warning | information`

**Options**
  - duration: is the time the notification is displayed, default is `5000`
  - bgcolor: if you want to change the default bgcolor you can. The bgcolor depends on the `type` property.
  - color: change the text color.
  - position: it is possible to choose one of them: `top | topRight | topLeft | bottom | bottomRight | bottomLeft` by default is `top`
  - onClose: close notification and return `event`
  - component: change component styles by default.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License

[MIT LICENSE](../../main/LICENSE)
