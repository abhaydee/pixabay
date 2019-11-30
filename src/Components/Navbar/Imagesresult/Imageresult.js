import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {GridList,GridTile}  from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Zoomin from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
 class Imageresult extends Component {
    render() {
        let imagelistcontent;
        const {images}=this.props;
        if(images){
            imagelistcontent=(
                <GridList cols={3}>
                {images.map(img=>(
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                            <span>
                                by <strong>{img.user}</strong>
                            </span>
                        }
                        actionIcon={
                            <IconButton>
                                <Zoomin color="white"/>
                            </IconButton>
                        }
                    >
                    <img src="img.largeImageURL" alt=""></img>
                    </GridTile>
                ))}
                </GridList>
            )
        }
        else{
            imagelistcontent=null;
        }
        return (
            <div>
                
            </div>
        )
    }
}


Imageresult.PropTypes={
    images:PropTypes.array.isRequired
}
export default Imageresult;