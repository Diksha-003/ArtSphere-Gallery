import React from 'react';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { AdminPrivateRoute, PrivateRoute } from './components/PrivateRoute';
import { RedirectIfLoggedIn } from './components/RedirectIfLoggedIn'; 
import { AdminLogin } from './components/AdminLogin';
import { AdminRedirectIfLoggedIn } from './components/AdminRedirectIfLoggedIn';
import { UsersList } from './components/UserDetails';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { EditOrderDetails } from './components/EditOrderList';
import { ContactUs } from './components/ContactUs'
import Artist from './components/ArtistData';
import ArtistRegistration from './components/ArtistRegistration';
import ArtistProfile from './components/ArtistProfile';
import { ArtistList } from './components/ArtistDetails';
import Profile from './components/Profile';
import AdminDashboard from './admin/dashboard';
import Collections from './components/Collections';
import Exhibition from './components/Exhibition';
import { DeletedUsersList } from './components/DeletedUsers';
import { DeletedArtistList } from './components/DeletedArtistList';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/log-in' element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} />
        <Route path="/artist-register" element={<ArtistRegistration />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/admin-log-in' element={<AdminRedirectIfLoggedIn><AdminLogin /></AdminRedirectIfLoggedIn>} />
        <Route path='/admin-dashboard' element={<AdminPrivateRoute><AdminDashboard /></AdminPrivateRoute>} />
        <Route path='/user-details' element={<AdminPrivateRoute><UsersList /></AdminPrivateRoute>} />
        <Route path='/about-us' element={<AboutUs></AboutUs>} />

        <Route path='/artist-details' element={<Artist></Artist>} />

        <Route path='/user-profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path='/artist-profile' element={<PrivateRoute><ArtistProfile /></PrivateRoute>} />
        
        <Route path='/exhibition' element={<Exhibition />} />

        <Route path='/collections' element={<Collections />} />
       
        <Route path='/artist-list' element={<AdminPrivateRoute><ArtistList /></AdminPrivateRoute>} />
        <Route path='/exhibition' element={<PrivateRoute><Exhibition /></PrivateRoute>} />

        <Route path='/deleted-user-list' element={<AdminPrivateRoute><DeletedUsersList /></AdminPrivateRoute>} />

        <Route path='/deleted-artist-list' element={<AdminPrivateRoute><DeletedArtistList /> </AdminPrivateRoute>} />

        <Route path='/edit/:id_no' element={<EditOrderDetails></EditOrderDetails>} />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
