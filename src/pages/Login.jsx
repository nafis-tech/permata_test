import React from 'react'
import {
    FormControl,
    InputGroup,
    Button,
    Image,
} from 'react-bootstrap'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            data :[]

        }
    }

    onLogin = () => {
        let body = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        console.log(body)

        //username : johndoe, password: password

        Axios.post(`https://tasklogin.herokuapp.com/api/login`, body)
            .then(res => {
                console.log(res.data)
                this.setState({ data : res.data})
            })
            .catch(err => {
                console.log(err + 'eror Login')
            })
    }

    render() {
        const { visibility } = this.state
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', margin: ' 10vh 35vw' }}>
                    <h5>Silahkan masuk ke akun Anda</h5>
                    <label>Email</label>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Masukkan Email Anda"
                            ref="username"
                            style={{ color: '#012EA9' }}

                        />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Masukkan Password Anda"
                            type="text"
                            ref="password"
                            style={{ color: '#012EA9' }}
                            // {visibility ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            onClick={() => this.setState({ visibility: !visibility })}

                        />
                    </InputGroup>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '3vh' }}>
                        <label style={{ fontSize: '13px' }}>
                            <input type="radio" value="option1" style={{ marginRight: '1vw' }} />
                            Remember me
                        </label>
                        <Link style={{ color: '#03256C', fontSize: '13px', fontWeight: 'bold' }} to="/">Lupa Password?</Link>
                    </div>
                    <a href="#home" style={styles.button} onClick={this.onLogin}>
                        Masuk
                    </a>
                    <h6 style={{ marginTop: '7vh', fontSize: '13px', textAlign: 'center' }}>Belum punya akun? <Link style={{ color: '#03256C', fontWeight: 'bold' }} to="/">Daftar sekarang </Link></h6>
                </div>
            </div>
        )
    }
}
const styles = {
    button: {
        backgroundColor: '#FFC107',
        border: 'none',
        margin: '3vh 0 0 0',
        padding: '2vh 0 2vh 0'
    },
}

export default Login;