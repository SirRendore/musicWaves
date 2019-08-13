import React, { Component } from "react";

// put in env file later
const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = "c636e8428c5f45e8b3113a81e1aeb176";
const redirectUri = "http://localhost:3000/callback";
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
];

const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
window.location.hash = "";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null
        }
    }

    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
        }
    }
    render() {
        return <div>Hello <br/>
            {!this.state.token && (
                <a
                    className="btn btn--loginApp-link"
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                >
                    Login to Spotify
        </a>
            )}
        </div>
    }
};

export default Login;