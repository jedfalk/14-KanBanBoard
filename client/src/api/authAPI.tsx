import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try{
    const response = await fetch('auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json',
      },
      body: JSON.stringify(userInfo),
    });

    if(!response.ok) {
      throw new Error('Login Failed');
    }

    return await response.json();
  } catch (error) {
    console.log('User login error:', error);
    return 'null';
  }
}



export { login };
