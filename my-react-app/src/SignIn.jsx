function SignIn() {

    return(

        <form action ="#" id = "myform">

        <h1>Sign In</h1>

        <br/><br/>

        <p>*Username: <input type ="text" id = "username" required = "required"/> </p>

        <p>*Password: <input type ="password" id = "password" required = "required"/> </p>

        <br/><br/>
        
        <a href="order.html"><input type = "submit" name = "submit-btn" value = "Submit"/></a>

    </form>

    );

}
export default SignIn;