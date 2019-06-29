import React from 'react';
import NoteHeader from './note-header';
import NoteText from './note-text';
import NoteMenu from './note-menu';
import NoteDraggable from './note-draggable';
import { h, getElementStyle } from './utils';
import './note.scss';
class Note extends React.Component{
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
    }
    render(){
    	const { index, selected, width, height, containerHeight, toggle, setToggle, prefix, title, text, color, setColor, addItem, updateItem, selectItem, deleteItem, colorCodes, position, icons } = this.props;
        return h(NoteDraggable,{
            className:`${prefix}--note ${selected?prefix+'--note__selected':''}`,
            position,
            selected,
            target: this.targetRef,
            onDragComplete:(position)=>updateItem(index, {position}),
            onInit:(options)=>updateItem(index, options),
            onSelect:(active)=>selectItem(index, {selected:active}),
            style: getElementStyle('note', this.props)
        },[
            h(NoteHeader, {
                key:'note-header',
                targetRef: this.targetRef,
                index, 
                prefix,
                selected, 
                icons,
                addItem, 
                deleteItem, 
                setToggle, 
                position, 
                title
            }),
            h('div',{
                key:'note-body',
                className:`${prefix}--note__body`,
                style:{
                    backgroundColor: toggle===index+1?"#ffffff":"",
                    maxHeight: `${containerHeight-position.y-34}px`
                }
            },
                toggle===index+1&&colorCodes?h(NoteMenu, { key: 'note-menu', colorCodes, updateItem, index, prefix, color, setColor, colorCodes }):h(NoteText, { key: 'note-text', index, prefix, text, updateItem })
            )
    
        ])
    }
}
export default Note;