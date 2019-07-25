import React, { useContext, useReducer, useEffect } from 'react';
import NotificationsContext from '../../../Context/NotificationsContext';

const NotificationsReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_NOTIFICATION':
            return action.notification;
        default:
            return state;
    }
}

const ContextProvider = ({ children }) => {

    const [updatedNotification, notificationDispatch] = useReducer(NotificationsReducer);

    return (
        <NotificationsContext.Provider value={ { notification: updatedNotification, notificationDispatch }}>
            { children }
        </NotificationsContext.Provider>
    );
};

const SnackBar = () => {

    const setNotification = (dispatch) => {
        dispatch({
            type: 'UPDATE_NOTIFICATION',
            notification: {
                open: true,
                message: 'Hey Mike!',
            }
        });
    }; 

    return (
        <ContextProvider.Consumer>
            {({ notification, notificationDispatch }) => (
                <React.Fragment>
                    { notification &&
                        <div>
                            <p>{notification.message}</p>
                        </div>
                    }
                    <button onClick={() => setNotification(notificationDispatch)}>update notification</button>
                </React.Fragment>
            )}
        </ContextProvider.Consumer>
    )
}







// export default ContextProvider;