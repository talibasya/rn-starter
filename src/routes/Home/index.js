import { connect } from 'react-redux'
import Home from './Home'
import { navigateTo } from '../../redux/reducers/navigation/actions'

const mapDispatchToProps = {
  navigateTo
}

const mapStateToProps = ({ session }) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
