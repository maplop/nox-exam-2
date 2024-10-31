import { Navigate, Route, Routes } from 'react-router-dom'
import routes from './routes'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cover-page" />} />
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  )
}
export default MainRoutes