import React from 'react'
import ReactDom from 'react-dom'

import Hello from './component/hello'
import Router from './component/router'

ReactDom.render(
    <Hello name="Rudy" />,
    window.document.getElementById('formation-react')
)