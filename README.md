# modalexp

Simple modal React React component created for OpenClassrooms Project.

## Installation

```
$ npm i modalexp

```

## Usage

Inside the component where you want to use the modal, import useState and the modal component with these lines

```
import { useState } from "react";
import Modal from "modalexp";

```

Create a state that will be used to trigger the modal. i.e. :

```
const [displayModal, setDisplayModal] = useState(false);

```

Use the state as a condition to the modal's display (if the state is true, then the modal shows up) and add props to the component

The available props are :

* "title" for the modal header,
* "text" for the modal text, 
* "showModal" for the state used to display the modal,

You can then add the component to your code as follows, i.e :

```
{displayModal && (
    <Modal
        title="Employee Created!"
        text="Employee is created"
        showModal={setDisplayModal}
    />
)}

```