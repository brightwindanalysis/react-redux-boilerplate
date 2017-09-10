import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GitHubComponent from './GitHubComponent.jsx'
import { repositoryClear, repositoryRequest } from './GitHubActions'

export function GitHub ({repositories, actions}) {
  return (
    <GitHubComponent
      repositories={repositories}
      onRequestRepositories={actions.repositoryRequest}
      onClearRepositories={actions.repositoryClear}
    />
  )
}

GitHub.propTypes = {
  repositories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    repositories: state.github.repositories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({repositoryRequest, repositoryClear}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GitHub)