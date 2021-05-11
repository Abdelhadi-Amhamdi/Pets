import React from 'react'


const Pic = () => {
    return(
        <>
        <form action="http://localhost:5000/posts/add" method="post" encType="multipart/form-data">
            <input type="file" name="avatar" />
            <input type="submit" value="add"/>
        </form>
        </>
    )
}

export default Pic