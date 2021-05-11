export const LoginAction = () => {
    return {
        type : 'LOG-IN'
    }
}
export const LogoutAction = () => {
    return {
        type : 'LOG-OUT'
    }
}
export const PostsData = (data) => {
    return {
        type : 'Posts',
        paylod : data
    }
}
export const spliceItem = (id) => {
    return {
        type : 'SPLICE' ,
        index : id
    }
}

export const EditItem = (data) => {
    return {
        type : 'EDIT',
        paylod : data
    }
}

export const search = (data) => {
    return {
        type : 'SEARCH' , 
        paylod : data
    }
}

export const Lang = (data) => {
    return {
        type : 'LANG' , 
        paylod : data
    }
}

