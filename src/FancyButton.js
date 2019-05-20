import React from 'react';

class FancyButton extends React.Component {
  render() {
    const { label } = this.props;

    return (
      <button onClick={this.props.handleClick}>
        {label}
      </button>
    )
  }
}

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    render () {
      const { forwardRef, ...rest } = this.props;

      return <WrappedComponent ref={forwardRef} {...rest} />
    }
    // render () {
    //   return <WrappedComponent {...this.props} />
    // }
  }
  // current为logProps
  // return LogProps;

  // current为FancyButton
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardRef={ref}/>
  })
}

export default logProps(FancyButton);