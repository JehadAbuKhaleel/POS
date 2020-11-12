import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './style.css'
import useStyles from './styles'
import {
  faPaperclip,
  faCreditCard,
  faArchive,
  faUsers,
  faChartLine,
  faCogs,
  faBookmark,
  faDollarSign,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
const Nav: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.navbar}>
      <div className={classes.col1}>
        <Link to="" className="active">
          FBI<span className="spanText">POS</span>
        </Link>
      </div>
      <Link to="">
        <FontAwesomeIcon icon={faCreditCard} /> POS
      </Link>
      <Link to="/home/products">
        <FontAwesomeIcon icon={faArchive} /> Product
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faUsers} /> People
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faPaperclip} /> Sales
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faDollarSign} /> Expense
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faBookmark} /> Categories
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faCogs} /> Setting
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faChartLine} /> Reports
      </Link>
      <Link to="" className="image">
        <img src="IMG.JPG" /> admine Doe
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Link>
    </div>
  )
}

export default Nav
