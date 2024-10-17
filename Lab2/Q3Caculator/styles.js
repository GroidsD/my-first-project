import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 80,
    marginBottom: 10,
    color:'black'
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Space buttons evenly
    marginVertical: 5, // Add vertical
  },
  buttonNum: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    borderWidth: 3,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:5,

  },
  textButton:{
    fontSize:30,
    color:'black'
  },
  calculate:{
    fontSize:30,
    color:'FFFAF0',

  },
  calculateReduce:{
    fontSize:40,
    color:'FFFAF0',

  },
  colorButton:{
    backgroundColor:'#E8E8E8',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:5,
  },
  numberZero:{
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 50,
    width: 190,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:5,
  },
  lastfunc:{
    backgroundColor:'#E8E8E8',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:5,
  },
  equalFunc:{
    backgroundColor:'#FFCC33',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 50,
    width: 50,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:5,
    color:'#FFFAF0'
  },
  equalText:{
     color:'#FFFAF0',
     fontSize:30,
  },
  resetButton:{
    backgroundColor:'#E8E8E8',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    borderWidth: 3,
    width: 320,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:5,
  }
});
