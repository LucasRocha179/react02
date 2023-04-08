import React from 'react';

class MyImage extends React.Component {
    render() {
        const { width, height, src, alt } = this.props;
        return (
            <img width={width} height={height} src={src} alt={alt} />
        );
    }
}

export default MyImage;