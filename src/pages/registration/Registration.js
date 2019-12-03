import React from 'react'
import Username from '../../shared/Username'
import Email from '../../shared/Email'
import Password from '../../shared/Password'
import ConfirmPassword from '../../shared/ConfirmPassword'

class Registration extends React.Component {
    render() {
return <form className="container">
    <Username />
    <Email />
    <Password />
    <ConfirmPassword />
</form>
    }
}

export default Registration