import React from 'react'
import styles from '../style.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PropTypes from 'prop-types'

class Item extends React.Component {
  state = {
    copied: false
  }

  render() {
    const { item, onCopy } = this.props
    if (!item) return <div>No Item!</div>

    const parsedName = item.parsedName || item.name

    return (
      <ul className={styles.item}>
        <li
          className={styles.itemName}
          dangerouslySetInnerHTML={{ __html: parsedName }}
        />
        <CopyToClipboard text={item.art} onCopy={onCopy}>
          <li className={styles.itemArt}>{item.art}</li>
        </CopyToClipboard>
      </ul>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
