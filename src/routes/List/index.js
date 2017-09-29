import { connect } from 'react-redux'
import List from './List'

import { backNavigation } from '../../redux/reducers/navigation/actions'

const mapDispatchToProps = {
  backNavigation
}

const mapStateToProps = ({ session }) => ({
  users : session.users
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
