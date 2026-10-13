import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import LanguageProvider from './logic/i18n/LanguageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      {/* No startTransition around navigations, so useSlideNavigate's flushSync
          can update the DOM before the view transition's "after" snapshot. */}
      <BrowserRouter useTransitions={false}>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
