import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class List extends Component {
  static propTypes = {
    loadingLabel: PropTypes.string.isRequired,
    pageCount: PropTypes.number,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  static defaultProps = {
    isFetching: false,
    loadingLabel: 'Loading...',
    items: [{
      name: 123
    }]
  }

  renderLoadMore() {
    const { isFetching, onLoadMoreClick } = this.props
    return (
      <button style={{ fontSize: '150%' }}
        onClick={onLoadMoreClick}
        disabled={isFetching}>
        {isFetching ? 'Loading...' : 'Load More'}
      </button>
    )
  }

  _renderItem(item, i) {
    return (
      <div key={i}>{item.name}</div>
    )
  }

  render() {
    const {
      isFetching,
      loadingLabel,
      items
    } = this.props
    const isEmpty = items.length === 0
    if (isEmpty && isFetching) {
      return <h2><i>{loadingLabel}</i></h2>
    }

    return (
      <div>
        {items.map(this._renderItem)}
      </div>
    )
  }
}