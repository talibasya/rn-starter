import { StackNavigator } from 'react-navigation'
import HomeScreen from './Home'
import ListScreen from './List'

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen }
}, {
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#1D213C'
    }
  }
})

export default SimpleApp
