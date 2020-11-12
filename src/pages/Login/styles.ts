import { createStyles, makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 354,
      hight:350,
      margin: 'auto' 
    },
    loginBtn: {
      flexGrow: 1,
      background:'#148AFF',
      color:'white',
      height:54,
      width:288,
      marginLeft:48,
      marginRight:15,
      marginBottom:20,
      marginTop:35
        },
    header: {
      textAlign: 'center',
      background: 'white',
      color: 'gray',
     
    },
    header1: {
        textAlign: 'center',
        background: 'white',
        color: 'black'
      },
    card: {
      marginTop: 80
    },
    txt:{
        height:42,
        width:288,
        marginLeft:30,
        marginRight:30,
        marginBottom:10,
        
    }
  })
);
export default useStyles;