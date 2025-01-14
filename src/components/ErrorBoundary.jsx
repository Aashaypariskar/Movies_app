import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: null
        }
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error,errorInfo){
        this.setState({errorInfo})
        console.log('error caught by error boundary' )
    }


    render(){
        if (this.state.hasError){
            <h2>Hello Aakash!!</h2>
        }
        return this.props.children;
    }
}


export default ErrorBoundary;






