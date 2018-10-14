import React from 'react'
import * as fiery from 'fiery'
import { firebase } from './firebase'
import WrappedAdminPanel from './adminPanel'

export default () => (
  <fiery.Auth>
    {authState =>
      fiery.unwrap(authState, {
        loading: () => <div>Loading authentication state...</div>,
        error: () => <h1>ERROR!</h1>,
        completed: user =>
          user ? (
            <WrappedAdminPanel />
          ) : (
            <div>
              You must sign in to continue:{' '}
              <button onClick={authenticateWithGoogle}>
                Sign in with Google
              </button>
            </div>
          )
      })
    }
  </fiery.Auth>
)

function authenticateWithGoogle() {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
}
