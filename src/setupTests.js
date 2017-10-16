import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Required for enzyme 3.x */
configure({ adapter: new Adapter() })
