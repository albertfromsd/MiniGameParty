// [MAIN COMPONENTS]
import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';

// [STYLES]
import styles from './Views.module.css';

const Lobby = ({ dispatch }) => {
    const [ formState, setFormState ] = useState({
        uName: "",
        rName: "",
        rPassword: ""
    });
    const [ errorMsg, setErrorMsg ] = useState ("");

    const onChangeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name+": "+e.target.value);
    }

    const enterRoom = e => {
        e.preventDefault();
        if (formState.uName.length>0 && formState.rName.length>0) {
            dispatch(
                {
                type: 'SETUSERNAME',
                userName: formState.uName,
                }
            );
            dispatch(
                {
                type: 'SETROOMNAME',
                roomName: formState.rName,
                },
            );
            navigate('/'+formState.rName);
        } else {
            setErrorMsg("Please enter both a user and room name");
        };
    };

    // in /views/GameRoom.js we will have a list of sockets connected, chatbox, + list of games (later we will add total score for session using state or redux)

    return (
        <>
        <div className={[styles.flexColCen, styles.textWhite, styles.onlyDiv].join(' ')}>
            <br/>
            <h1>Mini Game Party!</h1>
                <br/>
            <p className={styles.textRed}>Please enter your desired nick name and room you wish to enter or create</p> 
                <br/> <br/>
            <form className={styles.flexColCen} onSubmit={enterRoom}>

                <p style={{color: "red"}}>{errorMsg}</p>

                <div className={styles.inputRow}>
                    <label>Nick Name: </label>
                    <input
                        type="text"
                        name="uName"
                        value={formState.uName}
                        onChange={onChangeHandler} /> 
                </div> 
                    <br/>
                <div className={styles.inputRow}>
                    <label>Room Name:</label>
                    <input 
                        type="text"
                        name="rName"
                        value={formState.rName}
                        onChange={onChangeHandler} /> 
                </div> 
                    <br/>
                <div className={styles.inputRow}>
                    <label>Password:</label>
                    <input 
                        type="password"
                        name="rPassword"
                        value={formState.rPassword}
                        onChange={onChangeHandler} />
                </div> 
                    <br/>
                <div className={styles.buttonRow}>
                    <button 
                        type="submit" 
                        name ="roomButton" 
                        value="enterRoom" 
                        className={styles.prettyBtn}>
                            Enter Room
                    </button>
                    <button 
                        type="submit" 
                        name ="roomButton" 
                        value="createRoom" 
                        className={styles.prettyBtn}>
                            Create Room
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

function mapStateToProps(state) {
    return {
        userName: state.userName,
        userScore: state.userScore,
    };
};

export default connect(mapStateToProps)(Lobby);