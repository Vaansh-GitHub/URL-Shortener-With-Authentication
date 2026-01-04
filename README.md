<h1>URL Shortener</h1>
<p>Design a URL shortener service that takes in a valid URL and
returns a shortened URL,redirecting the user to the previously provided URL. But the twist is that User needs to first login.
As the authentication service i have currently added is STATEFUL so whenever the browser updates the state also updates.
</p>

<p>Also keep track of total visits/click on the URL
</p>

<h2>Routes</h2>

<p>POST /URL - Generates a new short URL and returns the shortened URL
in the format example.com/random-id

GET /:id - Redirects the user to the original URL

GET /url/analytics/:id - Returns the clicks for the provided short id.</p>

<h2>Steps to access the app</h2>
<p>Step 1: Fork the project and run <code>npm i</code> command in it.</p>
<p>Note: Download and setup mongodb in your local computer to run the app otherwise it won't work.</p>
<p>Step 2: Run the command <code>npm index.js</code></p>
<p>Step 3: Open your favourite brower and open the link <code>localhost:8000</code> and enjoy the free service.</p>
