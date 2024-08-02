import {Component} from 'react'

import './index.css'

const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tossUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    random: headUrl,
    hed: 0,
    tail: 0,
  }

  onTossCoin = () => {
    const {hed, tail} = this.state
    const rondomNum = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCoin = hed
    let latestTailCoin = tail
    if (rondomNum === 0) {
      tossImage = headUrl
      latestHeadCoin += 1
    } else {
      tossImage = tossUrl
      latestTailCoin += 1
    }
    this.setState({
      random: tossImage,
      hed: latestHeadCoin,
      tail: latestTailCoin,
    })
  }

  render() {
    const {random, hed, tail} = this.state
    const headTotal = hed + tail
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={random} className="coin-img" alt="toss result" />
          <br />
          <button className="butn" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para">Total: {headTotal}</p>
            <p className="para">Heads: {hed}</p>
            <p className="para">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
