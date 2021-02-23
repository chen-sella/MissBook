export default {
    template:`
    <section class="home app-main main-container">
        <div class="welcom-text-container">
            <img src="/img/GettyImages-500838041.jpg" height="300px" width="450px">
            <div class="quote-container">
                <p>"The more that you read, the more things you will know.
                 The more that you learn, the more places you'll go."
                </p>
                <p>Dr. Seuss</p>
            </div>
        </div>
        <div class="home-content-container">
            <pre>
            Start a new adventure!
            Choose from the largest books libabry, get the highest quality.
            </pre>
            <router-link class="home-books-link" to="/book">Books list</router-link>
        </div>
    </section>
    `
}