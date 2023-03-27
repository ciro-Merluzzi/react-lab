import { createBrowserRouter } from 'react-router-dom'
import { Index } from './pages/index'
import { About } from './pages/about'

export const router = createBrowserRouter ([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }

    ])