import React from 'react'
import Item from './Item'
import styles from '../style.scss'
import fetch from 'isomorphic-fetch'

const API =
  'https://raw.githubusercontent.com/MohawkApps/Textables/master/resources/content.json'

class Textables extends React.Component {
  state = {
    faces: [],
    searchedFaces: [],
    search: '',
    copied: false
  }
  componentDidMount = async () => {
    let options = {
      method: 'GET',
      mode: 'cors',
      header: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }
    const req = await fetch(API, options)
    const res = await req.json()
    const faces = res.reduce((acc, curr) => {
      const { items } = curr
      acc.push(...items)
      return acc
    }, [])
    this.setState({ faces, searchedFaces: faces.slice() })
  }

  componentWillUpdate = (nextProps, nextState) => {
    if (nextState.copied) {
      this.timer = setTimeout(() => {
        this.setState({ copied: false })
      }, 2000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  onCopy = () => {
    this.setState({ copied: true })
  }

  search = search => {
    const faces = this.state.faces.slice()

    const searchedFaces = faces.filter(face => {
      const name = face.name.toLowerCase()
      const searchTerm = new RegExp(search.trim().toLowerCase(), 'ig')

      const matched = name.match(searchTerm)

      if (matched) {
        const parsedName = face.name.replace(
          searchTerm,
          `<span class="${styles.test}">${search.trim()}</span>`
        )
        face.parsedName = parsedName
        return true
      }
    })

    this.setState({ search, searchedFaces })
  }

  render() {
    if (this.state.faces.length < 1) return <div>Loading...</div>

    const faces = this.state.searchedFaces.map((item, i) => (
      <Item key={i} item={item} onCopy={this.onCopy} />
    ))

    return (
      <React.Fragment>
        {this.state.copied ? (
          <span className={styles.copied}>Copied!</span>
        ) : null}
        <div
          style={{
            fontSize: '2em'
          }}
        >
          ♥‿♥ Click on a Face to copy it ( ¬‿¬)
        </div>
        <input
          type="search"
          placeholder="Find a ಠ‿ಠ by name.."
          className={styles.input}
          onChange={e => this.search(e.target.value)}
          value={this.state.search}
        />
        <div className={styles.textablesContainer}>{faces}</div>
      </React.Fragment>
    )
  }
}

export default Textables
