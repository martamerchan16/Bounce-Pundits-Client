
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './Pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ClubsPage from './Pages/ClubsPage.jsx/ClubsPage';
import CreateClubPage from './Pages/CreateClubPage/CreateClubPage';
import CreateReviewPage from './Pages/CreateReviewPage/CreateReviewPage'
import EditClubPage from './Pages/EditClubPage/EditClubPage'
import EditReviewPage from './Pages/EditReviewPage/EditReviewPage'
import ClubDetailsPage from './Pages/ClubDetailsPage/ClubDetailsPage'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

function App() {

  return (

    <div className='App'>
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

export default App
