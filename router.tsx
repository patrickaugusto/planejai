import { createBrowserRouter } from 'react-router-dom'
import { Button } from './src/components/shared/Button'
import { PiggyBank } from 'lucide-react'
import { RootLayout } from './src/components/layout/RootLayout'

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: (
                    <>
                        <h1>Formulario de Simulação</h1>
                        <Button variant='primary' icon={PiggyBank}>Clique Aqui</Button>
                    </>
                )
            },
            {
                path: '/resultado',
                element: <h1>Resultado de Simulação</h1>
            },
            {
                path: '/historico',
                element: <h1>Historico de Simulação</h1>
            },
        ]
    }
])