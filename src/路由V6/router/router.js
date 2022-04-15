import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Center from '../components/Center'
import Cinema from '../components/Cinema'
import Comingsoon from '../components/Comingsoon'
import Detail from '../components/Detail'
import Film from '../components/Film'
import NotFound from '../components/NotFound'
import Nowplaying from '../components/Nowplaying'
import Redirect from './Redirect'

function MRouter() {
    return (
        <Routes>
            {/* <Route index element={<Film />} /> */}
            <Route path='/film' element={<Film />}>
                {/* <Route index element={<Nowplaying />} /> */}
                <Route path='' element={<Redirect to="/film/nowplaying" />} />
                <Route path='/film/nowplaying' element={<Nowplaying />} />
                <Route path='/film/comingsoon' element={<Comingsoon />} />
            </Route >
            <Route path='/cinema' element={<Cinema />} />
            <Route path='/center' element={<Center />} />
            <Route path='/detail/:id' element={<Detail />} />

            {/* <Route path='*' element={<Navigate to="/film" />} /> */}
            <Route path='/' element={<Redirect to="/film" />} />
            <Route path='*' element={<NotFound />} />

        </Routes>

    )
}

export default MRouter
