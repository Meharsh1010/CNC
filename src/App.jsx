import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CoursesProvider } from './context/CoursesContext';
import { EnquiryProvider } from './context/EnquiryContext';
import { BlogProvider } from './context/BlogContext';
import { TestimonialsProvider } from './context/TestimonialsContext';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import { CoursesList } from './pages/CoursesList';
import { CourseDetail } from './pages/CourseDetail';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';
import { Victory } from './pages/Victory';
import { Login } from './pages/Login';
import { RackRental } from './pages/RackRental';
import { ECertificate } from './pages/ECertificate';
import './styles/global.css';
import './styles/variables.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <CoursesProvider>
          <EnquiryProvider>
            <BlogProvider>
              <TestimonialsProvider>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Navigation />
                  <main style={{ flex: 1 }}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/courses" element={<CoursesList />} />
                      <Route path="/courses/:courseId" element={<CourseDetail />} />
                      <Route path="/rack-rental" element={<RackRental />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogDetail />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/victory" element={<Victory />} />
                      <Route path="/ecertificate" element={<ECertificate />} />
                      <Route path="/login" element={<Login />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </TestimonialsProvider>
            </BlogProvider>
          </EnquiryProvider>
        </CoursesProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
