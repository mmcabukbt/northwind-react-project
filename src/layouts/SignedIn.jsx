import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://i.hizliresim.com/j02ajpp.png"></Image>
                <Dropdown pointing="top left" text="Mehmet">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Info" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
