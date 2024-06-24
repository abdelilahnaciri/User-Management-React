export default function SignUp() {
  return (
    <div className="parent">
      <div className="register">
        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" placeholder="Enter Your Name..." />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="Enter Your Email..." />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Password..."
          />
          <label htmlFor="repassword">Repeat Password</label>
          <input
            id="repassword"
            type="password"
            placeholder="Repeat Password..."
          />
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
