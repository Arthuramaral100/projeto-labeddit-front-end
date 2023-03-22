export const goToLoginPage = (navigate) =>{
    navigate("/")
}
export const goToSignupPage = (navigate) =>{
    navigate("/signup")
}
export const goToHomePage = (navigate) =>{
    navigate("/main")
}

export const goToPostPage = (navigate, post)=>{
    navigate(`/posts/${post}`)
}