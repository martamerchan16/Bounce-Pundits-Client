import HomePage from './../Pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import AboutUsPage from './../Pages/AboutUsPage/AboutUsPage'
import ClubsPage from './../Pages/ClubsPage.jsx/ClubsPage'
import CreateClubPage from './../Pages/CreateClubPage/CreateClubPage'
import CreateReviewPage from './../Pages/CreateReviewPage/CreateReviewPage'
import EditClubPage from './../Pages/EditClubPage/EditClubPage'
import EditReviewPage from './../Pages/EditReviewPage/EditReviewPage'
import ClubDetailsPage from './../Pages/ClubDetailsPage/ClubDetailsPage'
import NotFoundPage from './../Pages/NotFoundPage/NotFoundPage'

const AppRoutes = () => {
    return (
        <div className="AppRoutes mt-5">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/clubs' element={<ClubsPage />} />
                <Route path='/clubs/:id' element={<ClubDetailsPage />} />
                <Route path='/clubs/create' element={<CreateClubPage />} />
                <Route path='/clubs/:id/review/create' element={<CreateReviewPage />} />
                <Route path='/clubs/edit/:id' element={<EditClubPage />} />
                <Route path='/clubs/:id/review/edit/:id' element={<EditReviewPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes