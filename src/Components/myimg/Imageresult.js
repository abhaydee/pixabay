import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {GridList,GridTile}  from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Zoomin from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
 class Imageresult extends Component {
     state={
         open:false,
         currentImg:''
     }
     handleOpen=(img)=>{
        this.setState({open:true,currentImg:img})
     }
     handleClose=()=>{
        this.setState({open:false})
     }
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
                                <Zoomin color="white" onClick={()=>this.handleOpen(img.largeImageURL)}/>
                            </IconButton>
                        }
                    >
                    <img src={img.largeImageURL} alt=""></img>
                    </GridTile>
                ))}
                </GridList>
            )
        }
        else{
            imagelistcontent=null;
        }

        const actions=[
            <FlatButton label="close" primary={true} onClick={this.handleClose} />
        ]
        return (
            <div>
                {imagelistcontent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                <img src={this.state.currentImg} alt="" style={{width:'100%'}}></img>
                </Dialog>
            </div>
        )
    }
}


// Imageresult.PropTypes={
//     images:PropTypes.array.isRequired
// }
export default Imageresult;