import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
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
        <Link to="" className={classes.active + ' ' + classes.navLink}>
          FBI<span className={classes.spanText}>POS</span>
        </Link>
      </div>
      <Link to="" className={classes.navLink}>
        <FontAwesomeIcon icon={faCreditCard} /> POS
      </Link>
      <Link to="/home/products" className={classes.navLink}>
        <FontAwesomeIcon icon={faArchive} /> Product
      </Link>
      <Link to="" className={classes.navLink}>
        <FontAwesomeIcon icon={faUsers} /> People
      </Link>
      <Link to="" className={classes.navLink}>
        <FontAwesomeIcon icon={faPaperclip} /> Sales
      </Link>
      <Link to="" className={classes.navLink}>
        <FontAwesomeIcon icon={faDollarSign} /> Expense
      </Link>
      <Link to="" className={classes.navLink}>
        <FontAwesomeIcon icon={faBookmark} /> Categories
      </Link>
      <Link to="" className={classes.navLink}>
        <FontAwesomeIcon icon={faCogs} /> Setting
      </Link>
      <Link to="" className={classes.navLink}>
        <FontAwesomeIcon icon={faChartLine} /> Reports
      </Link>
      <div className={classes.profile}>
        <Link to="" className={classes.imageProfile}>
          <img alt="profile" src="src/assets/images/image.jpg" /> admin Doe
        </Link>
        <Link to="" className={classes.signOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
      </div>
    </div>
  )
}

export default Nav
