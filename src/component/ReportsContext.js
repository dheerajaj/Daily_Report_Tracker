import React, { createContext, useState } from 'react'
import ReportSubmissionForm from './pages/ReportSubmissionForm'
import ReportListPage from './pages/ReportListPage'

const ReportsContext = () => {
  const[formData,  setFormData] = useState()
    const create = createContext() 
  return (
    <create.Provider>
     <ReportSubmissionForm/>
     <ReportListPage/>
    </create.Provider>   
    
  )
}

export default ReportsContext