import Link from 'next/link'
import { Menu } from 'semantic-ui-react'


export default class Header extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render () {

    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='LogIn'
          active={activeItem === 'LogIn'}
          onClick={this.handleItemClick}

        >
          Log In
        </Menu.Item>

        <Menu.Item
          name='Register'
          active={activeItem === 'Register'}
          onClick={this.handleItemClick}
        >
          Register
        </Menu.Item>

        <Menu.Item
          name='QuickPlay'
          active={activeItem === 'Quickplay'}
          onClick={this.handleItemClick}
        >
          QuickPlay
        </Menu.Item>
        <style jsx>{`
          menu.item {
              width: 25%;
          }
    `}</style>
      </Menu>
    )
  }
}


