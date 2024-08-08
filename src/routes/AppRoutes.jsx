import HomePage from './../Pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import AboutUsPage from './../Pages/AboutUsPage/AboutUsPage'
import ClubsPage from './../Pages/ClubsPage.jsx/ClubsPage'
import ClubDetailsPage from './../Pages/ClubDetailsPage/ClubDetailsPage'
import NotFoundPage from './../Pages/NotFoundPage/NotFoundPage'

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/clubs' element={<ClubsPage />} />
                <Route path='/clubs/:id' element={<ClubDetailsPage />} />

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes