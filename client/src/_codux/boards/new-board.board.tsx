import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => <div>hello
        <h1></h1></div>,
    isSnippet: true,
});
