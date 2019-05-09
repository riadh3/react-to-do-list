import React from 'react'


const Item = ({ list, onDeliteItem, onEditItem }) => {

    // const onDeliteItem =()=>{
    //     console.log('index')
    // }

    return (
        list ?

            list.map((item, index) => (
                <div key={index} className='item-to-add'>
                    <div className='icon-item'>
                        <i className="fas fa-check"></i>
                    </div>
                    <div className='item-center' >
                        <div className='text-item'>
                            {item}
                        </div>
                        <div className='modify-div'>
                            <div onClick={() => onDeliteItem(index)}>
                                <i className="fas edit fa-trash-alt"
                                    title="Move to trash"></i>
                            </div>
                            <div onClick={() =>onEditItem(item, index)}>
                                <i className="fa fa-pencil-alt edit" title='Edit note'></i>
                            </div>

                        </div>

                    </div>
                </div>
            ))
            : null
    )
}

export default Item

