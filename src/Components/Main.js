import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
// import {removePost} from '../redux/actions'
import Single from './Single'

class Main extends Component {
  // constructor() {
  //   super()
  // }

  state = { loading: true}

  componentDidMount() {
    // this.props.removePost(1)
    this.props.startLoadingPost().then(() => {
      this.setState({loading: false})
    })
    this.props.startLoadingComment()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps)
  //   console.log(prevState.posts)
  //   console.log(this.state.posts)
  // }

  // removePhoto(postRemoved) {
  //   console.log(postRemoved.description)
  //   this.setState((state) => ({
  //     posts: state.posts.filter(post => post !== postRemoved)
  //   }))
  // }
  //
  // addPhoto(postSubmitted) {
  //   this.setState(state => ({
  //     posts: state.posts.concat([postSubmitted])
  //   }))
  // }

  render() {
    console.log(this.props)
    return (
      <div>
          <h1>
            <Link to="/"> Photowall </Link>
          </h1>
          <Route exact path = "/" render={() => (
            <div>
              <PhotoWall {...this.props}/>
            </div>
          )}/>
          <Route path = "/AddPhoto" render={({history}) => (
            <AddPhoto {...this.props} />
          )}/>
          <Route path = "/single/:id" render={(params) => (
              <Single loading={this.state.loading} {...this.props} {...params}/>
          )}/>
      </div>
    )
  }
}

export default Main
