import React from 'react'
import * as fiery from 'fiery'
import { firebase } from './firebase'
import AdminPanel from './adminPanel'

export class AuthRequired extends React.Component {
  render() {
    return (
      <fiery.Auth>
        {authState =>
          fiery.unwrap(authState, {
            loading: () => <div>Loading authentication state...</div>,
            error: () => <h1>ERROR!</h1>,
            completed: user => {
              if (user) {
                return <AdminPanel />
              } else {
                return (
                  <div>
                    You must sign in to continue:{' '}
                    <button onClick={authenticateWithGoogle}>
                      Sign in with Google
                    </button>
                  </div>
                )
              }
            }
          })
        }
      </fiery.Auth>
    )
  }
}

function authenticateWithGoogle() {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
}
