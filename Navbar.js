import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                padding: '10px', 
                backgroundColor: '#282c34',  
                fontFamily: 'Arial, sans-serif' 
            }}>
                <Link to="/" style={{ 
                    textDecoration: 'none', 
                    color: '#ffffff' 
                }}>
                    <h1 style={{ 
                        marginTop: '10px', 
                        marginLeft: '10px', 
                        fontSize: '24px'  
                    }}>
                        <h2>Movies  |</h2>
                    </h1>
                </Link>
                <Link to="/favourites" style={{ 
                    textDecoration: 'none', 
                    color: '#ffffff', 
                    marginLeft: '20px', 
                    marginTop: '15px', 
                    fontSize: '18px'  
                }}>
                    <h2>Favourites  |</h2>
                </Link>     
            </div>
        )
    }
}
