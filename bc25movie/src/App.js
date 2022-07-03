import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { Suspense } from "react";
import { renderRoutes } from "./routes/";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {/* HomeTemplate */}
          {/* <Route path="" element={<HomeTemplate />}> */}
          {/* HomePage */}
          {/* <Route path="" element={<HomePage />} /> */}
          {/* AboutPage */}
          {/* <Route path="about" element={<About />} /> */}
          {/* ListMoviePage */}
          {/* <Route path="list-movie" element={<ListMoviePage />} /> */}
          {/* HooksPage */}
          {/* <Route path="hooks" element={<HooksPage />} /> */}
          {/* HocPage */}
          {/* <Route path="hoc" element={<HocPage />} /> */}
          {/* Detail Movie */}
          {/* <Route path="/detail/:id" element={<DetailMovie />} /> */}
          {/* </Route> */}

          {/* Redirect to admin/dashboard */}
          <Route
            path="admin"
            element={<Navigate replace to="/admin/dashboard" />}
          />

          {/* AdminTemplate */}
          {/* <Route path="admin" element={<AdminTemplate />}> */}
          {/* <Route path="dashboard" element={<DashboardPage />} />
          <Route path="add-user" element={<AddUserPage />} />
          <Route path="add-movie" element={<AddMoviePage />} /> */}
          {renderRoutes()}
          {/* </Route> */}
          {/* <Route path="auth" element={<AuthPage />} /> */}

          {/* PageNotFound */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
