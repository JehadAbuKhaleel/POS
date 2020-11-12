import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    navbar: {
      overflow: 'Hidden',
      backgroundColor: '#ddd',
      textAlign: 'center',
      height: '53',
      width: '100%',
    },
    a: {
      float: 'left',
      display: 'block',
      color: 'gray',
      padding: '15 9',
      textalign: 'center',
      textdecoration: 'none',
      fontsize: '13',
      marginleft: ' 1',
    },
    content: {
      padding: '4',
    },

    col1: {
      display: 'inline',
    },
    image: {
      borderradius: '50%',
      marginleft: ' 280',
    },
    spanText: {
      color: ' #4CAF50',
      marginright: '10',
      marginleft: '15',
      fontsize: '19',
      fontweight: '500',
    },
    active: {
      backgroundcolor: '#4CAF50',
      color: 'white',
      height: '12',
      width: '28',
      paddingtop: '0',
      margintop: ' 10',
      fontsize: '20',
      marginright: ' 70',
      borderradius: ' 5',
    },
    navStyle: {
      fontsize: '2',
    },
  }),
)
export default useStyles
