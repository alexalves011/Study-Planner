import { TaskProvider } from './contexts/TaskContext'
import { ThemeProvider } from './contexts/ThemeContext'
import StudyPlannerPage from './pages/StudyPlannerPage'
import { store } from './Store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider>
      <TaskProvider>
        <StudyPlannerPage />
      </TaskProvider>
    </ThemeProvider>
    </Provider>
  )
}

export default App