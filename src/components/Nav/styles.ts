import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    navbar: {
      overflow: 'Hidden',
      backgroundColor: '#ddd',
      textAlign: 'center',
      height: 53,
      width: '100%',
    },
    navLink: {
      float: 'left',
      display: 'block',
      color: 'gray',
      padding: '15px 9px',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: 13,
      marginLeft: 1,
    },
    content: {
      padding: 4,
    },

    col1: {
      display: 'inline',
    },
    imageProfile: {
      borderradius: '50%',
      marginleft: 50,
    },
    spanText: {
      color: ' #4CAF50',
      marginRight: 10,
      marginLeft: 15,
      fontSize: 19,
      fontweight: 500,
    },
    active: {
      backgroundColor: '#4CAF50',
      color: 'white',
      height: 12,
      width: 28,
      paddingTop: 0,
      marginTop: 10,
      fontSize: 20,
      marginRight: 70,
      borderRadius: 5,
    },
    navStyle: {
      fontsize: 2,
    },
    profile: {
      marginTop: 14,
      marginRight: '-355px',
    },
    signOut: {
      marginLeft: 39,
    },
  }),
)
export default useStyles
