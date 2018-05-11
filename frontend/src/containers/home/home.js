import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sampleAction } from '../../redux/actions'
import logo from './logo.svg'
import css from './home.css'

const mapStateToProps = state => {
  return {
    content: state.sample.sampleKey
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateContent: text => dispatch(sampleAction(text))
  }
}

export class Home extends Component {
  componentDidMount() {
    this.props.updateContent(
      'To get started, edit this content in src/containers/home.'
    )
  }

  render() {
    return (
      <React.Fragment>
        <header className={css.header}>
          <img src={logo} className={css.logo} alt="logo" />
          <h1 className={css.title}>Welcome to R3CSS</h1>
        </header>
        <p className={css.intro}>{this.props.content}</p>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
