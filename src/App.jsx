
import './App.css'
import Hookform from './Components/Hookform/Hookform'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/Reusableform/ReusableForm'
import Simpleform from './Components/Simpleform/Simpleform'

function App() {

  const handleSignupSubmit = data => {

    console.log('Sign up data', data)
  }

  const handleUpdateSubmit = data => {
    console.log('Update data', data)
  }


  return (
    <>
      {/* <Simpleform></Simpleform> */}

      {/* <RefForm></RefForm> */}

      {/* <Hookform></Hookform> */}

      <ReusableForm
        formtitle={'Sign Up'}
        handleSubmit={handleSignupSubmit}
      >
        <div> 

          <h2>Sign up</h2>
          <p>
            sign up now
          </p>
        </div>
      </ReusableForm>


      <ReusableForm
        formtitle={'Profile Update'}
        submitbtn={'Update'}
        handleSubmit={handleUpdateSubmit}>

          <div>
            <h2>Update Profile </h2>
            <p>Update Profile Now</p>
          </div>
        </ReusableForm>
    </>
  )
}

export default App
