import React from 'react'

const Edit = ({id}) => {
    const deleteProp =()=>{
        base('property').destroy(id,function(err,deleteEmployee){
            if(err){
                console.error(err);
                return;
            }
            prompt("Deleted ",deleteProp.id);
        })
    };
    useEffect(()=>{
        deleteProp();
    },[]);
    return (
        <div>
            
        </div>
    )
}

export default Edit
