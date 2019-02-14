import React from 'react'
import { func } from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Router from 'next/router'

import { isClient } from 'app/lib/func'

const query = gql`
  query CurrentUser {
    user: currentUserContext {
      uid
      name
      mail
    }
  }
`

let refetchedOnClient = false

const CurrentUserContainer = ({ children }) => (
  <Query query={ query }>
    { ({ ...result, loading, refetch, data }) => {
      // Makes sure current user data is accurate by refetching
      // Then, if user isn't logged in redirect her to "/"

      if (!loading && isClient()) {
        if(!refetchedOnClient){
          refetchedOnClient = true
          refetch()
        } else if (data.user.uid === null){
            Router.replace("/")
        }
      }

      return children({ ...result, user: data.user })
    } }
  </Query>
)

CurrentUserContainer.propTypes = {
  children: func,
}

export default CurrentUserContainer
